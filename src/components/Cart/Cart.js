import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import "./Cart.css";

const Cart = (props) => {
  const ctxobj = useContext(CartContext);
  console.log(ctxobj);
  const hasItems = ctxobj.items.length > 0;

  const removeHandler = (item) => {
    ctxobj.removeItem(item);
  };
  const addHandler = (item) => {
    ctxobj.addItem({ ...item, amount: 1 });
  };

  const cartItem = (
    <ul className="cart-items">
      {ctxobj.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeHandler.bind(null, item)}
          onAdd={addHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItem}
      <div className="total">
        <span>Total Amount</span>
        <span>{ctxobj.totalAmount.toFixed(2)}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.closeCart}>
          Close
        </button>
        {hasItems && <button className="button">Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
