# RentNest API Integration Guide

Backend API for RentNest — a property rental marketplace with **Tenant**, **Landlord**, and **Admin** roles.

- **Base URL:** `http://localhost:<PORT>/api` (no `/v1` version prefix — the base path is just `/api`)
- **Content-Type:** `application/json` for all endpoints except property image upload, which is `multipart/form-data`

---

## 1. Authentication

Auth is JWT-based. Two delivery methods work interchangeably:

1. **httpOnly cookies** — `accessToken` and `refreshToken`, set automatically by `POST /auth/login`. Good for browser clients; the server reads these first if present.
2. **Authorization header** — `Authorization: Bearer <accessToken>` (or a raw `Authorization: <accessToken>` without the `Bearer` prefix also works). Use this for mobile/non-cookie clients.

`POST /auth/login` returns the tokens in the JSON body **as well as** setting the cookies, so pick whichever delivery method suits your client.

There is no logout endpoint and no refresh-token endpoint yet, despite a refresh token being issued at login — treat the access token as the only usable token today.

**Roles:** `TENANT`, `LANDLORD`, `ADMIN`. Each endpoint below states which role(s) may call it, or `public`.

---

## 2. Response shape

### Success envelope

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Human readable message",
  "data": "<endpoint-specific, see each endpoint below>",
  "meta": null
}
```

`meta` is reserved for pagination (`{ page, limit, total }`) but **no endpoint implements pagination yet** — every list endpoint returns the full result set.

### Error envelope

```json
{
  "success": false,
  "statusCode": 500,
  "message": "failed to register user",
  "error": "The actual reason, e.g. 'User not found', 'Property not found or you are not the owner'"
}
```

> ⚠️ **Known backend quirk:** almost every error currently comes back as HTTP `500` with the same hardcoded `message` field (`"failed to register user"`), regardless of the real cause (not-found, forbidden, duplicate email, wrong password, etc.). **Always display `error` (or fall back to `message`) to the user — do not branch UI logic on the HTTP status code**, since it's not reliable yet.

One inconsistency to watch for: some list endpoints return `data` as a raw array, others wrap it as `data.result`. This is called out per-endpoint below.

---

## 3. Enums

| Enum | Values |
|---|---|
| `Role` | `TENANT`, `LANDLORD`, `ADMIN` |
| `UserStatus` | `ACTIVE`, `BANNED` |
| `PropertyStatus` | `AVAILABLE`, `RENTED`, `UNAVAILABLE` |
| `RentalRequestStatus` | `PENDING`, `APPROVED`, `REJECTED`, `COMPLETED`, `CANCELLED` |
| `PaymentStatus` | `PENDING`, `PAID`, `FAILED`, `REFUNDED` |

---

## 4. Data models

### User
```
id, name, email, role, status, createdAt, updatedAt
```
`password` is never returned.

### Category
```
id, name, description
```

### Property
```
id, title, description, location, price (string), categoryId, landlordId,
status, images (string[]), createdAt, updatedAt,
category  // only present on GET /properties, NOT on GET /properties/:id
```
- `price` is stored and returned as a **string**, not a number — `parseFloat`/`Number()` it before doing math or formatting.
- `images` is an array of Cloudinary secure URLs, populated via the photo upload endpoint (§6.4). Defaults to `[]`.

### RentalRequest
```
id, tenantId, propertyId, status, agreedPrice (string | null), createdAt, updatedAt
```
`agreedPrice` is frozen at the property's price the moment a request is `APPROVED`, so a later price edit on the property doesn't change what the tenant owes.

### Review
```
id, rating (int), comment, createdAt, tenantId, propertyId
```

### Payment
```
id, amount (string), transactionId, checkoutSessionId, rentalRequestId,
method, provider (default "STRIPE"), paidAt, createdAt, status,
rentalRequest  // included on payment GET endpoints
```

---

## 5. Auth endpoints

### `POST /auth/register`
**Auth:** public

```json
// Request
{ "name": "Jane Doe", "email": "jane@example.com", "password": "secret123", "role": "TENANT" }
```
- `role` must be `"TENANT"` or `"LANDLORD"` — registering as `"ADMIN"` is rejected server-side.
- **201** → `data`: the created `User` (no password).
- Errors: email already registered, role is `ADMIN`.

### `POST /auth/login`
**Auth:** public

```json
// Request
{ "email": "jane@example.com", "password": "secret123" }
```
- **200** → `data`: `{ accessToken, refreshToken }`. Also sets `accessToken`/`refreshToken` httpOnly cookies.
- Errors: user not found, user is `BANNED`, password mismatch.

### `GET /auth/me`
**Auth:** any authenticated user
- **200** → `data`: the calling user's own `User` record (no password).

### `PATCH /auth/me` — update own profile
**Auth:** any authenticated user. Updates the caller's own record — there's no `:id` param, the user comes from the JWT.

```json
// Change name only
{ "name": "Jane Smith" }

