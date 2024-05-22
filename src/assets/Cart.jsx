import React from "react";

const Cart = ({ id, title, price, img, amount, handleClick, item }) => {
  return (
    <div className="grid">
      <img src={img} alt={title} />
      <p>{title}</p>
      <p>{price}</p>
      <p>{amount}</p>
      <button
        onClick={() => handleClick(item)}
        className="bg-slate-500 text-white h-10 w-24 rounded-full"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Cart;
