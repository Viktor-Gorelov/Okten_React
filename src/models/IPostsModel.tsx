import {IPostModel} from "./IPostModel";

export interface IPostsModel {
    limit: number
    skip: number
    total: number
    posts: IPostModel[]
}