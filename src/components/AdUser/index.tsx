import { Ad } from "../../types/Ad";
import { FormatedPrice } from "../../utils/FormatedPrice";
import * as C from "./styles";

type Props = {
    data: Ad;
    showUpdateAd: (id: string) => void;
}
export const AdItem = ({ data, showUpdateAd }: Props) => {

    return (
        <C.Container>
            <C.AreaImage>
                {data.images.map(it => (
                    <C.Image
                        key={data._id}
                        src={it.default ? it.url : ""}
                        alt=""
                    />
                ))}
            </C.AreaImage>
            <C.Title>{data.title}</C.Title>
            <C.AreaDesc>
                <p>Descrição: </p>
                <C.Desc>{data.description}</C.Desc>
            </C.AreaDesc>
            <C.State>Estado: <p>{data.state}</p></C.State>
            <C.Category>Categoria: <p>{data.category}</p></C.Category>
            <C.Status>status: <p>{data.state}</p></C.Status>
            {data.priceNeg
                ? <C.price>Negociável</C.price>
                : <C.price>Preço: ${FormatedPrice(data.price)}</C.price>
            }
            <C.InfoArea>
                <C.AreaBtn>
                    <C.Btn
                        src="/assets/images/edit.png"
                        alt="Editar"
                        onClick={() => showUpdateAd(data._id)}
                    />
                </C.AreaBtn>
            </C.InfoArea>
        </C.Container>
    )
}