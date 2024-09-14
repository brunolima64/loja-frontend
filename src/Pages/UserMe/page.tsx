import { useContext, useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import * as C from "./styles";
import { UserContext } from "../../contexts/UserContext";
import { getAllAds } from "../../Apis/api";
import { AdItem } from "../../components/AdUser";
import { AdType } from "../../types/AdType";
import { UpdateAd } from "../../components/UpdateAd";

export const UserMe = () => {
    const userCtx = useContext(UserContext);

    // limita o acesso a pagina apenas para usuarios logados;
    if (!userCtx?.userLogged) {
        window.location.href = "/";
        alert("Precisa estar logado!");
        return false;
    }

    const [adsUser, setAdsUser] = useState<AdType[]>([]);
    const [adSelected, setAdSelected] = useState<AdType | undefined>();
    const [showModalUpdateAd, setShowModalUpdateAd] = useState(false);

    useEffect(() => {
        const getMyAds = async () => {
            const res = await getAllAds();
            let adsFiltered = res.ads.filter((it: any) => it.idUser === userCtx?.userLogged._id);
            setAdsUser(adsFiltered);
            setShowModalUpdateAd(true);
        }
        getMyAds();
    }, [adSelected]);

    const showUpdateAd = (id: string) => {
        let adFiltered = adsUser.find((it: any) => it._id === id);
        setAdSelected(adFiltered);
    }

    return (
        <C.PageContainer>
            {showModalUpdateAd && adSelected &&
                <UpdateAd
                    item={adSelected}
                    setAdSelected={setAdSelected}
                    setShowModalUpdateAd={setShowModalUpdateAd}
                />
            }
            <Header />
            <C.Container>
                <C.InfoUser>
                    <C.ImgArea>
                        <img
                            src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
                            alt=""
                        />
                    </C.ImgArea>
                    <C.InfoArea>
                        <C.Info>
                            <p>Usuario:</p>
                            <p>{userCtx?.userLogged && userCtx?.userLogged.name}</p>
                        </C.Info>
                        <C.Info>
                            <p>email: </p>
                            <p>{userCtx?.userLogged && userCtx?.userLogged.email}</p>
                        </C.Info>
                    </C.InfoArea>
                </C.InfoUser>

                <h3>Meus posts: </h3>

                <C.AdsUser>
                    {adsUser && adsUser.map((it) => (
                        <AdItem
                            key={it._id}
                            data={it}
                            showUpdateAd={() => showUpdateAd(it._id)}
                        />
                    ))}
                    {!adsUser && <p>Não há posts para exibir.</p>}
                </C.AdsUser>
            </C.Container>
            <Footer />
        </C.PageContainer>
    )
}