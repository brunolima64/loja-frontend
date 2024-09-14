import { useContext, useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import * as C from "./styles";
import { AdCtx } from "../../contexts/AdCtx";
import { Ad } from "../../components/Ad";
import { getOneAd } from "../../Apis/api";
import { AdType } from "../../types/AdType";
import { FormateDate } from "../../utils/FormateDate";

export const AdPage = () => {
    const adCtx = useContext(AdCtx);
    const [othersAdsUser, setOthersAdsUser] = useState<AdType[]>([]);

    useEffect(() => {
        getOthersAds();
    }, []);

    const getOthersAds = async () => {
        if (!adCtx?.ad?._id) return false;

        const res = await getOneAd(adCtx?.ad?._id);
        setOthersAdsUser(res.others);
    }

    return (
        <C.PageContainer>
            <Header />
            <C.Container>
                <C.ProdInfos>
                    <C.Left>
                        <C.ImageArea>
                            <img src={adCtx?.ad?.images[0].url} alt="" />
                        </C.ImageArea>
                        <C.InfoArea>
                            <C.Title>{adCtx?.ad?.title}</C.Title>
                            <C.DateCreated>Postado: {FormateDate(adCtx?.ad?.dateCreated)}</C.DateCreated>
                            {adCtx?.ad?.description &&
                                <C.Desc>{adCtx?.ad?.description}</C.Desc>
                            }
                            <C.Infos>
                                <C.Info>
                                    <h4>Categoria:</h4>
                                    {adCtx?.ad?.category}
                                </C.Info>
                                <C.Info>
                                    <h4>Estado:</h4>
                                    {adCtx?.ad?.state}
                                </C.Info>
                                <C.Info>
                                    <h4>Status:</h4>
                                    {adCtx?.ad?.status}
                                </C.Info>
                            </C.Infos>
                            <hr />
                            <p>visualizações: {adCtx?.ad?.views}</p>
                        </C.InfoArea>
                    </C.Left>
                    <C.Right>

                        <C.PriceArea>
                            <p>Preço:</p>
                            <p>{adCtx?.ad?.priceNeg ? adCtx?.ad?.price : "Negoçiavel"}</p>
                        </C.PriceArea>
                        <C.Contact>Fale com o vendedor</C.Contact>
                        <C.Suport>
                            <h3>Suporte</h3>
                            <p>E-mail: suporte@gmail.com</p>
                            <p>Estado: SP</p>
                        </C.Suport>
                    </C.Right>
                </C.ProdInfos>

                {othersAdsUser.length > 0 &&
                    <h2>Outras ofertas do mesmo vendedor:</h2>
                }

                <C.OthersAds>
                    {othersAdsUser.map(item => (
                        <Ad key={item._id} data={item} />
                    ))}
                </C.OthersAds>


            </C.Container>
            <Footer />
        </C.PageContainer>
    )
}