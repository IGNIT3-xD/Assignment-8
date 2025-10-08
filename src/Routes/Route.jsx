import { createBrowserRouter } from "react-router";
import Root from './../Layouts/Root';
import Home from './../Pages/Home';
import Page from './../Pages/Page';
import Apps from './../Pages/Apps';
import Installation from './../Pages/Installation';
import AppsDetails from './../Pages/AppsDetails';


const router = createBrowserRouter([
    {
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
                loader: () => fetch('../Data.json').then(res => res.json())
            },

            {
                path: 'app-details/:id',
                Component: AppsDetails,
                loader: () => fetch('../Data.json').then(res => res.json())
            },
            { path: 'installation', Component: Installation },
            { path: '*', element: <p className="text-2xl font-bold text-center">Error</p> }
        ]
    },
]);

export default router;