import React, { useState } from "react";
import Design from "./Design.jsx";
import "../styles/Home.css";
import Watch from "../utils/watch.png";
import Shoes from "../utils/shoes.png";
import Shirt from "../utils/shirts.png";

export const Home = () => {
  const [state, setState] = useState(0);

  const handleNext = () => {
    setState((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setState((prev) => (prev - 1 + products.length) % products.length);
  };

  const products = [
    {
      img: Watch,
      name: "Rolex",
      description: (
        <>
          <span>Discover timeless elegance with the Rolex</span>
          <br />
          <span>Perfect for any occasion, attending an event.</span>
        </>
      ),
      price: 60,
      rating: 3,
      bgColor: "",
    },
    {
      img: Shoes,
      name: "NIKE AIR MAX",
      description: (
        <>
          <span>Experience unparalleled comfort and style.</span>
          <br />
          <span>Perfect for running, casual outings</span>
        </>
      ),
      price: 90,
      rating: 5,
      bgColor: "#FB552F",
    },
    {
      img: Shirt,
      name: "DENIM SHIRT",
      description: (
        <>
          <span>Experience unparalleled comfort and style.</span>
          <br />
          <span>Perfect for running, casual outings</span>
        </>
      ),
      price: 30,
      rating: 2,
      bgColor: "#52798A",
    },
  ];

  return (
    <div className="design-container">
      {
        <div className="template">
          <Design
            img={products[state].img}
            name={products[state].name}
            description={products[state].description}
            price={products[state].price}
            rating={products[state].rating}
            bgColor={products[state].bgColor}
          />
        </div>
      }
      <button onClick={handleNext}>+</button>
      <button onClick={handlePrev}>-</button>
    </div>
  );
};
