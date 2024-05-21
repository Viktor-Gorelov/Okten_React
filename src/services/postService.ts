import {IRes} from "../types/resType";
import {IPost} from "../interfaces/postInterface";
import {apiServices} from "./apiServices";
import {urls} from "../constants/urls";
import {AxiosResponse} from "axios";
import {IComment} from "../interfaces/commentInterface";

const postService = {
    getAll: ():IRes<IPost[]> => apiServices.get(urls.comments),
    getCommentsOfPost: (postId:string): Promise<AxiosResponse<IComment[]>> => {
        return apiServices.get(`posts/${postId}/comments`);
    }
}
export {
    postService
}