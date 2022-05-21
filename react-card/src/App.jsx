
import './App.css';
import { CardData } from './Components/CardData';
import apple from "./Data/apple.json";
function App() {
  return (
    <div className="App">
<CardData apple={apple}/>
    </div>
  );
}

export default App;
