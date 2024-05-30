import {createBrowserRouter} from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import CarsPage from "../pages/CarsPage";
import MainLayout from "../layouts/MainLayout";

export const routerConfig = createBrowserRouter([
        {
            path:'/',
            element:<MainLayout/>,
            errorElement:<h1>WTF</h1>,
            children:[
                {index:true,element:<AuthPage/>},
                {path:'cars', element: <CarsPage/>}
            ]
        }
    ]
)