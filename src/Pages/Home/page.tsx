import { useEffect, useState } from "react";
import { CategoryItem } from "../../components/Category";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import * as C from "./styles";
import { getAllAds, getCategories, getStates, search } from "../../Apis/api";
import { AdType } from "../../types/AdType";
import { Ad } from "../../components/Ad";
import { StateType } from "../../types/StateType";

export const Home = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [states, setStates] = useState<StateType[]>([]);
    const [ads, setAds] = useState<AdType[]>([]);
    const [adsViews, setAdsViews] = useState<AdType[]>([]);

    const [showAds, setShowAds] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [searchField, setSearchField] = useState("");
    const [statesFilter, setStatesFilter] = useState("");
    const [catFilter, setCatFilter] = useState("");

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
        const getAds = async () => {
            let res = await getAllAds();
            setAds(res.ads);

            let adsPlusViews = [];
            res.ads.sort((a, b) => b.views - a.views);

            for (let i = 0; i < 4; i++) {
                adsPlusViews.push(res.ads[i]);
            }

            setAdsViews(adsPlusViews);
        }
        getAds();
    }, []);

    const filterAds = async () => {
        setIsLoading(true);
        setShowFilter(true);
        setShowAds(true);

        const res = await search({
            q: searchField || "",
            skip: 0 || 0,
            cat: catFilter || "",
            sort: "asc",
            limit: 10,
            state: statesFilter || ""
        });

        setAds(res.ads);
        setIsLoading(false)
    }

    useEffect(() => {
        if (!catFilter && !statesFilter && !searchField) {
            setShowFilter(false);
        }
    }, [catFilter, statesFilter, searchField]);

    return (
        <C.PageContainer>
            <Header />
            <C.Container>

                <C.SearchArea>
                    <C.Input
                        type="text"
                        value={searchField}
                        onChange={e => setSearchField(e.target.value)}
                    />

                    <C.Select onChange={e => setStatesFilter(e.target.value)}>
                        <option value="0"></option>
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
                            setCatSelected={() => setCatFilter(item.name)}
                        />
                    ))}
                </C.Categories>

                {showFilter &&
                    <C.ShowFilters>
                        <p>Filtros: </p>

                        {catFilter &&
                            <C.ShowFilter>
                                <C.Back onClick={() => setCatFilter("")}>❌</C.Back>
                                <p>Categoria: {catFilter}</p>
                            </C.ShowFilter>}

                        {statesFilter &&
                            <C.ShowFilter>
                                <C.Back onClick={() => setStatesFilter("")}>❌</C.Back>
                                <p>Estado: {statesFilter}</p>
                            </C.ShowFilter>}

                        {searchField &&
                            <C.ShowFilter>
                                <C.Back onClick={() => setSearchField("")}>❌</C.Back>
                                <p>nome: {searchField}</p>
                            </C.ShowFilter>}

                    </C.ShowFilters>
                }

                {!showAds && adsViews.length > 0 &&
                    <>
                        <h2>Anúncios mais visualizados</h2>

                        <C.AreaAds>
                            {adsViews.map(item => (
                                <Ad key={item._id} data={item} />
                            ))}
                        </C.AreaAds>

                        <h2 onClick={() => setShowAds(!showAds)}>Ver todos</h2>
                    </>
                }

                {showAds &&
                    <>
                        <h2 onClick={() => setShowAds(!showAds)}>Ver menos</h2>

                        <C.AreaAds>
                            {ads.map(item => (
                                <Ad key={item._id} data={item} />
                            ))}
                        </C.AreaAds>

                        {ads.length === 0 && <p>Não há itens para exibir.</p>}
                    </>
                }
            </C.Container>
            <Footer />
        </C.PageContainer>
    )
}