
import { useState } from "react";
import { createContext } from "react";

export const  ThemeConetext =createContext()
export const ThemeProvider = ({children})=>{
    const [theme ,setTheme] = useState("light");
const toggleTheme =()=>{
    if(theme === "light"){
        setTheme("dark");
    }
    else{
        setTheme("light");
    }
}

    return (
        <ThemeConetext.Provider value={{theme,isLight:theme ==="light", toggleTheme}}>{children}</ThemeConetext.Provider>
    )
}