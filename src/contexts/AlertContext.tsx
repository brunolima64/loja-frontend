import { createContext, ReactNode, useState } from "react";

type AlertType = {
    alertMsg: string;
    setAlertMsg: (msg: string) => void;
}
export const AlertContext = createContext<AlertType | null>(null);

type Props = { children: ReactNode; }
export const AlertContextProvider = ({ children }: Props) => {
    const [alertMsg, setAlertMsg] = useState("");

    return (
        <AlertContext.Provider value={{ alertMsg, setAlertMsg }}>
            {children}
        </AlertContext.Provider>
    )
}