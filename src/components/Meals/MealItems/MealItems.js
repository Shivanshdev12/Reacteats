import React from "react";
import MealItemForm from "../MealItemForm";
import "./MealItems.css";

const MealItems = (props) => {
  const price = props.price.toFixed(2);
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">${price}</div>
      </div>
      <MealItemForm id={props.id} item={props} />
    </li>
  );
};

export default MealItems;
