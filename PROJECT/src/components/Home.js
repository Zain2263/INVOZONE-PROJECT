import React from "react";
import "../css/home.css";
import pic from '../pic1.png'
import pic2 from '../pic2.png'
import { NavLink } from "react-router-dom";

const Home = ({ account }) => {
  return (
    <div className="container">
      <div id="login-type-container">
        <h1 style={{ color: "Yellow", position: "fixed", right: 20, top: 20 }}>
          CONNECTED
        </h1>
        <br />
        <div id="login-type">
          <h1 id="greetings">Fake Product Identification !</h1>
          <h1 id="subtitle-txt">
            Select your catagory : 
          </h1>
          <div id="options-container">
            <NavLink to="/vendor" className="select-link">
              <div className="options">
                <img
                  src={pic}
                  alt="manufacturer"
                  className="options-image"
                />
                <h1 className="options-image-caption">Manufacturer</h1>
              </div>
            </NavLink>
            <NavLink to="/distributorform" className="select-link">
              <div className="options">
                <img
                  src={pic2}
                  alt="manufacturer"
                  className="options-image"
                />
                <h1 className="options-image-caption">Register Distributor</h1>
              </div>
            </NavLink> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
