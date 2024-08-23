import { createContext, ReactNode, useState } from "react";
import { Ad } from "../types/Ad";

type AdCtxType = {
    ad: Ad | undefined;
    setAd: (it: any) => void;
}
export const AdCtx = createContext<AdCtxType | null>(null);

type Props = { children: ReactNode; }
export const AdCtxProvider = ({ children }: Props) => {
    const [ad, setAd] = useState<Ad | undefined>();

    return (
        <AdCtx.Provider value={{ ad, setAd }}>
            {children}
        </AdCtx.Provider>
    )
}