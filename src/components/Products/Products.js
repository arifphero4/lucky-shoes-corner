import "./Products.css";
import Product from "../Product/Product";

function Products({ products, addtocart }) {
  return (
    <div className="cards">
      {products.length === 0 && <div>No Products Found Yet</div>}
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addtocart={addtocart}
        ></Product>
      ))}
    </div>
  );
}

export default Products;
