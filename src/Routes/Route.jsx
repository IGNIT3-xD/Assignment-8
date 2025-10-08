import { createBrowserRouter } from "react-router";
import Root from './../Layouts/Root';
import Home from './../Pages/Home';
import Page from './../Pages/Page';
import Apps from './../Pages/Apps';
import Installation from './../Pages/Installation';
import AppsDetails from './../Pages/AppsDetails';
import Loading from "../Components/Loading";
import Error404 from "../Pages/Error404";
import ErrorApp from './../Pages/ErrorApp';


const router = createBrowserRouter([
    {
        hydrateFallbackElement: <Loading></Loading>,
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('../Data.json').then(res => res.json())
            },
            {
                path: 'apps',
                Component: Apps,
                loader: () => fetch('../Data.json').then(res => res.json()),
            },

            {
                path: 'apps/:id',
                Component: AppsDetails,
                loader: () => fetch('../Data.json').then(res => res.json()),
                errorElement: <ErrorApp></ErrorApp>
            },
            {
                path: 'installation',
                Component: Installation,
                loader: () => fetch('../Data.json').then(res => res.json()),
            },
            { path: '*', element: <Error404></Error404> },
        ]
    },
]);

export default router;