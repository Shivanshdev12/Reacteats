import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import meals from "../../assets/meals.jpg";
import "./Header.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className="main-image">
        <img src={meals} />
      </div>
    </React.Fragment>
  );
};

export default Header;
