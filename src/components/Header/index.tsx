import { Link } from "react-router-dom";
import * as C from "./styles";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { AdCtx } from "../../contexts/AdCtx";

export const Header = () => {
    const adCtx = useContext(AdCtx);
    const userCtx = useContext(UserContext);

    const [showMenuMobile, setShowMenuMobile] = useState(false);

    const closedModal = () => {
        setShowMenuMobile(false);
    }

    return (
        <C.HeaderContainer>
            <C.Header>
                <Link to="/" onClick={() => adCtx?.setAd(undefined)}>
                    <C.Logo>Bazaar Shop</C.Logo>
                </Link>

                <C.AreaMenuMobile>
                    {showMenuMobile &&
                        <C.CloseModal onClick={closedModal}>Voltar</C.CloseModal>
                    }

                    {!showMenuMobile &&
                        <C.MenuMobile onClick={() => setShowMenuMobile(true)}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </C.MenuMobile>
                    }
                </C.AreaMenuMobile>



                <C.Menu variante={showMenuMobile}>
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