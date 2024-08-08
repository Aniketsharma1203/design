import React, { useEffect, useState } from "react";
import Design from "./Design.jsx";
import "../styles/Task4.css";
import Watch from "../utils/watch.png";
import Shoes from "../utils/shoes.png";
import Shirt from "../utils/shirts.png";
import Toy from "../utils/toy.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const Task4 = () => {
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(1);
  const [state3, setState3] = useState(2);

  const handleNext = () => {
    setState((prev) => (prev + 1) % products.length);
    setState2((prev) => (prev + 1) % products.length);
    setState3((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setState((prev) => (prev - 1 + products.length) % products.length);
    setState2((prev) => (prev - 1 + products.length) % products.length);
    setState3((prev) => (prev - 1 + products.length) % products.length);
  };
  useEffect(() => {
    setTimeout(() => setState((prev) => (prev + 1) % products.length), 3000);
    setTimeout(() => setState2((prev) => (prev + 1) % products.length), 3000);
    setTimeout(() => setState3((prev) => (prev + 1) % products.length), 3000);
  });
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
      <div className="template">
        <Design
          img={products[state3].img}
          name={products[state3].name}
          description={products[state3].description}
          price={products[state3].price}
          rating={products[state3].rating}
          bgColor={products[state3].bgColor}
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
