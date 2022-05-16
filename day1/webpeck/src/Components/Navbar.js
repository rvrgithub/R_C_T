import React from "react";
import "./Navbar.css";
export const Navbar = () => {
  const logoImg =
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/modern-bakery-logo-design-template-e979c6db88d6772062e4090687c00b7e_screen.jpg";

  const links = ["service", "Project", "About"];
  return (
    <nav className="navbar">
      <div className="nav">
        <div>
          <img src={logoImg}></img>
        </div>
        <div className="links">
          {links.map((e) => {
            return <p>{e}</p>;
          })}
        </div>
        <div>
          <button>Context</button>
        </div>
      </div>
    </nav>
  );
};
