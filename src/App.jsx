import { useState } from "react";
import "./App.css";
import Home from "./assets/Home";
import Header from "./Header";
import AddToCart from "./AddToCart";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (product.id === item.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  return (
    <>
      <Header size={cart.length} setShow={setShow} />
      {show ? (
        <Home handleClick={handleClick}/>
      ) : (
        <AddToCart cart={cart} setCart={setCart} />
      )}
      {warning && <div className=" absolute h-10 bg-red-700 text-white">Item is already added to your cart</div>}
    </>
  );
}

export default App;
