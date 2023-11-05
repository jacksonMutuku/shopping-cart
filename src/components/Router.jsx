import { createBrowserRouter, RouterProvider} from "react-router-dom"
import App from "../App"
import Layout from "./Layout";
import Cart from "./Cart";
import Shop from "./Shop";
import About from "./About";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App/>
        },
        {
            path: '/about',
            element: <About/>,
        },
    ]);
    return <RouterProvider router={router} />;
};

export default Router; 

