import { useState } from "react";
import { useEffect } from "react";
import { Children } from "react";
import { createContext } from "react";

const UserContext = createContext()

const UserContextProvider = ({children}) => {

    const [usuario, setUsuario] = useState({})
    useEffect(() => {
        setUsuario({
            name: "Jose Ramos",
            registered: "01/Junio/2023"
        })

    }, [])

    return(
        <UserContext.Provider value={usuario}>
            { children }
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }