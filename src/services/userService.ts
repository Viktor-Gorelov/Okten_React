import {IRes} from "../types/resType";
import {IUser} from "../interfaces/userInterface";
import {apiServices} from "./apiServices";
import {urls} from "../constants/urls";

const userService = {
    getAll: ():IRes<IUser[]> => apiServices.get(urls.users)
}
export {
    userService
}