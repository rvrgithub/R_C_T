
import './App.css';
import { Navbar } from './Components.jsx/Navbar';
import { Home } from './Components.jsx/Home';
import { useContext } from 'react';
import { ThemeConetext } from './Context/ThemeContext';
import { Footer } from './Components.jsx/Footer';

function App() {
  const {isLight} = useContext(ThemeConetext)
  return (
    <div className={`App ${isLight ? "light" : "dark"}`}>
     <Navbar/>
     <Home/>
     <Footer/>
    </div>
  );
}

export default App;
