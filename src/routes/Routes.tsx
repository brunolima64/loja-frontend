import { useRoutes } from "react-router-dom";
import { SignUp } from "../Pages/SignUp/page";
import { SignIn } from "../Pages/SignIn/page";
import { NotFound } from "../Pages/NotFound/page";
import { Home } from "../Pages/Home/page";
import { AdPage } from "../Pages/AdPage/page";
import { UserMe } from "../Pages/UserMe/page";
import { CreateAd } from "../Pages/CreateAd/page";

export const Routes = () => {
    return useRoutes([
        { path: "/", element: <Home /> },
        { path: "/signup", element: <SignUp /> },
        { path: "/signin", element: <SignIn /> },
        { path: "/user/me", element: <UserMe /> },
        { path: "/item", element: <CreateAd /> },
        { path: "/item/:id", element: <AdPage /> },
        { path: "*", element: <NotFound /> },
    ])
}