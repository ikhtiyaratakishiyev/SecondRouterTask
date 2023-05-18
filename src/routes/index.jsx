import { createBrowserRouter } from "react-router-dom";
import Accaunt from "../Layouts/mainChildren/Account";
import Payout from '../Layouts/mainChildren/Payout';
import Security from "../Layouts/mainChildren/Security";
import Settings from "../Layouts/mainChildren/Settings";
import Library from '../Layouts/mainChildren/Library';
import Schedule from "../Layouts/mainChildren/Schedule";
import Activity from '../Layouts/mainChildren/Activity';
import MainLayout from "../Layouts/MainLayout";
import MainPage from "../Pages/MainPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: "userPage",
        element: ( <MainLayout/>),
        children: [
            {
                index: true,  
                element: <Accaunt/>
            },
            {
                path: "activity",  
                element: <Activity/>
            },
            {
                path: "library",  
                element: <Library/>
            },
            {
                path: "security",  
                element: <Security/>
            },
            {
                path: "payout",  
                element: <Payout/>
            },
            {
                path: "schedule",  
                element: <Schedule/>
            },
          
            {
                path: "settings",  
                element: <Settings/>
            }
        ]
    }
])