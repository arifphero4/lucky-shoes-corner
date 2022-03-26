import "./Cart.css";
import CartItem from "../CartItem/CartItem";

function Cart({ procar, random }) {
  return (
    <div className="cart">
      <h3 className="title">Selected Products</h3>
      <div className="items">
        {procar.length === 0 && <p>No Items In Cart</p>}
        {procar.map((item) => (
          <CartItem key={item._id} item={item}></CartItem>
        ))}
      </div>
      <div className="cart-button">
        <button className="button" onClick={random}>
          Select the Best Product
        </button>
        <button className="button">Reset Selections</button>
      </div>
    </div>
  );
}

export default Cart;
