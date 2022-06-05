import { useState } from "react";

import "./App.css";
import { Counter } from "./Components/Counter";
import TodoApp from "./Components/TodoApp";

function App() {
  const [toggle, setToggle] = useState("");

  return (
    <div className="App">
      {/* ternary operator.........condition ? exprIfTrue : exprIfFalse */}
      <button
        onClick={() => {
          console.log("toggle",toggle);
          setToggle(!toggle);
          
        }}
      >
        {toggle ? "Show me Counter" : "Show me Todo"}
      </button>
      {toggle ? <TodoApp /> : <Counter />}
      {/* <TodoApp/> */}
    </div>
  );
}

export default App;
