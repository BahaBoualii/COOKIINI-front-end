import React, { useState } from "react";
import Footer from "../footer";
import "./plans12.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import PricingCard from "./pricingcard";
import Meals from './meals';
import { Link } from 'react-router-dom';


const Plans = () => {
  const [nbPeople, setNbPeople] = useState();
  const [nbMeals, setNbMeals] = useState();

  const nbPeopleHandler = (a) => {
    setNbPeople(a);
    console.log(nbPeople);
  };

  const nbMealsHandler = (b) => {
    setNbMeals(b);
    console.log(nbMeals);
  };

  return (
    <>
      <div id="global">
        <br />
        <div id="CustomizationWrapper">
          <h1 id="title">Customize your plan</h1>
          <div id="DetailsWrapper">
            <div id="OneDetailWrapper">
              <div id="DetailLabel">Number of people</div>
              <div id="DetailNumbers">
                <button
                  className="CustomButtons"
                  onClick={() => {
                    nbPeopleHandler(2);
                  }}
                >
                  <img
                    src={require("../assets/number-2.png")}
                    alt="two"
                    width={"30px"}
                    height={"30px"}
                  />
                </button>
                <button
                  className="CustomButtons"
                  onClick={() => {
                    nbPeopleHandler(4);
                  }}
                >
                  <img
                    src={require("../assets/number-four.png")}
                    alt="four"
                    width={"30px"}
                    height={"30px"}
                  />
                </button>
                <button
                  className="CustomButtons"
                  onClick={() => {
                    nbPeopleHandler(6);
                  }}
                >
                  <img
                    src={require("../assets/six.png")}
                    alt="six"
                    width={"30px"}
                    height={"30px"}
                  />
                </button>
              </div>
            </div>
            <div id="OneDetailWrapper">
              <div id="DetailLabel">Number of meals per week</div>
              <div id="DetailNumbers">
                <button
                  className="CustomButtons"
                  onClick={() => {
                    nbMealsHandler(2);
                  }}
                >
                  <img
                    src={require("../assets/number-2.png")}
                    alt="two"
                    width={"30px"}
                    height={"30px"}
                  />
                </button>
                <button
                  className="CustomButtons"
                  onClick={() => {
                    nbMealsHandler(3);
                  }}
                >
                  <img
                    src={require("../assets/number-3.png")}
                    alt="three"
                    width={"30px"}
                    height={"30px"}
                  />
                </button>
                <button
                  className="CustomButtons"
                  onClick={() => {
                    nbMealsHandler(4);
                  }}
                >
                  <img
                    src={require("../assets/number-four.png")}
                    alt="four"
                    width={"30px"}
                    height={"30px"}
                  />
                </button>
                <button
                  className="CustomButtons"
                  onClick={() => {
                    nbMealsHandler(5);
                  }}
                >
                  <img
                    src={require("../assets/number-5.png")}
                    alt="five"
                    width={"30px"}
                    height={"30px"}
                  />
                </button>
                <button
                  className="CustomButtons"
                  onClick={() => {
                    nbMealsHandler(6);
                  }}
                >
                  <img
                    src={require("../assets/six.png")}
                    alt="six"
                    width={"30px"}
                    height={"30px"}
                  />
                </button>
              </div>
            </div>
          </div>
          <PricingCard people={nbPeople} meals={nbMeals}></PricingCard>
          <div id="BottomSection">
            <div id="Reder">
              <a href="">
                <img
                  src={require("../assets/right.png")}
                  width={"50px"}
                  height={"50px"}
                ></img>
              </a>
            </div>
            <div>
              <Link to="/meals">
                <a id="shop" href="">
                  Want to shop without a plan ? Browse our Meals
                </a>
              </Link>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
};

export default Plans;
