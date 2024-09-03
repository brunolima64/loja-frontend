import * as C from "./styles";

type Props = {
    text: string;
    img: string;
}
export const ShowAlert = ({ text, img }: Props) => {

    return (
        <C.Container>
            <C.Alert>
                <C.Text>{text}</C.Text>
                <C.Img src={img} alt="" />
            </C.Alert>
        </C.Container>
    )
}