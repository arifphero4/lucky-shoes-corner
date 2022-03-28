import "./Cart.css";
import CartItem from "../CartItem/CartItem";

function Cart({ cart, random, emptyCart }) {
  return (
    <div className="cart">
      <h3 className="title">Selected Products</h3>
      <div className="items">
        {cart.length === 0 && <p className="error">No Items In Cart</p>}
        {cart.map((item) => (
          <CartItem key={item.id} item={item}></CartItem>
        ))}
      </div>
      <div className="cart-button">
        <button className="button" onClick={random}>
          Select the Best Product
        </button>
        <button className="button" onClick={emptyCart}>
          Reset Selections
        </button>
      </div>
    </div>
  );
}

export default Cart;
