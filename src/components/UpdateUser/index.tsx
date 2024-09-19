import * as C from "./styles";
import { useContext, useEffect, useState } from "react";
import { getStates, updateUser } from "../../Apis/api";
import { StateType } from "../../types/StateType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
import { z } from "zod";
import { AlertContext } from "../../contexts/AlertContext";

const schemaUser = z.object({
    name: z.string().min(2, { message: "Digite um nome válido!" }).trim().optional(),
    email: z.string().email({ message: "Digite um e-mail válido!" }).trim().optional(),
    password: z.string().trim().optional(),
    confirmPassword: z.string().trim().optional(),
    state: z.string().optional().nullable(),
}).refine(data => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas precisam ser iguais",
});

type schemaUserType = z.infer<typeof schemaUser>;

type Props = {
    setShowModalUpdateUser: (b: boolean) => void;
}
export const UpdateUser = ({ setShowModalUpdateUser }: Props) => {
    const userCtx = useContext(UserContext);
    const alertCtx = useContext(AlertContext);

    const { handleSubmit, register, formState: { errors } } = useForm<schemaUserType>({
        resolver: zodResolver(schemaUser),
        defaultValues: {
            name: userCtx?.userLogged.name,
            email: userCtx?.userLogged.email,
            password: undefined,
            confirmPassword: undefined,
            state: userCtx?.userLogged.state
        }
    });

    const [statesReq, setStatesReq] = useState<StateType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [msgErrorPasswordLength, setMsgErrorPasswordLength] = useState("");

    // Pegar states
    useEffect(() => {
        const getStatesReq = async () => {
            const res = await getStates();
            setStatesReq(res.states);
        }
        getStatesReq();
    }, []);

    // formulario 
    const formSubmit = async (data: schemaUserType) => {
        if (data.password && data.password.length < 8) {
            setMsgErrorPasswordLength("Minímo 8 caracteres");
            return false;
        }

        setIsLoading(true);
        const token = userCtx?.userLogged.token;

        const updatedUser = await updateUser({
            _id: userCtx?.userLogged._id,
            name: data.name || userCtx?.userLogged.name,
            email: data.email || userCtx?.userLogged.email,
            passwordHash: data.password || "",
            state: data.state || userCtx?.userLogged.state
        }, token);

        if (!updatedUser) {
            alertCtx?.setAlertMsg("error");
        } else {
            alertCtx?.setAlertMsg("success");
        }

        setIsLoading(false);
        setShowModalUpdateUser(false);

        // clean message to alert
        setTimeout(() => {
            alertCtx?.setAlertMsg("");
        }, 5000);
    }


    // close the modal
    const closedModalBtn = () => {
        setShowModalUpdateUser(false);
    }

    return (
        <C.Container>
            <C.BackGround onClick={closedModalBtn}></C.BackGround>

            <C.InfoArea>
                <h2>Editar informações de usuario: </h2>

                <C.Form onSubmit={handleSubmit(formSubmit)}>

                    <C.InputArea>
                        <label>Nome:</label>
                        <input
                            placeholder="Digite um nome"
                            {...register("name")}
                        />
                        {errors.name && <C.MsgError>{errors.name.message as string}</C.MsgError>}
                    </C.InputArea>

                    <C.InputArea>
                        <label>E-mail:</label>
                        <input
                            type="email"
                            placeholder="Digite um email válido"
                            {...register("email")}
                        />
                        {errors.email && <C.MsgError>{errors.email.message as string}</C.MsgError>}
                    </C.InputArea>

                    <C.InputArea>
                        <label>Estado:</label>
                        <select id="state" {...register("state")}>
                            <option value=""></option>
                            {statesReq && statesReq.map((it) => (
                                <option key={it._id} value={it.name}>{it.name}</option>
                            ))}
                        </select>
                        {errors.state && <C.MsgError>{errors.state.message as string}</C.MsgError>}
                    </C.InputArea>

                    <C.InputArea>
                        <label>Nova senha:</label>
                        <input
                            type="password"
                            placeholder="Digite uma nova senha"
                            {...register("password")}
                        />
                        {errors.password && <C.MsgError>{errors.password.message as string}</C.MsgError>}
                        {msgErrorPasswordLength.length > 0 && <C.MsgError>{msgErrorPasswordLength}</C.MsgError>}
                    </C.InputArea>

                    <C.InputArea>
                        <label>Confirmar senha:</label>
                        <input
                            type="password"
                            placeholder="Confirme sua senha"
                            {...register("confirmPassword")}
                        />
                        {errors.confirmPassword && <C.MsgError>{errors.confirmPassword.message as string}</C.MsgError>}
                        {msgErrorPasswordLength.length > 0 && <C.MsgError>{msgErrorPasswordLength}</C.MsgError>}
                    </C.InputArea>

                    <C.BtnArea>
                        <C.CancelBtn onClick={closedModalBtn}>cancelar</C.CancelBtn>
                        <input
                            type="submit"
                            className="button"
                            value={isLoading ? "atualizando..." : "atualizar"}
                        />
                    </C.BtnArea>
                </C.Form>
            </C.InfoArea>
        </C.Container>
    )
}