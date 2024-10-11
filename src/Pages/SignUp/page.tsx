import { useContext, useEffect, useState } from "react";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { createUser, getStates } from "../../Apis/api";
import { StateType } from "../../types/StateType";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../contexts/UserContext";

const newUserSchema = z.object({
    name: z.string().min(2, { message: "Nome obrigátorio" }),
    email: z.string().email({ message: "Email obrigátorio" }),
    state: z.string().min(2, { message: "Estado obrigátorio" }),
    password: z.string().min(8, { message: "Minímo 8 caracteres" }),
    confirmPassword: z.string().min(8, { message: "Minímo 8 caracteres" }),
})
type NewUser = z.infer<typeof newUserSchema>;

export const SignUp = () => {
    const navigate = useNavigate();
    const userCtx = useContext(UserContext);

    const { handleSubmit, register, formState: { errors } } = useForm<NewUser>({
        resolver: zodResolver(newUserSchema),
    });

    const [statesReq, setStatesReq] = useState<StateType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [messageErrorPassword, setMessageErrorPassword] = useState("");

    useEffect(() => {
        const getAllStates = async () => {
            const res = await getStates();
            setStatesReq(res.states);
        }
        getAllStates();
    }, []);

    const createNewUser = async (data: NewUser) => {
        setIsLoading(true);

        if (data.password === data.confirmPassword) {

            const newUser = await createUser({
                name: data.name,
                email: data.email,
                state: data.state,
                passwordHash: data.password
            });

            if (newUser.newUser !== undefined) {
                // save user and redirect for home.
                userCtx?.setUserLogged(newUser.newUser);
                navigate("/");
            } else {
                alert(newUser.error);
            }
        } else {
            setMessageErrorPassword("Senhas não batem, por favor verifique.");
        }

        setIsLoading(false);
    }

    const handleCancelBtn = () => {
        navigate("/");
    }

    return (
        <C.PageContainer>
            <C.FormArea>
                <C.Title>Seja um de Nós</C.Title>

                <C.Form onSubmit={handleSubmit(createNewUser)}>
                    <C.InputArea>
                        <C.Input
                            type="text"
                            placeholder="Digite seu nome"
                            autoFocus={true}
                            {...register("name")}
                        />
                        {errors.name && <C.MsgError>{errors.name.message}</C.MsgError>}
                    </C.InputArea>

                    <C.InputArea>
                        <C.Input
                            type="email"
                            placeholder="Digite seu melhor e-mail"
                            {...register("email")}
                        />
                        {errors.email && <C.MsgError>{errors.email.message}</C.MsgError>}
                    </C.InputArea>

                    <C.InputArea>
                        <C.SelectArea>
                            <label>Selecione um estado:</label>
                            <C.Select {...register("state")}>
                                <option></option>
                                {statesReq.map((it) => (
                                    <option key={it._id} value={it.name}>{it.name}</option>
                                ))}
                            </C.Select>
                        </C.SelectArea>
                        {errors.state && <C.MsgError>{errors.state.message}</C.MsgError>}
                    </C.InputArea>

                    <C.InputArea>
                        <C.Input
                            type="password"
                            placeholder="Digite uma senha"
                            {...register("password")}
                        />
                        {errors.password && <C.MsgError>{errors.password.message}</C.MsgError>}
                        {messageErrorPassword.length > 0 && <C.MsgError>{messageErrorPassword}</C.MsgError>}
                    </C.InputArea>

                    <C.InputArea>
                        <C.Input
                            type="password"
                            placeholder="Confirme sua senha"
                            {...register("confirmPassword")}
                        />
                        {errors.confirmPassword && <C.MsgError>{errors.confirmPassword.message}</C.MsgError>}
                        {messageErrorPassword && <C.MsgError>{messageErrorPassword}</C.MsgError>}
                    </C.InputArea>

                    <C.ButtonArea>
                        <button
                            className="btn"
                            style={{ backgroundColor: "#fff", color: "#000" }}
                            onClick={handleCancelBtn}
                        >Cancelar</button>

                        <input
                            className="btn"
                            type="submit"
                            value={`${isLoading ? "Criando..." : "Criar"}`}
                        />
                    </C.ButtonArea>

                    <Link to="/signin">Já é um usúario? login</Link>
                </C.Form>
            </C.FormArea>
        </C.PageContainer >
    )
}