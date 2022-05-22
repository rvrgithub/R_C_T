import React from 'react'
// import offer1 from "../assets/offer1.jpeg";
// import offer2 from "../assets/offer2.jpeg";
// import offer3 from "../assets/offer3.jpeg";
// import offer4 from "../assets/offer4.jpeg"
export const Offer = (props) => {
  return (
   <section className="offers">
    <div className="container">
    {props.offers.map((offer,index)=>(
        <img className="offer" key={index} src={offer} alt=""/>
    ))}
{/*         
        <img className="offer" src={offer2} />
        <img className="offer" src={offer3} />
        <img className="offer" src={offer4} /> */}
    </div>
</section>
  )
}
