import {IRes} from "../types/resType";
import {IPost} from "../interfaces/postInterface";
import {apiServices} from "./apiServices";
import {urls} from "../constants/urls";

const postService = {
    getAll: ():IRes<IPost[]> => apiServices.get(urls.posts)
}
export {
    postService
}