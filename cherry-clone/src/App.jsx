// import logo from './logo.svg';
import "./App.css";
import { Filters } from "./Comonents/Filters";
import { Navbar } from "./Comonents/Navbar";
import { Offer } from "./Comonents/Offer";
import { Restaurant } from "./Comonents/Restaurant";
import userInfo from "./Data/userInfo.json";
import offers from "./Data/offers.json";
import reastaurent from "./Data/reastaurent.json";
import { useState } from "react";
const filter= {
  1: "Cost High to Lost",
  2: "Cost Lost to High",
  3: "Ratings",
  4: "Delivery Time",
  5: "Relevance",
};
function App() {
  const [filterBy, setFilterBy] = useState("");
  const [data, setData] = useState(reastaurent);
  const updateFilter = (newFilter) => {
    console.log("newFilter",newFilter)
    switch (newFilter){
      case "1":{
        setFilterBy(1);
        var x=data.sort((a,b)=>Number(b.costForTwo) - Number(a.costForTwo))
        // console.log(x)
        // console.log(data.map((d)=>d.costForTwo));
        setData(x);
        break;
      }
      case "2":{
setFilterBy(2);
data.sort((a,b)=> Number(a.costForTwo)- Number(b.costForTwo));
// console.log(data.map((d)=>d.costForTwo));
setData([...data]);
break
      }
      case "3":{
setFilterBy(3);
 data.sort((a,b)=> Number(a.rating)- Number(b.rating));
setData(data)
break
      }
      case "4":{
        setFilterBy(4);
        data.sort((a,b)=>
        Number(a.deliveryTimings.split(" ")[0])-(Number(b.deliveryTimings.split(" ")[0])))
        //  console.log("data",data)
        // Number(a.deliveryTimings.split(" ")[0]-Number(b.deliveryTimings.split(" ")[0])))
         setData(data)
        break
              }
              case "5":{
                setFilterBy(5);
                data.sort((a,b)=>
                  Number(a.offer[0].split(" ")[0].slice(0,2))-Number(b.offer[0].split(" ")[0].slice(0,2)))
                setData(data);
                break;
              }
      default:{
        setData(reastaurent);
        break;
      }
    }
  };
  return (
    <div className="App">
      <Navbar {...userInfo.location} />
      <Offer offers={offers} />
      <section className="near-you">
        <Filters
          filter={filter}
          currentFilterBy={filterBy}
          updateFilter={updateFilter}
        />
        <Restaurant Reastaurent={data} />
      </section>
    </div>
  );
}

export default App;
