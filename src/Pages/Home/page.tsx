import { useEffect, useState } from "react";
import { CategoryItem } from "../../components/Category";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import * as C from "./styles";
import { getAllAds, getCategories, getStates } from "../../Apis/api";
import { StateType } from "../../types/StateType";
import { Ad } from "../../types/Ad";
import { AdHome } from "../../components/Ad";

export const Home = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [states, setStates] = useState<StateType[]>([]);
    const [ads, setAds] = useState<Ad[]>([]);
    const [adsViews, setAdsViews] = useState<Ad[]>([]);

    const [showAds, setShowAds] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [searchField, setSearchField] = useState("");
    const [statesFilter, setStatesFilter] = useState("");
    const [catFilter, setCatFilter] = useState("");

    const [limit, setLimit] = useState(10);

    useEffect(() => {
        const getCats = async () => {
            const res = await getCategories();
            setCategories(res.categories);
        }
        getCats();
    }, [])

    useEffect(() => {
        const getStatesRes = async () => {
            const res = await getStates();
            setStates(res.states);
        }
        getStatesRes();
    }, []);

    useEffect(() => {
        getAds();
    }, [limit]);

    const getAds = async () => {
        let data = {
            q: searchField || "",
            skip: 0 || 0,
            cat: catFilter || "",
            sort: "asc",
            limit: limit,
            state: statesFilter || ""
        }

        let res = await getAllAds(data);

        setAds(res.ads);

        // ads more views
        let adsPlusViews = [];
        type sortAds = { views: number };

        res.ads.sort((a: sortAds, b: sortAds) => b.views - a.views);

        for (let i = 0; i < 4; i++) {
            adsPlusViews.push(res.ads[i]);
        }
        setAdsViews(adsPlusViews);
    }


    const filterAds = async () => {
        setIsLoading(true);
        setShowAds(true);

        await getAds(); // load ads filtered 

        setIsLoading(false);
    }

    const clearFilter = () => {
        window.location.href = "/"; // reload page and clear the fields;
    }

    return (
        <C.PageContainer>
            <Header />
            <C.Container>

                <C.SearchArea>
                    <C.Input
                        type="search"
                        value={searchField}
                        onChange={e => setSearchField(e.target.value)}
                    />

                    <C.Select onChange={e => setStatesFilter(e.target.value)}>
                        <option value=""></option>
                        {states.map((it) => (
                            <option key={it._id} value={it.name}>{it.name}</option>

                        ))}
                    </C.Select>

                    <C.Button onClick={filterAds}>{!isLoading ? "Pesquisar" : "Pesquisando..."}</C.Button>
                </C.SearchArea>

                <C.Categories>
                    {categories.map((item, i) => (
                        <CategoryItem
                            key={i}
                            data={item}
                            catSelected={catFilter}
                            setCatSelected={() => setCatFilter(item.name)}
                        />
                    ))}
                </C.Categories>

                {!showAds && adsViews.length > 0 &&
                    <>
                        <h2>Anúncios mais visualizados</h2>

                        <C.AreaAds>
                            {adsViews.length > 0 && adsViews.map(item => (
                                <AdHome key={item._id} data={item} />
                            ))}
                        </C.AreaAds>

                        <h2 onClick={() => setShowAds(true)}>Ver todos</h2>
                    </>
                }

                {showAds &&
                    <>
                        <h2 onClick={() => setShowAds(false)}>Ver menos</h2>

                        <C.AreaAds>
                            {ads.map(item => (
                                <AdHome key={item._id} data={item} />
                            ))}
                        </C.AreaAds>

                        {ads.length > 9 &&
                            <C.ButtonArea>
                                <C.Button onClick={() => setLimit(limit + 10)}>Ver mais</C.Button>
                            </C.ButtonArea>
                        }

                        {ads.length === 0 &&
                            <>
                                <p>Nenhum anúncio corresponde ao filtro.</p>
                                <C.ButtonArea>
                                    <C.Button onClick={clearFilter}>Limpar filtro</C.Button>
                                </C.ButtonArea>
                            </>
                        }
                    </>
                }

            </C.Container>
            <Footer />
        </C.PageContainer >
    )
}