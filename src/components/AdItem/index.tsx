import { Ad } from "../../types/Ad";
import * as C from "./styles";

type Props = {
    data: Ad;
    goAdPage: (id: number) => void;
}
export const AdItem = ({ data, goAdPage }: Props) => {
    return (
        <C.Container onClick={() => goAdPage(data.id)}>
            <C.Image src={data.url} alt="" />
            <C.Title>{data.title}</C.Title>
            <C.Desc>descricao qualquer legalzona para teste</C.Desc>
            <C.price>$00</C.price>
        </C.Container>
    )
}