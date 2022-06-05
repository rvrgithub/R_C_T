// import logo from './logo.svg';
import { useReducer } from 'react';
import './App.css';
const reducer = (counter,action)=>{
    switch (action.type){
      case "INCREMENT":{
        return counter +1;
            }
    case "DECREMENT":{
      return counter -1;
    }
    default :{
console.log("Type incorrect", action.type);
return counter;
    }
          }
}
function App() {
const [counter ,dispatch] = useReducer(reducer,0);
  return (
    <div className="App">
   Counter :{counter}
   <div>
     <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
     <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>

   </div> 
    </div>
  );
}

export default App;
