import React from 'react'
import logo from "../assets/logo.svg"
export const Navbar = (props) => {


   const navbarOption=[
        {
           iconName:"person_outline",
           lable:"Sign In"
        },
        {
            iconName:"shopping_bag",
            lable:"Cart"
         },
         {
            iconName:"support",
            lable:"Help"
         },
         {
            iconName:"search",
            lable:"search"
         }
    ]
  return (
    <div>
      <section className="navbar">
        <div className="container">
            <img className="logo" src={logo} alt=""/>
            <div className="location">
                <span className="city"> {props.city}</span>
                <span className="state">{props.state}, {props.country}</span>
            </div>
            <div className="navbar-options">
                {navbarOption.map(e=>(
                    <div key={e.iconName}className="navbar-option">
                    <span className="material-icons"> {e.iconName}</span> {e.lable}
                    </div>
                ))}
            </div>
        </div>
    </section>
    </div>
  )
}
