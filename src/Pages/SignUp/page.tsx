import { useState } from "react";
import * as C from "./styles";
import { Link } from "react-router-dom";

export const SignUp = () => {
    const [nameField, setNameField] = useState("");

    return (
        <C.PageContainer>
            <C.InputArea>
                <C.TitleArea>
                    <h1>Seja um de Nós</h1>
                </C.TitleArea>
                <C.Input
                    type="text"
                    placeholder="Digite seu nome"
                    autoFocus={true}
                    value={nameField}
                    onChange={e => setNameField(e.target.value)}
                />
                <C.Input
                    type="email"
                    placeholder="Digite seu melhor e-mail"
                />
                <C.Input
                    type="text"
                    placeholder="Selecione seu estado atual"
                />
                <C.Input
                    type="password"
                    placeholder="Digite uma senha"

                />
                <C.Input
                    type="password"
                    placeholder="Confirme sua senha"
                />

                <C.ButtonArea>
                    <C.Button>Criar</C.Button>
                </C.ButtonArea>
                <Link to="/signin">Já é um usúario? login</Link>
            </C.InputArea>
        </C.PageContainer>
    )
}