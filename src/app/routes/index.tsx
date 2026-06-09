import {createHashRouter, Navigate} from "react-router-dom";
import {Layout} from "@app/layout/Layout.tsx";
import {Home} from "@pages/main";
import {NewPage} from "@pages/newPage";
import {Settings} from "@pages/settings";
import {NotFound} from "@pages/notfound";

export const router = createHashRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                /* Перенаправляем с корня "/" на "/home" */
                index: true,
                element: <Navigate to={'/home'} replace />,
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/new',
                element: <NewPage />
            },
            {
                path: '/settings',
                element: <Settings/>
            }
        ],
    },
    {
        path: '*',
        element: <NotFound/>
    }
])