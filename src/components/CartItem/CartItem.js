import "./CartItem.css";
import "boxicons";

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <img className="item-img" src={item.img} alt="" />
      <p>{item.name}</p>
    </div>
  );
}

export default CartItem;
