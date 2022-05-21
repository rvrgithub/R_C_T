import React from 'react'

export const CardData = (props) => {

  return (
    <div > <div className="main_box">
    {props.apple.map((e) => (
      <div className={e.style} >
        <div className="flex">
          <p className="date">{e.data}</p>
          <img className="imglogo" src={e.imgLogo} />
        </div>
        <button className="button">{e.case}</button>
        <p className="logoname">{e.logoName}</p>
        <p className="pay">{e.pay}</p>
        <div className="flex">
          <p className="des"> {e.des}</p>
          <img className="arrow" src={e.arrow} />
        </div>
      </div>
    ))}
  </div></div>
  )
}
