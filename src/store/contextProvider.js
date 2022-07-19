import React from "react";
import CartContext from "./cart-context";

const addToCartHandler = (item) => {};

const removefromCartHandler = (id) => {};

const cartContext = {
  items: [],
  total: 0,
  addItem: addToCartHandler,
  removeItem: removefromCartHandler,
};

const contextProvider = (props) => {
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default contextProvider;
