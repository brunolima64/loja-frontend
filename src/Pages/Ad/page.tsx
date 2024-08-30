import { useContext } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import * as C from "./styles";
import { AdCtx } from "../../contexts/AdCtx";

export const Ad = () => {
    const adCtx = useContext(AdCtx);

    return (
        <C.PageContainer>
            <Header />
            <C.Container>
                <C.ProdInfos>
                    <C.Left>
                        <C.imageArea>
                            <img src={adCtx?.ad?.url} alt="" />
                        </C.imageArea>
                        <C.InfoArea>
                            <C.Title>{adCtx?.ad?.title}</C.Title>
                            <C.DateCreated>12/12/2012</C.DateCreated>
                            <C.Desc>...</C.Desc>
                            <hr />
                            <p>visualizações: 0</p>
                        </C.InfoArea>
                    </C.Left>
                    <C.Right>
                        <C.PriceArea>
                            <p>Preço:</p>
                            <h1>$600</h1>
                        </C.PriceArea>
                        <C.Contact>Fale com o vendedor</C.Contact>
                        <C.Suport>
                            <h3>Suporte</h3>
                            <p>E-mail: suporte@gmail.com</p>
                            <p>Estado: SP</p>
                        </C.Suport>
                    </C.Right>
                </C.ProdInfos>
                <C.Others>
                    <h2>Outras ofertas do mesmo vendedor</h2>
                </C.Others>
            </C.Container>
            <Footer />
        </C.PageContainer>
    )
}