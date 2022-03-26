import "./App.css";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [procar, setprocar] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function addtocart(product) {
    const exists = procar.find((x) => x._id === product._id);
    if (procar.length === 4) {
      return;
    }
    if (!exists) {
      setprocar([product, ...procar]);
    }
  }

  function random() {
    const cartLen = procar.length;
    if (cartLen > 0) {
      setprocar([procar[2]]);
    }
  }

  return (
    <div className="row">
      <div className="col">
        <Products products={products} addtocart={addtocart}></Products>
      </div>
      <div className="col">
        <Cart procar={procar} random={random}></Cart>
      </div>
    </div>
  );
}

export default App;
