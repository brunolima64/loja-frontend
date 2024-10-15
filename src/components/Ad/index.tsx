import { useNavigate } from "react-router-dom";
import { FormatedPrice } from "../../utils/FormatedPrice";
import * as C from "./styles";
import { useContext, useEffect } from "react";
import { AdCtx } from "../../contexts/AdCtx";
import { getOneAd } from "../../Apis/api";
import { Ad } from "../../types/Ad";

type Props = {
    data: Ad;
}
export const AdHome = ({ data }: Props) => {
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
            {data &&
                <>
                    <C.AreaImage>
                        {data.images?.map(it => (
                            <C.Image
                                key={data._id}
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
                </>
            }
        </C.Container >
    )
}