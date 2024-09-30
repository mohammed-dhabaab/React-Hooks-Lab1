import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFoundPage from "./components/NotFoundPage"
import {
    createBrowserRouter,
    Outlet,
    ScrollRestoration,
} from "react-router-dom";
import { RouterProvider } from "react-router-dom";



const Root = () => {
    return (
        <>
            <ScrollRestoration />
            <Outlet />
            {/* <Navbar /> */}
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            // {
            //     path: "/desert",
            //     element: <Desert />,
            // }
        ],
    },
]);

function Router() {
    return <RouterProvider router={router} />;

}

export default Router