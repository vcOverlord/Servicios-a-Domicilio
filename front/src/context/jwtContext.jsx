import { useState, createContext } from "react";


export const JwtContext = createContext();

export const JwtContextProvider = ({children}) => {
   
    const [jwt, setJwt] = useState(() => {
        const savedJwt = localStorage.getItem("token");
        return savedJwt || null;
    });


    const [ usuario, setUsuario] = useState(() => {
        const savedUsuario = localStorage.getItem("usuario");      
        const initialValue = JSON.parse(savedUsuario);
        return initialValue || null
    });


    const [ admin, setAdmin] = useState(() => {
        const savedAdmin = localStorage.getItem("admin");
        const initialValue = JSON.parse(savedAdmin);
        return initialValue || null
    });

    const [editingBooking, setEditingBooking] = useState ({})

    const logout = () => {
        setUsuario(null);
        setAdmin(null);
        setJwt(null);
        localStorage.removeItem("usuario");
        localStorage.removeItem("admin");
        localStorage.removeItem("token");
       

    }

    return (
    <JwtContext.Provider value={{jwt, setJwt, usuario, setUsuario, admin, setAdmin, logout, editingBooking, setEditingBooking }}>
        {children}
    </JwtContext.Provider>

    );

};