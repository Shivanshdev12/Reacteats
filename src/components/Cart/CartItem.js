import "./CartItem.css";

const CartItem = (props) => {
  return (
    <li className="cart-item_dup">
      <div>
        <h2>{props.name}</h2>
        <div className="summary_dup">
          <span className="price_dup">{props.price}</span>
          <span className="amount_dup">x {props.amount}</span>
        </div>
      </div>
      <div className="actions_dup">
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
