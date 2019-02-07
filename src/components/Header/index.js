import React from "react";
import "./style.css";
import Pic from "../../assets/pictures/FoodFinder-LOGO.png"

function Header() {
  return (
    <header className="header">
      <div className="top">
        Food Finder <img alt="Food Finder Logo" src={Pic} />
      </div>
    </header>
  );
}

export default Header;
