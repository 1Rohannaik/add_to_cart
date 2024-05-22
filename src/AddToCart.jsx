import React from "react";

const AddToCart = ({ cart, setCart }) => {
  const handleRemove = (item) => {
    setCart(cart.filter((product) => product.id !== item.id));
  };

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt={item.title} />
          <p>{item.price}</p>
          <button
            onClick={() => handleRemove(item)}
            className="bg-slate-500 text-white h-10 w-24 rounded-full"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default AddToCart;
