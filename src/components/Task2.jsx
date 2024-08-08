import React, { useState } from "react";
import Design from "./Design.jsx";
import "../styles/Task2.css";
import Watch from "../utils/watch.png";
import Shoes from "../utils/shoes.png";
import Shirt from "../utils/shirts.png";
import Toy from "../utils/toy.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const Task2 = () => {
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(1);

  const handleNext = () => {
    setState((prev) => (prev + 1) % products.length);
    setState2((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setState((prev) => (prev - 1 + products.length) % products.length);
    setState2((prev) => (prev - 1 + products.length) % products.length);
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
      rating: 4,
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
      rating: 3,
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
    {
      img: Toy,
      name: "TOY STORY",
      description: (
        <>
          <span> An object for the child to play with.</span>
          <br />
          <span>Perfect for playing, under age 3.</span>
        </>
      ),
      price: 10,
      rating: 2,
      bgColor: "#3C9911",
    },
  ];

  return (
    <div className="design-container">
      <div className="first-button">
        <button onClick={handleNext}>
          <IoIosArrowBack />
        </button>
      </div>
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
      <div className="template">
        <Design
          img={products[state2].img}
          name={products[state2].name}
          description={products[state2].description}
          price={products[state2].price}
          rating={products[state2].rating}
          bgColor={products[state2].bgColor}
        />
      </div>
      <div className="sec-button">
        <button onClick={handlePrev}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};
