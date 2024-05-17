import {IRes} from "../types/resType";
import {IComment} from "../interfaces/commentInterface";
import {apiServices} from "./apiServices";
import {urls} from "../constants/urls";

const commentService = {
    getAll: ():IRes<IComment[]> => apiServices.get(urls.comments)
}
export {
    commentService
}