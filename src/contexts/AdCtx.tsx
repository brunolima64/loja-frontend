import { createContext, ReactNode, useEffect, useState } from "react";
import { AdType } from "../types/AdType";

type AdCtxType = {
    ad: AdType | undefined;
    setAd: (it: any) => void;
}
export const AdCtx = createContext<AdCtxType | null>(null);

type Props = { children: ReactNode; }
export const AdCtxProvider = ({ children }: Props) => {
    const [ad, setAd] = useState<AdType | undefined>(() => {
        // Recupera do local storage ao inicializar
        const ad = localStorage.getItem('ad');
        return ad ? JSON.parse(ad) : null;
    });

    useEffect(() => {
        // Armazena no local storage sempre que ele mudar
        if (ad) {
            localStorage.setItem('ad', JSON.stringify(ad));
        } else {
            localStorage.removeItem('ad');
        }
    }, [ad]);

    return (
        <AdCtx.Provider value={{ ad, setAd }}>
            {children}
        </AdCtx.Provider>
    )
}