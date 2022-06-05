// import logo from './logo.svg';
// import { useEffect } from 'react';
// import { useState } from 'react';
import './App.css';
// import { Stopwatch } from './Components/Stopwatch';
import { Timer } from './Components/Timer';


function App() {


  return (
    <div className="App">
    {process.env.REACT_APP_BASE_URL}
    {process.env.REACT_APP_A}
    {process.env.REACT_APP_B}
  <Timer/>
  {/* <Stopwatch/> */}
    </div>
  );
}

export default App;
