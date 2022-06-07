import logo from './logo.svg';
import './App.css';
import { Body } from './Components/Body';
import { Navbar } from './Components/Navbar';
import { useContext } from 'react';
import { ThemeConetext } from './Context/ThemeConext';
// import { CartProvider } from './Context/CartContext';

function App() {
  const {isLight} = useContext(ThemeConetext)
  return (
    <div className={`App ${isLight ?"light" : "dark"}`}>
      <Navbar/>
     <Body/>  
    </div>
  );
}

export default App;
