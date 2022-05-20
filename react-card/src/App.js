// import logo from './logo.svg';
import './App.css';
import { Amezon } from './Components/Amezon';
import { Apple } from './Components/Apple';
import amezon from "./Data/amezon.json";
import apple from "./Data/apple.json";
function App() {
  return (
    <div className="App">

<Amezon amezon={amezon}/>
<Apple apple={apple}/>
    </div>
  );
}

export default App;
