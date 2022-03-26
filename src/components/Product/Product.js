import "./Product.css";
import "boxicons";

function Product({ product, addtocart }) {
  const { id, name, img, price } = product;

  return (
    <div className="card" id={id}>
      <div
        className="card-img"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <div className="card-info">
        <h3>{name}</h3>
        <p>${price}</p>
        <button className="add" onClick={() => addtocart(product)}>
          <span className="me-1">Add to Cart</span>{" "}
          <box-icon name="cart-add"></box-icon>
        </button>
      </div>
    </div>
  );
}

export default Product;
