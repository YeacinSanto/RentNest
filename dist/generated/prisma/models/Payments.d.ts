import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Payments
 *
 */
export type PaymentsModel = runtime.Types.Result.DefaultSelection<Prisma.$PaymentsPayload>;
export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null;
    _min: PaymentsMinAggregateOutputType | null;
    _max: PaymentsMaxAggregateOutputType | null;
};
export type PaymentsMinAggregateOutputType = {
    id: string | null;
    amount: string | null;
    transactionId: string | null;
    rentalRequestId: string | null;
    createdAt: Date | null;
    status: $Enums.PaymentStatus | null;
};
export type PaymentsMaxAggregateOutputType = {
    id: string | null;
    amount: string | null;
    transactionId: string | null;
    rentalRequestId: string | null;
    createdAt: Date | null;
    status: $Enums.PaymentStatus | null;
};
export type PaymentsCountAggregateOutputType = {
    id: number;
    amount: number;
    transactionId: number;
    rentalRequestId: number;
    createdAt: number;
    status: number;
    _all: number;
};
export type PaymentsMinAggregateInputType = {
    id?: true;
    amount?: true;
    transactionId?: true;
    rentalRequestId?: true;
    createdAt?: true;
    status?: true;
};
export type PaymentsMaxAggregateInputType = {
    id?: true;
    amount?: true;
    transactionId?: true;
    rentalRequestId?: true;
    createdAt?: true;
    status?: true;
};
export type PaymentsCountAggregateInputType = {
    id?: true;
    amount?: true;
    transactionId?: true;
    rentalRequestId?: true;
    createdAt?: true;
    status?: true;
    _all?: true;
};
export type PaymentsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to aggregate.
     */
    where?: Prisma.PaymentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?: Prisma.PaymentsOrderByWithRelationInput | Prisma.PaymentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PaymentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Payments
    **/
    _count?: true | PaymentsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType;
};
export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
    [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayments[P]> : Prisma.GetScalarType<T[P], AggregatePayments[P]>;
};
export type PaymentsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentsWhereInput;
    orderBy?: Prisma.PaymentsOrderByWithAggregationInput | Prisma.PaymentsOrderByWithAggregationInput[];
    by: Prisma.PaymentsScalarFieldEnum[] | Prisma.PaymentsScalarFieldEnum;
    having?: Prisma.PaymentsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentsCountAggregateInputType | true;
    _min?: PaymentsMinAggregateInputType;
    _max?: PaymentsMaxAggregateInputType;
};
export type PaymentsGroupByOutputType = {
    id: string;
    amount: string;
    transactionId: string | null;
    rentalRequestId: string;
    createdAt: Date;
    status: $Enums.PaymentStatus;
    _count: PaymentsCountAggregateOutputType | null;
    _min: PaymentsMinAggregateOutputType | null;
    _max: PaymentsMaxAggregateOutputType | null;
};
export type GetPaymentsGroupByPayload<T extends PaymentsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentsGroupByOutputType[P]>;
}>>;
export type PaymentsWhereInput = {
    AND?: Prisma.PaymentsWhereInput | Prisma.PaymentsWhereInput[];
    OR?: Prisma.PaymentsWhereInput[];
    NOT?: Prisma.PaymentsWhereInput | Prisma.PaymentsWhereInput[];
    id?: Prisma.StringFilter<"Payments"> | string;
    amount?: Prisma.StringFilter<"Payments"> | string;
    transactionId?: Prisma.StringNullableFilter<"Payments"> | string | null;
    rentalRequestId?: Prisma.StringFilter<"Payments"> | string;
    createdAt?: Prisma.DateTimeFilter<"Payments"> | Date | string;
    status?: Prisma.EnumPaymentStatusFilter<"Payments"> | $Enums.PaymentStatus;
    rentalRequest?: Prisma.XOR<Prisma.RentalRequestsScalarRelationFilter, Prisma.RentalRequestsWhereInput>;
};
export type PaymentsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rentalRequestId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rentalRequest?: Prisma.RentalRequestsOrderByWithRelationInput;
};
export type PaymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    rentalRequestId?: string;
    AND?: Prisma.PaymentsWhereInput | Prisma.PaymentsWhereInput[];
    OR?: Prisma.PaymentsWhereInput[];
    NOT?: Prisma.PaymentsWhereInput | Prisma.PaymentsWhereInput[];
    amount?: Prisma.StringFilter<"Payments"> | string;
    transactionId?: Prisma.StringNullableFilter<"Payments"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Payments"> | Date | string;
    status?: Prisma.EnumPaymentStatusFilter<"Payments"> | $Enums.PaymentStatus;
    rentalRequest?: Prisma.XOR<Prisma.RentalRequestsScalarRelationFilter, Prisma.RentalRequestsWhereInput>;
}, "id" | "rentalRequestId">;
export type PaymentsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rentalRequestId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.PaymentsCountOrderByAggregateInput;
    _max?: Prisma.PaymentsMaxOrderByAggregateInput;
    _min?: Prisma.PaymentsMinOrderByAggregateInput;
};
export type PaymentsScalarWhereWithAggregatesInput = {
    AND?: Prisma.PaymentsScalarWhereWithAggregatesInput | Prisma.PaymentsScalarWhereWithAggregatesInput[];
    OR?: Prisma.PaymentsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PaymentsScalarWhereWithAggregatesInput | Prisma.PaymentsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Payments"> | string;
    amount?: Prisma.StringWithAggregatesFilter<"Payments"> | string;
    transactionId?: Prisma.StringNullableWithAggregatesFilter<"Payments"> | string | null;
    rentalRequestId?: Prisma.StringWithAggregatesFilter<"Payments"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Payments"> | Date | string;
    status?: Prisma.EnumPaymentStatusWithAggregatesFilter<"Payments"> | $Enums.PaymentStatus;
};
export type PaymentsCreateInput = {
    id?: string;
    amount: string;
    transactionId?: string | null;
    createdAt?: Date | string;
    status?: $Enums.PaymentStatus;
    rentalRequest: Prisma.RentalRequestsCreateNestedOneWithoutPaymentInput;
};
export type PaymentsUncheckedCreateInput = {
    id?: string;
    amount: string;
    transactionId?: string | null;
    rentalRequestId: string;
    createdAt?: Date | string;
    status?: $Enums.PaymentStatus;
};
export type PaymentsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    rentalRequest?: Prisma.RentalRequestsUpdateOneRequiredWithoutPaymentNestedInput;
};
export type PaymentsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalRequestId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
};
export type PaymentsCreateManyInput = {
    id?: string;
    amount: string;
    transactionId?: string | null;
    rentalRequestId: string;
    createdAt?: Date | string;
    status?: $Enums.PaymentStatus;
};
export type PaymentsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
};
export type PaymentsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalRequestId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
};
export type PaymentsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    rentalRequestId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type PaymentsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    rentalRequestId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type PaymentsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    transactionId?: Prisma.SortOrder;
    rentalRequestId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type PaymentsNullableScalarRelationFilter = {
    is?: Prisma.PaymentsWhereInput | null;
    isNot?: Prisma.PaymentsWhereInput | null;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus;
};
export type PaymentsCreateNestedOneWithoutRentalRequestInput = {
    create?: Prisma.XOR<Prisma.PaymentsCreateWithoutRentalRequestInput, Prisma.PaymentsUncheckedCreateWithoutRentalRequestInput>;
    connectOrCreate?: Prisma.PaymentsCreateOrConnectWithoutRentalRequestInput;
    connect?: Prisma.PaymentsWhereUniqueInput;
};
export type PaymentsUncheckedCreateNestedOneWithoutRentalRequestInput = {
    create?: Prisma.XOR<Prisma.PaymentsCreateWithoutRentalRequestInput, Prisma.PaymentsUncheckedCreateWithoutRentalRequestInput>;
    connectOrCreate?: Prisma.PaymentsCreateOrConnectWithoutRentalRequestInput;
    connect?: Prisma.PaymentsWhereUniqueInput;
};
export type PaymentsUpdateOneWithoutRentalRequestNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentsCreateWithoutRentalRequestInput, Prisma.PaymentsUncheckedCreateWithoutRentalRequestInput>;
    connectOrCreate?: Prisma.PaymentsCreateOrConnectWithoutRentalRequestInput;
    upsert?: Prisma.PaymentsUpsertWithoutRentalRequestInput;
    disconnect?: Prisma.PaymentsWhereInput | boolean;
    delete?: Prisma.PaymentsWhereInput | boolean;
    connect?: Prisma.PaymentsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PaymentsUpdateToOneWithWhereWithoutRentalRequestInput, Prisma.PaymentsUpdateWithoutRentalRequestInput>, Prisma.PaymentsUncheckedUpdateWithoutRentalRequestInput>;
};
export type PaymentsUncheckedUpdateOneWithoutRentalRequestNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentsCreateWithoutRentalRequestInput, Prisma.PaymentsUncheckedCreateWithoutRentalRequestInput>;
    connectOrCreate?: Prisma.PaymentsCreateOrConnectWithoutRentalRequestInput;
    upsert?: Prisma.PaymentsUpsertWithoutRentalRequestInput;
    disconnect?: Prisma.PaymentsWhereInput | boolean;
    delete?: Prisma.PaymentsWhereInput | boolean;
    connect?: Prisma.PaymentsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PaymentsUpdateToOneWithWhereWithoutRentalRequestInput, Prisma.PaymentsUpdateWithoutRentalRequestInput>, Prisma.PaymentsUncheckedUpdateWithoutRentalRequestInput>;
};
export type PaymentsCreateWithoutRentalRequestInput = {
    id?: string;
    amount: string;
    transactionId?: string | null;
    createdAt?: Date | string;
    status?: $Enums.PaymentStatus;
};
export type PaymentsUncheckedCreateWithoutRentalRequestInput = {
    id?: string;
    amount: string;
    transactionId?: string | null;
    createdAt?: Date | string;
    status?: $Enums.PaymentStatus;
};
export type PaymentsCreateOrConnectWithoutRentalRequestInput = {
    where: Prisma.PaymentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentsCreateWithoutRentalRequestInput, Prisma.PaymentsUncheckedCreateWithoutRentalRequestInput>;
};
export type PaymentsUpsertWithoutRentalRequestInput = {
    update: Prisma.XOR<Prisma.PaymentsUpdateWithoutRentalRequestInput, Prisma.PaymentsUncheckedUpdateWithoutRentalRequestInput>;
    create: Prisma.XOR<Prisma.PaymentsCreateWithoutRentalRequestInput, Prisma.PaymentsUncheckedCreateWithoutRentalRequestInput>;
    where?: Prisma.PaymentsWhereInput;
};
export type PaymentsUpdateToOneWithWhereWithoutRentalRequestInput = {
    where?: Prisma.PaymentsWhereInput;
    data: Prisma.XOR<Prisma.PaymentsUpdateWithoutRentalRequestInput, Prisma.PaymentsUncheckedUpdateWithoutRentalRequestInput>;
};
export type PaymentsUpdateWithoutRentalRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
};
export type PaymentsUncheckedUpdateWithoutRentalRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
};
export type PaymentsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    amount?: boolean;
    transactionId?: boolean;
    rentalRequestId?: boolean;
    createdAt?: boolean;
    status?: boolean;
    rentalRequest?: boolean | Prisma.RentalRequestsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payments"]>;
