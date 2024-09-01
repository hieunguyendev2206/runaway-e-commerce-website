import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <div>Home page</div>
            },
            {
                path: "/about",
                element: <div>About page</div>
            }
        ]
    },
]);

export default router;