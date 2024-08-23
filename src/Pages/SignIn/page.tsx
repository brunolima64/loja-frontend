import * as C from "./styles";
import { Link } from "react-router-dom";

export const SignIn = () => {

    return (
        <C.PageContainer>
            <C.InputArea>
                <C.TitleArea>
                    <h1>Bem-vindo(a) de Volta!</h1>
                </C.TitleArea>
                <C.Input
                    type="email"
                    placeholder="Digite seu e-mail"
                    autoFocus={true}
                />
                <C.Input
                    type="password"
                    placeholder="Digite sua senha"

                />

                <C.ButtonArea>
                    <C.Button>Entrar</C.Button>
                </C.ButtonArea>
                <Link to="/signup">Ainda não é um usúario? Cadastrar-se</Link>
            </C.InputArea>
        </C.PageContainer>
    )
}