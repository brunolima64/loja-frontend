import { Link } from "react-router-dom";
import * as C from "./styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { AdCtx } from "../../contexts/AdCtx";

export const Header = () => {
    const adCtx = useContext(AdCtx);
    const userCtx = useContext(UserContext);

    return (
        <C.HeaderContainer>
            <C.Header>
                <Link to="/" onClick={() => adCtx?.setAd(undefined)}>
                    <C.Logo>Bazaar Shop</C.Logo>
                </Link>
                <C.Menu>
                    <ul>
                        {userCtx?.userLogged &&
                            <>
                                <Link to={"/"} onClick={() => adCtx?.setAd(undefined)}>
                                    <li>INICIO</li>
                                </Link>

                                <Link to={"/user/me"}>
                                    <li>MINHA CONTA</li>
                                </Link>

                                <Link to={"/"}>
                                    <li onClick={() => userCtx?.setUserLogged(null)}>SAIR</li>
                                </Link>

                                <Link to={"/item"}>
                                    <li className="post">FAZER UM POST</li>
                                </Link>
                            </>
                        }

                        {!userCtx?.userLogged &&
                            <>
                                <Link to={"/"}>
                                    <li>INICIO</li>
                                </Link>

                                <Link to={"/signin"}>
                                    <li>MINHA CONTA</li>
                                </Link>

                                <Link to={"/signin"}>
                                    <li className="post">FAZER UM POST</li>
                                </Link>
                            </>
                        }

                    </ul>
                </C.Menu>
            </C.Header>
        </C.HeaderContainer>
    )
}