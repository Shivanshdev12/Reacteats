import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import "./Cart.css";

const Cart = (props) => {
  const ctxobj = useContext(CartContext);

  const CartItem = (
    <ul className="cart-items">
      {ctxobj.items.map((item) => (
        <div key={item.id}>
          <li>
            {item.name} {item.quantity}
          </li>
          <li></li>
        </div>
      ))}
    </ul>
  );
  let totalAmount = 0;
  ctxobj.items.forEach((item) => {
    totalAmount = totalAmount + Number(item.quantity * item.price);
  });
  totalAmount = totalAmount.toFixed(2);
  return (
    <Modal>
      {CartItem}
      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
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
