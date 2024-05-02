import axios, {AxiosResponse} from "axios";
import {IUsersModel} from "../models/IUsersModel";
import {IPostsModel} from "../models/IPostsModel";
import {IPostModel} from "../models/IPostModel";

let axiosInstance= axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'content-type':'application/json; charset=UTF-8'}
});

const getAllUsers = ():Promise<AxiosResponse<IUsersModel>> => {
    return axiosInstance.get('/users');
}
const getAllPostsOfSingleUser= (id:number):Promise<AxiosResponse<IPostsModel>> => {
    return axiosInstance.get('/posts/user/' + id);
}


export {
    getAllUsers,
    getAllPostsOfSingleUser
}