import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import "./HeaderCartButton.css";

const HeaderCartButton = (props) => {
  const ctxobj = useContext(CartContext);
  let quantity = 0;
  ctxobj.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });

  return (
    <button className="button-header" onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
