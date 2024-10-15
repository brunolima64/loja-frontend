import { useContext, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import * as C from "./styles";
import { AdCtx } from "../../contexts/AdCtx";
import { FormateDate } from "../../utils/FormateDate";
import { AdHome } from "../../components/Ad";

export const AdPage = () => {
    const adCtx = useContext(AdCtx);
    const [countImg, setCountImg] = useState(0);

    if (!adCtx?.ad) {
        alert("Ocoreu um erro!");
        window.location.href = "/";
        return false;
    }

    const handlePrevBtn = () => {
        if (adCtx.ad && adCtx.ad.images) {

            if (countImg === 0 && adCtx.ad.images.length > 0) {
                setCountImg(adCtx.ad?.images.length - 1);
            } else {
                setCountImg(countImg - 1);
            }

        }
    }

    const handleNextBtn = () => {
        if (adCtx.ad && adCtx.ad.images) {

            if ((adCtx.ad.images?.length - 1) === countImg) {
                setCountImg(0);
            } else {
                setCountImg(countImg + 1);
            }

        }
    }

    return (
        <C.PageContainer>
            <C.Container>
                <C.ProdInfos>
                    {adCtx.ad &&
                        <C.Left>
                            <C.ImageArea>
                                <C.ControllerBtns>
                                    <C.BtnPrev onClick={handlePrevBtn}>⬅</C.BtnPrev>
                                    <C.BtnNext onClick={handleNextBtn}>➡</C.BtnNext>
                                </C.ControllerBtns>

                                <img
                                    src={adCtx.ad.images !== undefined && adCtx.ad.images[countImg].url !== "" ? adCtx.ad.images[countImg].url : ""}
                                    alt=""
                                />
                            </C.ImageArea>

                            <C.InfoArea>
                                <C.Title>{adCtx.ad.title}</C.Title>
                                <C.DateCreated>Postado: {FormateDate(adCtx.ad.dateCreated)}</C.DateCreated>
                                {adCtx?.ad?.description &&
                                    <C.Desc>{adCtx.ad.description}</C.Desc>
                                }
                                <C.Infos>
                                    <C.Info>
                                        <h4>Categoria:</h4>
                                        {adCtx.ad.category}
                                    </C.Info>
                                    <C.Info>
                                        <h4>Estado:</h4>
                                        {adCtx.ad.state}
                                    </C.Info>
                                </C.Infos>
                                <hr />
                                <p>visualizações: {adCtx.ad.views}</p>
                            </C.InfoArea>
                        </C.Left>}
                    <C.Right>

                        <C.PriceArea>
                            <h3>Preço:</h3>
                            <p>{adCtx.ad.priceNeg ? adCtx.ad.price : "Negoçiavel"}</p>
                        </C.PriceArea>
                        <C.Contact>Fale com o vendedor</C.Contact>
                        <C.Suport>
                            <h3>Suporte</h3>
                            <p>E-mail: suporte@gmail.com</p>
                            <p>Estado: SP</p>
                        </C.Suport>
                    </C.Right>
                </C.ProdInfos>

                <C.OthersArea>
                    {adCtx?.others && adCtx?.others.length > 0 &&
                        <C.AreaTitle>
                            <h2>Outras ofertas do mesmo vendedor:</h2>
                        </C.AreaTitle>
                    }

                    <C.OthersAds>
                        {adCtx?.others && adCtx?.others.map(item => (
                            <AdHome key={item._id} data={item} />
                        ))}
                    </C.OthersAds>
                </C.OthersArea>


            </C.Container>
        </C.PageContainer>
    )
}