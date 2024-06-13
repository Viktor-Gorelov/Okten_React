import {IPost} from "../model/IPost";
import {urls} from "../constant/urls";
import {axiosInstance} from "./api.service";

const postService = {
    getAll: async ():Promise<IPost[]> =>{
        const response = await axiosInstance.get<IPost[]>(urls.posts.base);
        return response.data;
    },
    getById: async (id:string):Promise<IPost> =>{
        const response = await axiosInstance.get<IPost>(urls.posts.byId(+id));
        return response.data
    }
}
export {
    postService
}