// Change password (currentPassword is required whenever newPassword is sent)
{ "currentPassword": "secret123", "newPassword": "newSecret456" }

// Both at once also works
{ "name": "Jane Smith", "currentPassword": "secret123", "newPassword": "newSecret456" }
```
- **Email is immutable** — there is no way to change it through this or any endpoint. Sending an `email` field in the body is rejected outright.
- Changing the password requires `currentPassword` to match what's on file; sending `newPassword` without it (or with the wrong value) is rejected.
- Sending an empty body (neither `name` nor `newPassword`) is rejected with "Nothing to update".
- **200** → `data`: updated `User` (no password).
- Errors: `email` present in body, `newPassword` sent without `currentPassword`, `currentPassword` incorrect, nothing to update.

---

## 6. Landlord endpoints (all require `auth: LANDLORD`)

### 6.1 `POST /landlord/properties`
```json
{
  "title": "Cozy 2BR downtown",
  "description": "...",
  "location": "Berlin",
  "price": "1200",
  "categoryName": "Apartment"
}
```
- `categoryName` must exactly match an existing `Category.name` (case-sensitive) — fetch categories via `GET /categories` first.
- **201** → `data`: the created `Property` (`landlordId` taken from the token, `status` defaults to `AVAILABLE`, `images` starts as `[]`).
- Errors: `categoryName` doesn't match any category (raw Prisma error today, not a friendly message).

### 6.2 `PUT /landlord/properties/:id`
Owner-only. All fields optional:
```json
{ "title": "...", "description": "...", "location": "...", "price": "...", "status": "RENTED" }
```
- **200** → `data`: updated `Property`.
- Errors: property not found or you're not the owner.

### 6.3 `DELETE /landlord/properties/:id`
Owner-only.
- **200** → `data`: `[]` always.
- Deleting a property **cascades**: its `RentalRequests` and `Reviews` are deleted automatically, and any `Payments` tied to those rental requests cascade too. This applies whether the delete happens through this endpoint or directly in Prisma Studio.
- Errors: property not found or you're not the owner.

### 6.4 `POST /landlord/properties/:id/images` — photo upload
Owner-only. **`multipart/form-data`, not JSON.**

| Field | Type | Notes |
|---|---|---|
| `images` | file(s) | up to 8 files per request |

- Allowed mimetypes: `image/jpeg`, `image/png`, `image/webp`, `image/avif`
- Max file size: 5 MB each
- Files are uploaded server-side to Cloudinary (folder `rentnest/properties/<propertyId>`) — the backend never writes to local disk, so this works fine on serverless hosts like Vercel.
- **200** → `data`: updated `Property`, with the new Cloudinary URLs **appended** to any existing `images`.
- Errors: property not found/not owned, no files sent, wrong mimetype, file too large, too many files.

Example (fetch, browser):
```js
const form = new FormData();
for (const file of selectedFiles) form.append("images", file);

await fetch(`${BASE_URL}/landlord/properties/${propertyId}/images`, {
  method: "POST",
  credentials: "include", // send the accessToken cookie
  body: form               // do NOT set Content-Type manually — the browser sets the multipart boundary
});
```

Example (curl):
```bash
curl -X POST "$BASE_URL/landlord/properties/$PROPERTY_ID/images" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -F "images=@/path/photo1.jpg" \
  -F "images=@/path/photo2.jpg"
