import { createContext } from "react";
import { theme } from "./theme";
type ThemeContextProviderProps ={
    children: React.ReactNode
}

export const  Themecontext=createContext(theme);

export const ThemeContextProvider=({children}:ThemeContextProviderProps)=>{
    return <Themecontext.Provider value={theme} >{children}</Themecontext.Provider>
}