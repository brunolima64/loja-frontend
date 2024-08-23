import { useRoutes } from "react-router-dom";
import { SignUp } from "../Pages/SignUp/page";
import { SignIn } from "../Pages/SignIn/page";
import { NotFound } from "../Pages/NotFound/page";
import { Home } from "../Pages/Home/page";

export const Routes = () => {
    return useRoutes([
        { path: "/", element: <Home /> },
        { path: "/signup", element: <SignUp /> },
        { path: "/signin", element: <SignIn /> },
        { path: "*", element: <NotFound /> },
    ])
}