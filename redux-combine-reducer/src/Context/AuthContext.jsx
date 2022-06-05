import React ,{createContext} from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();
export const AuthProvider =({children})=>{
    const [isAuth , setAuth]=useState(false);
    // const navigate =useNavigate()
    // const {state} =useLocation();
    // console.log(state);
    const login =()=>{
        setAuth(true);
//    if(state.from){
    //  navigate(state.from,{replace:true});
//    }
//    else{
//     //    navigate("/");
//    }
    }
    const logout=()=>{
        setAuth(false);
        // navigate("/")
    }
    return <AuthContext.Provider value={{isAuth ,login,logout}}>{children}</AuthContext.Provider>
}