import React from "react";
import Design from "./Design.jsx";
import "../styles/Home.css";
import Watch from "../utils/watch.png";
import Shoes from "../utils/shoes.png";
import Shirt from "../utils/shirts.png";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export const Home = () => {
  return (
    <>
      <div className="design-container">
        <AwesomeSlider>
          <div className="template">
            <Design
              img={Watch}
              name={"Rolex"}
              description={
                <>
                  <span>Discover timeless elegance with the Rolex</span>
                  <br />
                  <span>Perfect for any occasion,attending a event.</span>
                </>
              }
              price={60}
              rating={3}
            />
          </div>

          <div className="template">
            <Design
              img={Shoes}
              name={"NIKE AIR MAX"}
              description={
                <>
                  <span>Experience unparalleled comfort and style.</span>
                  <br />
                  <span>Perfect for running, casual outings</span>
                </>
              }
              price={90}
              rating={5}
              bgColor={"#FB552F"}
            />
          </div>
          <div className="template">
            <Design
              img={Shirt}
              name={"DENIM SHIRT"}
              description={
                <>
                  <span>Experience unparalleled comfort and style.</span>
                  <br />
                  <span>Perfect for running, casual outings</span>
                </>
              }
              price={30}
              rating={2}
              bgColor={"#52798A"}
            />
          </div>
        </AwesomeSlider>
      </div>
    </>
  );
};
