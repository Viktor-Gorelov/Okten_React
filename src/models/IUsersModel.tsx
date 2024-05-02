import {IUserModel} from "./IUserModel";

export interface IUsersModel {
    limit: number
    skip: number
    total: number
    users: IUserModel[]
}