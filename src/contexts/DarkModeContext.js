import { createContext, useState } from "react";
export const DarkModeContext = createContext({})

export const DarkModeProvider = ({children}) => {
    const [isDarkmode, setIsDarkmode] = useState(true)
    return(
        <DarkModeContext.Provider value={{
            isDarkmode,
            setIsDarkmode, 
        }}>
            {children}
        </DarkModeContext.Provider>
    )
}