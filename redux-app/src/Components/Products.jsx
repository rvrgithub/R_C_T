import React from 'react'
import { useEffect,useState } from 'react'
import { Link ,Outlet} from 'react-router-dom';

export const Products = () => {
    const [data,setData]= useState([]);
    // const handleData =()=>{


      

useEffect(() => {
    const fetchPRoducts = async()=>{
        
     let res= await fetch("http://localhost:8080/products")
        let d = await res.json()
            setData(d)
            console.log("d",d)
    }
        fetchPRoducts();
    }, []);
   

    console.log("data",data);
  return (
    <div>Products{" "}
    <div style={{display:"grid" ,gridTemplateColumns:"1fr 1fr 1fr"}}>
    <Outlet/>
    <div>
    {data.map((e)=>(
      <div key={e.id}>
      <Link to={`/products/${e.id}`}>{e.name}</Link>
      </div>
    ))}
    </div>
  
        <Outlet/>

    </div>
 </div>
   )
}
