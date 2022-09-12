import { useState, createContext } from "react";

export const JwtContext = createContext();

export const JwtContextProvider = ({children}) => {
    const [jwt, setJwt] = useState(() => {
        const savedJwt = localStorage.getItem("token");
        return savedJwt || null;
    });


    const [ usuario, setUsuario, admin, setAdmin] = useState(() => {
        const savedUsuario = localStorage.getItem("usuario");
        const savedAdmin = localStorage.getItem("admin");
        const initialValue = JSON.parse(savedUsuario, savedAdmin);
        return initialValue || null
    });

    const logout = () => {
        setUsuario(null);
        setAdmin(null);
        setJwt(null);

        localStorage.removeItem("usuario admin");
        localStorage.removeItem("token");

    }

    return (
    <JwtContext.Provider value={{jwt, setJwt, usuario, setUsuario, admin, setAdmin, logout}}>
        {children}
    </JwtContext.Provider>

    );

};