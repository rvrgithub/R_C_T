import { useState } from "react";
import {createContext} from "react";


export const AuthContext = createContext();
export const AuthProvider =({ children})=>{
const [isAuthorized ,setIsAuthrized] = useState();
const login =(username ,password) =>{
    if(username && password){
        setIsAuthrized(true);
    }
}
const logout =()=>{
    setIsAuthrized(false);
}
return (
    <AuthContext.Provider value={{isAuthorized,login,logout}}>{children}</AuthContext.Provider>
)
}