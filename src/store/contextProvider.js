import React, { useState } from "react";
import CartContext from "./cart-context";

const ContextProvider = (props) => {
  const [items, updateItems] = useState([]);
  const addToCartHandler = (item) => {
    updateItems([...items, item]);
  };

  const removefromCartHandler = (id) => {};

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addToCartHandler,
    removeItem: removefromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
