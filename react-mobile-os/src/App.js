
import './App.css';

function App() {
  let mobile =["android","blackberry","ipone","windows phone"];
  let manufecture =[{
    name:"samsung" , style:"Square" },
  {name:"HTC" ,style:"Square"},
  {name:"Micomax" },
  {name:"Apple",style:"circle"}]
  return (
    <div className="App">

<h1>Mobile Operating System</h1>
<ul>
  {mobile.map(e=>{
    return(
      <li>{e}</li>
    )
  })}
</ul>
<h1>Mobile Manufacture</h1>
<ul >{manufecture.map(e=>{
  return(
    <li className={e.style}>{e.name}</li>
  )
})}</ul>
    </div>
  );
}

export default App;
