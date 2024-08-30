import { useRoutes } from "react-router-dom";
import { SignUp } from "../Pages/SignUp/page";
import { SignIn } from "../Pages/SignIn/page";
import { NotFound } from "../Pages/NotFound/page";
import { Home } from "../Pages/Home/page";
import { Ad } from "../Pages/Ad/page";
import { UserMe } from "../Pages/UserMe/page";
import { CreateAd } from "../Pages/CreateAd/page";
import { UpdateAd } from "../Pages/UpdateAd/page";

export const Routes = () => {
    return useRoutes([
        { path: "/", element: <Home /> },
        { path: "/signup", element: <SignUp /> },
        { path: "/signin", element: <SignIn /> },
        { path: "/user/me", element: <UserMe /> },
        { path: "/item", element: <CreateAd /> },
        { path: "/item/:id", element: <UpdateAd /> },
        { path: "/item/:id", element: <Ad /> },
        { path: "*", element: <NotFound /> },
    ])
}