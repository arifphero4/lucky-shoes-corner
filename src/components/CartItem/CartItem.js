import "./CartItem.css";
import "boxicons";

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <p>{item.name}</p>
    </div>
  );
}

export default CartItem;
