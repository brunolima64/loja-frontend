import { createContext, ReactNode, useEffect, useState } from "react";
import { User } from "../types/User";

type UserCtxType = {
    userLogged: User;
    setUserLogged: (user: User | null) => void;
}
export const UserContext = createContext<UserCtxType | null>(null);

type Props = { children: ReactNode; }
export const UserContextProvider = ({ children }: Props) => {
    const [userLogged, setUserLogged] = useState(() => {
        // Recupera o usuário do local storage ao inicializar
        const storedUser = localStorage.getItem('userLogged');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        // Armazena o usuário no local storage sempre que ele mudar
        if (userLogged) {
            localStorage.setItem('userLogged', JSON.stringify(userLogged));
        } else {
            localStorage.removeItem('userLogged');
        }
    }, [userLogged]);

    return (
        <UserContext.Provider value={{ userLogged, setUserLogged }}>
            {children}
        </UserContext.Provider>
    )
}