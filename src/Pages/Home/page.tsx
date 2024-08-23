import { useContext, useEffect, useState } from "react";
import { AdItem } from "../../components/AdItem";
import { CategoryItem } from "../../components/CategoryItem";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SearchAd } from "../../components/SearchAd";
import * as C from "./styles";
import { getAllAds, getOneAd } from "../../Apis/api";
import { Ad } from "../../types/Ad";
import { AdCtx } from "../../contexts/AdCtx";

export const Home = () => {
    const AdContext = useContext(AdCtx);

    const [categories, setCategories] = useState([]);
    const [states, setStates] = useState([]);
    const [user, setUser] = useState({});
    const [ads, setAds] = useState<Ad[]>([]);
    const [ad, setAd] = useState<Ad>();

    useEffect(() => {
        const getAds = async () => {
            let res = await getAllAds();
            setAds(res);
            console.log(res)
        }
        getAds();
    }, []);

    useEffect(() => {
        const goAdPage = async (id: number) => {

        }
    }, []);

    return (
        <C.PageContainer>
            <Header />
            <C.Container>
                <SearchAd />
                <C.Categories>
                    {categories.map(it => (
                        <CategoryItem key={it} />
                    ))}
                </C.Categories>

                <h2>Anúncios recentes</h2>

                <C.recentAds>
                    {ads.map(it => (
                        <AdItem key={it.id} data={it} goAdPage={goAdPage} />
                    ))}
                </C.recentAds>

                <h2>Ver todos</h2>
                <hr />
            </C.Container>
            <Footer />
        </C.PageContainer>
    )
}