export type PaymentsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    amount?: boolean;
    transactionId?: boolean;
    rentalRequestId?: boolean;
    createdAt?: boolean;
    status?: boolean;
    rentalRequest?: boolean | Prisma.RentalRequestsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payments"]>;
export type PaymentsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    amount?: boolean;
    transactionId?: boolean;
    rentalRequestId?: boolean;
    createdAt?: boolean;
    status?: boolean;
    rentalRequest?: boolean | Prisma.RentalRequestsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payments"]>;
export type PaymentsSelectScalar = {
    id?: boolean;
    amount?: boolean;
    transactionId?: boolean;
    rentalRequestId?: boolean;
    createdAt?: boolean;
    status?: boolean;
};
export type PaymentsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "amount" | "transactionId" | "rentalRequestId" | "createdAt" | "status", ExtArgs["result"]["payments"]>;
export type PaymentsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rentalRequest?: boolean | Prisma.RentalRequestsDefaultArgs<ExtArgs>;
};
export type PaymentsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rentalRequest?: boolean | Prisma.RentalRequestsDefaultArgs<ExtArgs>;
};
export type PaymentsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rentalRequest?: boolean | Prisma.RentalRequestsDefaultArgs<ExtArgs>;
};
export type $PaymentsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Payments";
    objects: {
        rentalRequest: Prisma.$RentalRequestsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        amount: string;
        transactionId: string | null;
        rentalRequestId: string;
        createdAt: Date;
        status: $Enums.PaymentStatus;
    }, ExtArgs["result"]["payments"]>;
    composites: {};
};
export type PaymentsGetPayload<S extends boolean | null | undefined | PaymentsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PaymentsPayload, S>;
export type PaymentsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PaymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentsCountAggregateInputType | true;
};
export interface PaymentsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Payments'];
        meta: {
            name: 'Payments';
        };
    };
    /**
     * Find zero or one Payments that matches the filter.
     * @param {PaymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentsFindUniqueArgs>(args: Prisma.SelectSubset<T, PaymentsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PaymentsClient<runtime.Types.Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PaymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentsClient<runtime.Types.Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentsFindFirstArgs>(args?: Prisma.SelectSubset<T, PaymentsFindFirstArgs<ExtArgs>>): Prisma.Prisma__PaymentsClient<runtime.Types.Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PaymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentsClient<runtime.Types.Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     *
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PaymentsFindManyArgs>(args?: Prisma.SelectSubset<T, PaymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Payments.
     * @param {PaymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     *
     */
    create<T extends PaymentsCreateArgs>(args: Prisma.SelectSubset<T, PaymentsCreateArgs<ExtArgs>>): Prisma.Prisma__PaymentsClient<runtime.Types.Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Payments.
     * @param {PaymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PaymentsCreateManyArgs>(args?: Prisma.SelectSubset<T, PaymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentsCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PaymentsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PaymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Payments.
     * @param {PaymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     *
     */
    delete<T extends PaymentsDeleteArgs>(args: Prisma.SelectSubset<T, PaymentsDeleteArgs<ExtArgs>>): Prisma.Prisma__PaymentsClient<runtime.Types.Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Payments.
     * @param {PaymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PaymentsUpdateArgs>(args: Prisma.SelectSubset<T, PaymentsUpdateArgs<ExtArgs>>): Prisma.Prisma__PaymentsClient<runtime.Types.Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Payments.
     * @param {PaymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PaymentsDeleteManyArgs>(args?: Prisma.SelectSubset<T, PaymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PaymentsUpdateManyArgs>(args: Prisma.SelectSubset<T, PaymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentsUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PaymentsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PaymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Payments.
     * @param {PaymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends PaymentsUpsertArgs>(args: Prisma.SelectSubset<T, PaymentsUpsertArgs<ExtArgs>>): Prisma.Prisma__PaymentsClient<runtime.Types.Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentsCountArgs>(args?: Prisma.Subset<T, PaymentsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentsAggregateArgs>(args: Prisma.Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>;
    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends PaymentsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PaymentsGroupByArgs['orderBy'];
    } : {
        orderBy?: PaymentsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PaymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Payments model
     */
    readonly fields: PaymentsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Payments.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PaymentsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rentalRequest<T extends Prisma.RentalRequestsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RentalRequestsDefaultArgs<ExtArgs>>): Prisma.Prisma__RentalRequestsClient<runtime.Types.Result.GetResult<Prisma.$RentalRequestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Payments model
 */
export interface PaymentsFieldRefs {
    readonly id: Prisma.FieldRef<"Payments", 'String'>;
    readonly amount: Prisma.FieldRef<"Payments", 'String'>;
    readonly transactionId: Prisma.FieldRef<"Payments", 'String'>;
    readonly rentalRequestId: Prisma.FieldRef<"Payments", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Payments", 'DateTime'>;
    readonly status: Prisma.FieldRef<"Payments", 'PaymentStatus'>;
}
/**
 * Payments findUnique
 */
export type PaymentsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: Prisma.PaymentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payments
     */
    omit?: Prisma.PaymentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaymentsInclude<ExtArgs> | null;
    /**
     * Filter, which Payments to fetch.
     */
    where: Prisma.PaymentsWhereUniqueInput;
};
/**
 * Payments findUniqueOrThrow
 */
export type PaymentsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: Prisma.PaymentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payments
     */
    omit?: Prisma.PaymentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaymentsInclude<ExtArgs> | null;
    /**
     * Filter, which Payments to fetch.
     */
    where: Prisma.PaymentsWhereUniqueInput;
};
/**
 * Payments findFirst
 */
export type PaymentsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: Prisma.PaymentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payments
     */
    omit?: Prisma.PaymentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaymentsInclude<ExtArgs> | null;
    /**
     * Filter, which Payments to fetch.
     */
    where?: Prisma.PaymentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?: Prisma.PaymentsOrderByWithRelationInput | Prisma.PaymentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Payments.
     */
    cursor?: Prisma.PaymentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Payments.
     */
    distinct?: Prisma.PaymentsScalarFieldEnum | Prisma.PaymentsScalarFieldEnum[];
};
/**
 * Payments findFirstOrThrow
 */
export type PaymentsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: Prisma.PaymentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payments
     */
    omit?: Prisma.PaymentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaymentsInclude<ExtArgs> | null;
    /**
     * Filter, which Payments to fetch.
     */
    where?: Prisma.PaymentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?: Prisma.PaymentsOrderByWithRelationInput | Prisma.PaymentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Payments.
     */
    cursor?: Prisma.PaymentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Payments.
     */
    distinct?: Prisma.PaymentsScalarFieldEnum | Prisma.PaymentsScalarFieldEnum[];
};
/**
 * Payments findMany
 */
export type PaymentsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: Prisma.PaymentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payments
     */
    omit?: Prisma.PaymentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaymentsInclude<ExtArgs> | null;
    /**
     * Filter, which Payments to fetch.
     */
    where?: Prisma.PaymentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?: Prisma.PaymentsOrderByWithRelationInput | Prisma.PaymentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Payments.
     */
    cursor?: Prisma.PaymentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Payments.
     */
    distinct?: Prisma.PaymentsScalarFieldEnum | Prisma.PaymentsScalarFieldEnum[];
};
/**
 * Payments create
 */
export type PaymentsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: Prisma.PaymentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payments
     */
    omit?: Prisma.PaymentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaymentsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Payments.
     */
    data: Prisma.XOR<Prisma.PaymentsCreateInput, Prisma.PaymentsUncheckedCreateInput>;
};
/**
 * Payments createMany
 */
export type PaymentsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: Prisma.PaymentsCreateManyInput | Prisma.PaymentsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Payments createManyAndReturn
 */
export type PaymentsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: Prisma.PaymentsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Payments
     */
    omit?: Prisma.PaymentsOmit<ExtArgs> | null;
    /**
     * The data used to create many Payments.
     */
    data: Prisma.PaymentsCreateManyInput | Prisma.PaymentsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaymentsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Payments update
 */
export type PaymentsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: Prisma.PaymentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payments
     */
    omit?: Prisma.PaymentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaymentsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Payments.
     */
    data: Prisma.XOR<Prisma.PaymentsUpdateInput, Prisma.PaymentsUncheckedUpdateInput>;
    /**
     * Choose, which Payments to update.
     */
    where: Prisma.PaymentsWhereUniqueInput;
};
/**
 * Payments updateMany
 */
export type PaymentsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: Prisma.XOR<Prisma.PaymentsUpdateManyMutationInput, Prisma.PaymentsUncheckedUpdateManyInput>;
    /**
     * Filter which Payments to update
     */
    where?: Prisma.PaymentsWhereInput;
    /**
     * Limit how many Payments to update.
     */
    limit?: number;
};
/**
 * Payments updateManyAndReturn
 */
export type PaymentsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: Prisma.PaymentsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Payments
     */
    omit?: Prisma.PaymentsOmit<ExtArgs> | null;
    /**
     * The data used to update Payments.
     */
    data: Prisma.XOR<Prisma.PaymentsUpdateManyMutationInput, Prisma.PaymentsUncheckedUpdateManyInput>;
    /**
     * Filter which Payments to update
     */
    where?: Prisma.PaymentsWhereInput;
    /**
     * Limit how many Payments to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaymentsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Payments upsert
 */
export type PaymentsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: Prisma.PaymentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payments
     */
    omit?: Prisma.PaymentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaymentsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Payments to update in case it exists.
     */
    where: Prisma.PaymentsWhereUniqueInput;
    /**
     * In case the Payments found by the `where` argument doesn't exist, create a new Payments with this data.
     */
    create: Prisma.XOR<Prisma.PaymentsCreateInput, Prisma.PaymentsUncheckedCreateInput>;
    /**
     * In case the Payments was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PaymentsUpdateInput, Prisma.PaymentsUncheckedUpdateInput>;
};
/**
 * Payments delete
 */
export type PaymentsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: Prisma.PaymentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payments
     */
    omit?: Prisma.PaymentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaymentsInclude<ExtArgs> | null;
    /**
     * Filter which Payments to delete.
     */
    where: Prisma.PaymentsWhereUniqueInput;
};
/**
 * Payments deleteMany
 */
export type PaymentsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: Prisma.PaymentsWhereInput;
    /**
     * Limit how many Payments to delete.
     */
    limit?: number;
};
/**
 * Payments without action
 */
export type PaymentsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: Prisma.PaymentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payments
     */
    omit?: Prisma.PaymentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaymentsInclude<ExtArgs> | null;
};
//# sourceMappingURL=Payments.d.ts.map