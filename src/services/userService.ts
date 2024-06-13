import {IUser} from "../model/IUser";
import {urls} from "../constant/urls";
import {axiosInstance} from "./api.service";

const userService = {
    getAll: async ():Promise<IUser[]> =>{
        const response = await axiosInstance.get<IUser[]>(urls.users.base);
        return response.data;
    },
    getById: async (id:string):Promise<IUser> =>{
        const response = await axiosInstance.get<IUser>(urls.users.byId(+id));
        return response.data
    }
}
export {
    userService
}