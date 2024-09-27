import { createContext, ReactNode, useEffect, useState } from "react";
import { Ad } from "../types/Ad";

type AdCtxType = {
    ad: Ad | undefined;
    setAd: (it: Ad | undefined) => void;
    others: Ad[] | undefined;
    setOthers: (it: Ad[]) => void;
}
export const AdCtx = createContext<AdCtxType | null>(null);

type Props = { children: ReactNode; }

export const AdCtxProvider = ({ children }: Props) => {

    const [others, setOthers] = useState<Ad[] | undefined>(() => {
        // Recupera do local storage ao inicializar
        const others = localStorage.getItem('others');
        return others ? JSON.parse(others) : null;
    });

    const [ad, setAd] = useState<Ad | undefined>(() => {
        // Recupera do local storage ao inicializar
        const ad = localStorage.getItem('ad');
        return ad ? JSON.parse(ad) : null;
    });

    useEffect(() => {
        // Armazena no local storage sempre que ele mudar
        if (others) {
            localStorage.setItem('others', JSON.stringify(others));
        } else {
            localStorage.removeItem('others');
        }
    }, [others]);

    useEffect(() => {

        // Armazena no local storage sempre que ele mudar
        if (ad) {
            localStorage.setItem('ad', JSON.stringify(ad));
        } else {
            localStorage.removeItem('ad');
        }

    }, [ad]);

    return (
        <AdCtx.Provider value={{ ad, setAd, others, setOthers }}>
            {children}
        </AdCtx.Provider>
    )
}