import { useEffect, useState } from "react";
import * as C from "./styles";
import { Link } from "react-router-dom";
import { createUser, getStates } from "../../Apis/api";
import { StateType } from "../../types/StateType";

export const SignUp = () => {

    const [statesReq, setStatesReq] = useState<StateType[]>([]);

    const [nameField, setNameField] = useState("");
    const [emailField, setEmailField] = useState("");
    const [statesField, setStatesField] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {
        const getAllStates = async () => {
            const res = await getStates();
            setStatesReq(res.states);
            console.log(res.states)
        }
        getAllStates();
    }, []);

    const createNewUser = async (e: React.FormEvent) => {
        e.preventDefault();

        let data = {
            name: nameField,
            email: emailField,
            state: statesField,
            passwordHash: password
        }

        const newUser = await createUser(data);
        console.log(newUser)
    }

    return (
        <C.PageContainer>
            <C.FormArea>
                <C.Title>Seja um de Nós</C.Title>
                <C.Form onSubmit={createNewUser}>
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
                        value={emailField}
                        onChange={e => setEmailField(e.target.value)}
                    />

                    <C.SelectArea>
                        <label>Selecione um estado:</label>
                        <C.Select name="Estados" id="0" onChange={(e) => setStatesField(e.target.value)}>
                            <option></option>
                            {statesReq.map((it) => (
                                <option key={it._id} value={it.name}>{it.name}</option>
                            ))}
                        </C.Select>
                    </C.SelectArea>

                    <C.Input
                        type="password"
                        placeholder="Digite uma senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <C.Input
                        type="password"
                        placeholder="Confirme sua senha"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />

                    <C.ButtonArea>
                        <C.Button type="submit" value="Cadastrar" onClick={createNewUser} />
                    </C.ButtonArea>

                    <Link to="/signin">Já é um usúario? login</Link>
                </C.Form>
            </C.FormArea>
        </C.PageContainer>
    )
}