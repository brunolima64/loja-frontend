import { useNavigate } from "react-router-dom";
import { FormatedPrice } from "../../utils/FormatedPrice";
import * as C from "./styles";
import { useContext, useEffect } from "react";
import { AdCtx } from "../../contexts/AdCtx";
import { getOneAd } from "../../Apis/api";
import { AdType } from "../../types/AdType";

type Props = {
    data: AdType;
}
export const Ad = ({ data }: Props) => {
    const AdContext = useContext(AdCtx);
    const navigate = useNavigate();

    useEffect(() => {
        redirectForOneAd();
    }, [])

    const redirectForOneAd = async (id?: string) => {
        if (id) {
            const res = await getOneAd(id.toString());
            if (!res) return false;

            AdContext?.setAd(res.ad);
            AdContext?.setOthers(res.others);

            navigate(`/item/${id}`);
        }

    }

    return (
        <C.Container onClick={() => redirectForOneAd(data._id)}>
            <C.AreaImage>
                {data.images?.map((it, i) => (
                    <C.Image
                        key={i}
                        src={it.default === true ? it.url : ""}
                        alt=""
                    />
                ))}
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
        </C.Container >
    )
}