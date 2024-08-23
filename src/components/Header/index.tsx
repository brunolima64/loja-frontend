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
                        <li>MINHA CONTA</li>
                        <li>SAIR</li>
                        <li className="post">FAZER UM POST</li>
                    </ul>
                </C.Menu>
            </C.Header>
        </C.HeaderContainer>
    )
}