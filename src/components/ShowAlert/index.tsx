import { useContext } from "react";
import { AlertContext } from "../../contexts/AlertContext";
import * as C from "./styles";


export const ShowAlert = () => {
    const alertCtx = useContext(AlertContext);

    return (
        <C.Container>
            <C.Alert variante={alertCtx?.alertMsg ?? ''}>
                <C.Text>{alertCtx?.alertMsg === "success" ? "Succeso" : "Erro"}</C.Text>
                <C.Img src={alertCtx?.alertMsg === "error" ? "/assets/images/error.jpg" : "/assets/images/succes.jpg"} alt="" />
            </C.Alert>
        </C.Container>
    )
}