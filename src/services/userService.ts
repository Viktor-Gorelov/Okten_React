import {IRes} from "../types/resType";
import {IUser} from "../interfaces/userInterface";
import {apiServices} from "./apiServices";
import {urls} from "../constants/urls";
import {AxiosResponse} from "axios";
import {IPost} from "../interfaces/postInterface";

const userService = {
    getAll: ():IRes<IUser[]> => apiServices.get(urls.users),
    getPostsOfUser: (userId:string): Promise<AxiosResponse<IPost[]>> => {
        return apiServices.get(`users/${userId}/posts`);
    }
}
export {
    userService
}