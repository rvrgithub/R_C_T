import React from 'react'
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';
export const RequireAuth = ({children}) => {
    const {isAuth}= useContext(AuthContext);
    const {pathname} = useLocation();
    if(isAuth){
        return children;
    }
    else{
      return <Navigate to="/login"
          state={{from:pathname}}
      />
    }

}
