import { createBrowserRouter } from "react-router";
import Root from './../Layouts/Root';
import Home from './../Pages/Home';
import Page from './../Pages/Page';
import Apps from './../Pages/Apps';
import Installation from './../Pages/Installation';


const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('/Data.json')
            },
            { path: 'apps', Component: Apps },
            { path: 'installation', Component: Installation },
        ]
    },
]);

export default router;