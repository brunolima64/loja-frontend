import { useContext, useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import * as C from "./styles";
import { UserContext } from "../../contexts/UserContext";
import { getAllAds } from "../../Apis/api";
import { AdItem } from "../../components/AdUser";
import { UpdateAd } from "../../components/UpdateAd";
import { UpdateUser } from "../../components/UpdateUser";
import { Ad } from "../../types/Ad";
import { SkeletonAd } from "../../components/Skeletons/SkeletonAd";

export const UserMe = () => {
    const userCtx = useContext(UserContext);

    // limita o acesso a pagina apenas para usuarios logados;
    if (!userCtx?.userLogged) {
        window.location.href = "/";
        alert("Precisa estar logado!");
        return false;
    }

    const [adsUser, setAdsUser] = useState<Ad[]>([]);
    const [adSelected, setAdSelected] = useState<Ad | undefined>();
    const [showModalUpdateAd, setShowModalUpdateAd] = useState(false);

    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showSkeleton, setShowSkeleton] = useState(true);

    useEffect(() => {
        const getMyAds = async () => {
            const res = await getAllAds();
            let adsFiltered = res.ads.filter((it: any) => it.idUser === userCtx?.userLogged._id);

            setAdsUser(adsFiltered);
            setShowModalUpdateAd(true);
        }
        getMyAds();
        controllerSkeleton();
    }, [adSelected]);

    const showUpdateAd = (id: string) => {
        let adFiltered = adsUser.find((it: Ad) => it._id === id);
        setAdSelected(adFiltered);
    }

    const showUpdateUser = () => {
        setShowModalUpdateUser(true);
    }

    // Remove Skeleton
    const controllerSkeleton = () => {
        setTimeout(() => {
            setShowSkeleton(false);
        }, 3000);
    }

    return (
        <C.PageContainer>
            {showModalUpdateUser &&
                <UpdateUser
                    setShowModalUpdateUser={setShowModalUpdateUser}
                />
            }
            <C.Container>
                <C.InfoUser>
                    <C.Title>Meu usuario</C.Title>
                    <C.InfoArea>
                        <C.TitleInfo>Usuario:</C.TitleInfo>
                        <C.Info>{userCtx?.userLogged.name}</C.Info>
                    </C.InfoArea>
                    <C.InfoArea>
                        <C.TitleInfo>E-mail:</C.TitleInfo>
                        <C.Info>{userCtx?.userLogged.email}</C.Info>
                    </C.InfoArea>
                    <C.ButtonEditProfile onClick={showUpdateUser}>Editar usuario</C.ButtonEditProfile>
                </C.InfoUser>

                {showSkeleton &&
                    <C.AdsUser>
                        <SkeletonAd />
                        <SkeletonAd />
                        <SkeletonAd />
                        <SkeletonAd />
                        <SkeletonAd />
                    </C.AdsUser>
                }



                {adsUser.length > 0 &&
                    <C.AdsUserArea>
                        <h3>Meus posts: </h3>
                        <C.AdsUser>
                            {adsUser && adsUser.map((it) => (
                                <AdItem
                                    key={it._id}
                                    data={it}
                                    showUpdateAd={() => showUpdateAd(it._id)}
                                />
                            ))}
                            {adsUser.length === 0 && <p>Não há posts para exibir.</p>}
                        </C.AdsUser>

                        {showModalUpdateAd && adSelected &&
                            <UpdateAd
                                item={adSelected}
                                setAdSelected={setAdSelected}
                                setShowModalUpdateAd={setShowModalUpdateAd}
                            />
                        }
                    </C.AdsUserArea>
                }

                {adsUser.length === 0 &&
                    <C.Warning>
                        <h3>Meus posts: </h3>
                        <p>Não há posts para exibir.</p>
                    </C.Warning>
                }
            </C.Container>
        </C.PageContainer>
    )
}