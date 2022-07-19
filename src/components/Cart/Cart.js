import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import "./Cart.css";

const Cart = (props) => {
  const ctxobj = useContext(CartContext);

  const CartItem = (
    <ul className="cart-items">
      {ctxobj.items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {CartItem}
      <div className="total">
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.closeCart}>
          Close
        </button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
