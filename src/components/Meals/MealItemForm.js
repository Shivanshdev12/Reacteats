import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import "./MealItemForm.css";
import "./Input.css";

const MealItemForm = (props) => {
  const ctxobj = useContext(CartContext);

  const addtoCart = (e) => {
    e.preventDefault();

    const amount = document.getElementById("amount_" + props.id).value;
    ctxobj.addItem({ ...props.item, amount: Number(amount) });
    console.log(ctxobj);
  };
  return (
    <form className="form">
      <div className="input">
        <label htmlFor={props.id}>Amount</label>
        <input
          id={"amount_" + props.id}
          type="number"
          min="1"
          max="5"
          defaultValue="1"
        />
      </div>
      <button className="button" onClick={addtoCart}>
        +Add
      </button>
    </form>
  );
};

export default MealItemForm;
