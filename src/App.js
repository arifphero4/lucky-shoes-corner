import "./App.css";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function addtocart(product) {
    const exists = cart.find((x) => x.id === product.id);
    if (cart.length === 4) {
      return;
    }
    if (!exists) {
      setCart([product, ...cart]);
    }
  }
  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;

  function random() {
    const cartLen = cart.length;
    if (cartLen > 0) {
      setCart([cart[randomNumber(0, cartLen)]]);
    }
  }

  function emptyCart() {
    setCart([]);
  }

  return (
    <>
      <Header></Header>
      <div className="row">
        <div className="col">
          <Products products={products} addtocart={addtocart}></Products>
        </div>
        <div className="col">
          <Cart cart={cart} random={random} emptyCart={emptyCart}></Cart>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
