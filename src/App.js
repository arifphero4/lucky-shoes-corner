import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="App">
      <h1>Lucky Shoes Corner</h1>
    </div>
  );
}

export default App;
