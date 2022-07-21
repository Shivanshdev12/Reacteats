import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // const updated = state.items.concat(action.item);
    const newAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingIndex = state.items.findIndex((item) => item.id === action.item.id);
    const existingItem = state.items[existingIndex];
    let updatedItems;
    if (existingItem != undefined) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: newAmount,
    };
  } else if (action.type === "REMOVE") {
    const newAmount = state.totalAmount - action.item.price;
    const existingIndex = state.items.findIndex((item) => item.id === action.item.id);
    const existingItem = state.items[existingIndex];
    let updatedItems, amount;
    if (existingItem != undefined) {
      amount = existingItem.amount - 1;
      if (amount < 0 || amount == 0) {
        amount = 0;
        updatedItems = state.items.filter((item) => item.id != action.item.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingIndex] = updatedItem;
      }
    }
    return {
      items: updatedItems,
      totalAmount: newAmount,
    };
  }
  return defaultCartState;
};

const ContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
  const addToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removefromCartHandler = (item) => {
    dispatchCartAction({ type: "REMOVE", item: item });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addToCartHandler,
    removeItem: removefromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
  );
};

export default ContextProvider;
