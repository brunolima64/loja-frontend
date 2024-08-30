import { Link } from "react-router-dom";
import * as C from "./styles";

export const Header = () => {
    return (
        <C.HeaderContainer>
            <C.Header>
                <Link to="/">
                    <C.Logo>Bazaar Shop</C.Logo>
                </Link>
                <C.Menu>
                    <ul>
                        <Link to={"/user/me"}><li>MINHA CONTA</li></Link>
                        <li>SAIR</li>
                        <Link to={"/item"}><li className="post">FAZER UM POST</li></Link>
                    </ul>
                </C.Menu>
            </C.Header>
        </C.HeaderContainer>
    )
}