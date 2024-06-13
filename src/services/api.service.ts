import axios from "axios";
import {baseUrl, urls} from "../constant/urls";


const axiosInstance = axios.create({
    baseURL:baseUrl,
    headers:{}
});

export {
    axiosInstance
}