import React from "react";
import "./MealItemForm.css";
import "./Input.css";

const MealItemForm = (props) => {
  return (
    <form className="form">
      <div className="input">
        <label htmlFor={props.id}>Amount</label>
        <input id={props.id} type="number" min="1" max="5" defaultValue="1" />
      </div>
      <button className="button">+Add</button>
    </form>
  );
};

export default MealItemForm;
