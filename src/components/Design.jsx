import React, { useState } from "react";
import "../styles/Design.css";
import { IoIosStar } from "react-icons/io";
const Design = ({ img, name, description, price, rating, bgColor }) => {
  const [ratingg, setRating] = useState(rating);

  return (
    <>
      <div className="main-container">
        <div className="img-container">
          <img src={img} height={140}></img>
        </div>
        <div className="name-container">
          <h5>{name}</h5>
        </div>
        <div className="description-container">
          <p>{description}</p>
        </div>
        <div className="price-container">
          <h5>${price}</h5>
        </div>
        <div className="rating-container">
          {[...Array(5)].map((star, index) => {
            const currentrate = index + 1;
            return (
              <>
                <IoIosStar
                  color={currentrate <= ratingg ? "rgb(252,175,65)" : "grey"}
                />
              </>
            );
          })}
        </div>
        <br />
        <br />
        <div className="cart-container" style={{ backgroundColor: bgColor }}>
          <p>ADD TO CART</p>
        </div>
      </div>
    </>
  );
};

export default Design;