```

### 6.5 `GET /landlord/requests`
- **200** → `data`: `{ result: RentalRequest[] }` — **note the `result` wrapper**, unlike most list endpoints.
- Returns rental requests for properties owned by the caller. Only ids are included, no nested tenant/property details.

### 6.6 `PATCH /landlord/requests/:id`
```json
{ "status": "APPROVED" }
```
- `status` ∈ `"APPROVED" | "REJECTED" | "COMPLETED"`.
- **200** → `data`: updated `RentalRequest`.
- Errors:
  - request not found / not owned by this landlord
  - already `REJECTED` or `COMPLETED` (terminal states)
  - `APPROVED`/`REJECTED` only valid from `PENDING`
  - `APPROVED` requires the property to currently be `AVAILABLE`
  - `COMPLETED` requires current status `APPROVED` **and** an existing `Payment` with status `PAID`

---

## 7. Public property/category endpoints (no auth)

### `GET /properties`
Query params (all optional): `location` (partial, case-insensitive), `category` (name, case-insensitive exact match), `minPrice`, `maxPrice`.
- **200** → `data`: `Property[]`, each with nested `category`. Only `status = AVAILABLE` properties are returned.
- Errors: no properties match the filters.

### `GET /properties/:id`
- **200** → `data`: `Property` — **`category` is NOT included here**, unlike the list endpoint (backend inconsistency, plan for it).
- Errors: property not found.

### `GET /categories`
- **200** → `data`: `Category[]`.
- Errors: no categories exist.

---

## 8. Rental endpoints (all require `auth: TENANT`)

### `POST /rentals/`
```json
{ "propertyId": "uuid" }
```
- **201** → `data`: created `RentalRequest` (`status` defaults to `PENDING`).
- Errors: property not found.

### `GET /rentals/`
- **200** → `data`: `{ result: RentalRequest[] }` (wrapped), scoped to the calling tenant.
- Errors: no rental requests exist for this tenant.

### `GET /rentals/:id`
Must own the request.
- **200** → `data`: `RentalRequest`.
- Errors: not found / not owned.

---

## 9. Review endpoints (`auth: TENANT`)

### `POST /reviews/`
```json
{ "propertyId": "uuid", "rating": 5, "comment": "Great stay!" }
```
- Requires the tenant to have a `COMPLETED` rental request for this property.
- One review per (tenant, property) pair — enforced by a unique constraint.
- **201** → `data`: created `Review`.
- Errors: no completed rental for this property, already reviewed this property.

> This is currently the **only** review endpoint — there is no way to list/fetch reviews via the API, not even by property.

---

## 10. Payment endpoints (`auth: TENANT`)

### `POST /payments/`
```json
{ "rentalRequestId": "uuid" }
```
- Creates a Stripe Checkout session in **EUR**, amount = the rental's `agreedPrice`/property price.
- **201** → `data`: `{ payment: Payment, checkoutUrl: string | null }`. Redirect the browser to `checkoutUrl` to complete payment.
- On completion, Stripe calls the backend's webhook to mark the payment `PAID` and flips the property to `RENTED`. This webhook is server-to-server only — don't call it from the frontend.
- Errors: no `APPROVED` rental request found for this tenant with that id, a payment already exists for this rental request.
- Success/cancel redirects go to `FRONT_URL` env value + `/payment/success` / `/payment/cancel` — make sure your frontend is deployed at that origin, or ask backend to update `FRONT_URL`.

### `GET /payments/`
- **200** → `data`: `Payment[]` (each with nested `rentalRequest`), scoped to the calling tenant.
- Errors: no payments exist for this tenant.

### `GET /payments/:id`
Must own the underlying rental request.
- **200** → `data`: `Payment` (with nested `rentalRequest`).
- Errors: not found / not owned.

---

## 11. Admin endpoints (all require `auth: ADMIN`)

A default admin account is seeded automatically on server startup: **`admin@rentnest.com` / `admin123`** — only if no user with that email already exists. Registering a new `ADMIN` account through `POST /auth/register` is blocked; this seed is the only way to get one.

### `POST /admin/categories`
```json
{ "name": "Apartment", "description": "..." }
```
- **201** → `data`: created `Category`.
- Errors: category name already exists.

### `GET /admin/users`
- **200** → `data`: `{ result: User[] }` (wrapped).
- Errors: no users exist.

### `PATCH /admin/users/:id`
```json
{ "status": "BANNED" }
```
- **200** → `data`: updated `User` (no password).
- Errors: user not found.

### `GET /admin/properties`
- **200** → `data`: `Property[]` — **all statuses**, unlike the public listing which filters to `AVAILABLE` only. No `category`/`landlord` included.

### `GET /admin/rentals`
- **200** → `data`: `RentalRequest[]` — all, no includes.

---

## 12. Things to watch for when integrating

- **Don't rely on HTTP status codes for error branching** — read `error`/`message` from the body instead (see §2).
- **`price` and `amount` are strings** everywhere — convert before formatting or doing arithmetic in the UI.
- **List endpoints are inconsistent**: some return `data` as a bare array, others as `data.result`. Check the table above per endpoint.
- **No pagination** exists yet on any list endpoint.
- **Property deletion cascades** to its rental requests, reviews, and any payments on those rental requests — a destructive action with no confirmation built into the API, so gate it behind a confirm dialog in the UI.
- **Photo upload is the only multipart endpoint** — everything else is JSON.
- There's no logout or refresh-token endpoint — plan session expiry handling around the access token's TTL only.
