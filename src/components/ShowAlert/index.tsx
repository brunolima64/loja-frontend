import { useContext } from "react";
import { AlertContext } from "../../contexts/AlertContext";
import * as C from "./styles";

type Props = {
    text: string;
    img: string;
}
export const ShowAlert = ({ text, img }: Props) => {
    const alertCtx = useContext(AlertContext);

    return (
        <C.Container>
            <C.Alert variante={alertCtx?.alertMsg ?? ''}>
                <C.Text>{text}</C.Text>
                <C.Img src={img} alt="" />
            </C.Alert>
        </C.Container>
    )
}