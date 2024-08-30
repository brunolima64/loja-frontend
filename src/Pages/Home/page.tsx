import { useContext, useEffect, useState } from "react";
import { AdItem } from "../../components/AdItem";
import { CategoryItem } from "../../components/CategoryItem";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SearchAd } from "../../components/SearchAd";
import * as C from "./styles";
import { getAllAds, getCategories, getOneAd } from "../../Apis/api";
import { Ad } from "../../types/Ad";
import { AdCtx } from "../../contexts/AdCtx";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const AdContext = useContext(AdCtx);
    const navigate = useNavigate();

    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [states, setStates] = useState([]);
    const [user, setUser] = useState({});
    const [ads, setAds] = useState([]);
    const [ad, setAd] = useState<Ad>();

    useEffect(() => {
        const getCats = async () => {
            const res = await getCategories();
            setCategories(res.categories);
        }
        getCats();
    }, [])

    useEffect(() => {
        const getAds = async () => {
            let res = await getAllAds();
            setAds(res.ads);
            console.log(res.ads)
        }
        getAds();
    }, []);

    const handleAdClick = async (id: number) => {
        const res = await getOneAd(id.toString());
        if (!res) return false;

        AdContext?.setAd(res);
        navigate(`/item/${id}`);
    }

    return (
        <C.PageContainer>
            <Header />
            <C.Container>
                <SearchAd />
                <C.Categories>
                    {categories.map((item, i) => (
                        <CategoryItem key={i} data={item} />
                    ))}
                </C.Categories>

                <h2>Anúncios recentes</h2>

                <C.recentAds>
                    {ads.length > 0 && ads.map((it, i) => (
                        <AdItem key={i} data={it} onClick={handleAdClick} />
                    ))}
                </C.recentAds>

                <h2>Ver todos</h2>
                <hr />
            </C.Container>
            <Footer />
        </C.PageContainer>
    )
}