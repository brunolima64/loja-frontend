import { createContext, ReactNode, useEffect, useState } from "react";
import { AdType } from "../types/AdType";

type AdCtxType = {
    ad: AdType | undefined;
    setAd: (it: any) => void;
    others: AdType[] | undefined;
    setOthers: (it: any) => void;
}
export const AdCtx = createContext<AdCtxType | null>(null);

type Props = { children: ReactNode; }

export const AdCtxProvider = ({ children }: Props) => {

    const [others, setOthers] = useState<AdType[] | undefined>(() => {
        // Recupera do local storage ao inicializar
        const others = localStorage.getItem('others');
        return others ? JSON.parse(others) : null;
    });

    const [ad, setAd] = useState<AdType | undefined>(() => {
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