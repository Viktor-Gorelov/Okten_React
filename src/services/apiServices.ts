import axios from 'axios';
import {baseURL} from "../constants/urls";

let apiServices = axios.create({baseURL});

export {apiServices}