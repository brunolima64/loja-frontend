import { useNavigate } from "react-router-dom";
import { FormatedPrice } from "../../utils/FormatedPrice";
import * as C from "./styles";
import { useContext, useEffect } from "react";
import { AdCtx } from "../../contexts/AdCtx";
import { getOneAd } from "../../Apis/api";

type Props = {
    data: any;
}
export const Ad = ({ data }: Props) => {
    const AdContext = useContext(AdCtx);
    const navigate = useNavigate();

    const redirectForOneAd = async (id: string) => {
        const res = await getOneAd(id.toString());
        if (!res) return false;

        AdContext?.setAd(res.ad);
        navigate(`/item/${id}`);

        console.log(AdContext?.ad)
    }

    return (
        <C.Container onClick={() => redirectForOneAd(data._id)}>
            <C.AreaImage>
                <C.Image src={data.images[0].url} alt="" />
            </C.AreaImage>
            <C.AreaInfo>
                <C.Title>{data.title}</C.Title>

                <C.Info>
                    <C.State>Estado: <p>{data.state}</p></C.State>
                    <C.Category>Categoria: <p>{data.category}</p></C.Category>
                    <C.Status>status: <p> Disponivel</p></C.Status>
                </C.Info>

                {data.priceNeg
                    ? <C.price>Negociável</C.price>
                    : <C.price>{FormatedPrice(data.price)}</C.price>
                }

            </C.AreaInfo>
        </C.Container>
    )
}