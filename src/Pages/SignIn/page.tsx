import { useContext, useState } from "react";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../../Apis/api";
import { UserContext } from "../../contexts/UserContext";

export const SignIn = () => {
    const userCtx = useContext(UserContext);
    const navigate = useNavigate();

    const [emailField, setEmailField] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [messageError, setMessageError] = useState("");


    const userLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        let data = {
            email: emailField,
            passwordHash: password
        }

        const user = await getUser(data);

        if (user.user) {
            userCtx?.setUserLogged(user.user);
            setMessageError("");
            navigate("/")
        } else {
            setMessageError("Email ou senha inválidos");
        }

        setIsLoading(false);
    }

    const handleCancelBtn = () => {
        navigate("/")
    }

    return (
        <C.PageContainer>
            <C.FormArea>
                <C.Title>Bem vindo de volta(o)</C.Title>
                <C.Form onSubmit={userLogin}>
                    <C.Input
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={emailField}
                        onChange={e => setEmailField(e.target.value)}
                    />
                    {<C.msgError>{messageError}</C.msgError>}

                    <C.Input
                        type="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    {<C.msgError>{messageError}</C.msgError>}

                    <C.ButtonArea>
                        <button
                            className="btn"
                            style={{ backgroundColor: "#fff", color: "#000" }}
                            onClick={handleCancelBtn}
                        >
                            Cancelar
                        </button>
                        <input
                            className="btn"
                            type="submit"
                            value={`${isLoading ? "Entrando..." : "Entrar"}`}
                        />
                    </C.ButtonArea>

                    <Link to="/signup">ainda não é um usúario? cadastrar-se</Link>
                </C.Form>
            </C.FormArea>
        </C.PageContainer>
    )
}