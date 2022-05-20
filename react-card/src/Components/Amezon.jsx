import React from "react";
// import { amezon } from './Apple'

export const Amezon = (props) => {
  return (
    <div className="amezon_box">
      {props.amezon.map((e) => (
        <div>
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
    </div>
  );
};
