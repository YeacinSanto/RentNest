export interface ICategoryCreatePayLoad{
    name : string,
    description : string
}

export interface IUpdateUserStatus{
    status : "ACTIVE" | "BANNED"
}