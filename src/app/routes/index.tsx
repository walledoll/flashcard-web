import {createHashRouter, Navigate} from "react-router-dom";
import {Layout} from "@app/layout";
import {NewPage} from "@pages/newPage";
import {Settings} from "@pages/settings";
import {WelcomePage} from "@pages/welcome";
import {NotFound} from "@pages/notfound";
import {Home} from "@pages/home";
import {AuthPage} from "@pages/authPage";

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
            },

        ],

    },
    {
        path: '/welcome',
        element: <WelcomePage/>
    },
    {
        path: '/auth',
        element: <AuthPage />
    },
    {
        path: '*',
        element: <NotFound/>
    }
])