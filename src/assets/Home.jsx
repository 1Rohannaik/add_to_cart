import React from "react";
import data from "./data";
import Cart from "./Cart";

const Home = ({ handleClick }) => {
  return (
    <div>
      {data.map((item) => {
        const { id, title, price, img, amount } = item;
        return (
          <Cart
            id={id}
            title={title}
            price={price}
            img={img}
            amount={amount}
            key={id}
            item={item}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default Home;
