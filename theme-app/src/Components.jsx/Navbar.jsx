import React from 'react'
import { useContext } from 'react'
import { ThemeConetext } from '../Context/ThemeContext'
// import { Footer } from './Footer';
// import { Stack,   Switch } from '@chakra-ui/react'
export const Navbar = () => {
  const {isLight ,toggleTheme} = useContext(ThemeConetext);
  return (
    <div style={{display:"flex" ,justifyContent: "space-between",padding:"20px 60px"}}>
    <h1> My New Theme App </h1>
    <button onClick={toggleTheme}>{isLight ? "Dark" :"Light"}</button>

    {/* <Stack align='center' direction='row' onClick={toggleTheme}>
  <Switch size='lg' />
</Stack> */}


    </div>
  )
}
