import React from "react";
import Modal from "../UI/Modal";
import "./Cart.css";

const Cart = (props) => {
  const CartItem = (
    <ul className="cart-items">
      {[
        {
          id: "m1",
          name: "Sushi",
          description: "Finest fish and veggies",
          price: 22.99,
        },
      ].map((item) => (
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
