import React, { useState } from 'react';
import Footer from '../footer';
import './plans12.css';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import PricingCard from './pricingcard';


const Plans = () => {

  const [nbPeople, setNbPeople] = useState();
  const [nbMeals, setNbMeals] = useState();

  const nbPeopleHandler = event => {
    setNbPeople(event.target.value);
    console.log(nbPeople);
  }

  const nbMealsHandler = event => {
    setNbMeals(event.target.value);
    console.log(nbMeals);
  }

  return (
    <>
    <div id="global">
      <br/>
      <div id="CustomizationWrapper">
        <h1 id="title">
          Customize your plan
        </h1>
        <div id="DetailsWrapper">
          <div id = "OneDetailWrapper">
            <div id = "DetailLabel">
              Number of people
            </div>
            <div id = "DetailNumbers">
              <ButtonGroup aria-label="Basic example" id='nbPeople'>
                <Button variant="secondary" value={2} onClick={nbPeopleHandler}>2</Button>
                <Button variant="secondary" value={4} onClick={nbPeopleHandler}>4</Button>
                <Button variant="secondary" value={6} onClick={nbPeopleHandler}>6</Button>
              </ButtonGroup>
            </div>
          </div>
          <div id = "OneDetailWrapper">
            <div id = "DetailLabel">
              Number of meals per week
            </div>
            <div id = "DetailNumbers">
            <ButtonGroup aria-label="Basic example" id='nbMeals'>
                <Button variant="secondary" value={2} onClick={nbMealsHandler}>2</Button>
                <Button variant="secondary" value={3} onClick={nbMealsHandler}>3</Button>
                <Button variant="secondary" value={4} onClick={nbMealsHandler}>4</Button>
                <Button variant="secondary" value={5} onClick={nbMealsHandler}>5</Button>
                <Button variant="secondary" value={6} onClick={nbMealsHandler}>6</Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
        <PricingCard people={nbPeople} meals={nbMeals}>
        </PricingCard>
        <div id = "BottomSection">
            <a id="shop" href=''>Want to shop without a plan ? Browse our Meals</a> 
          <img>

          </img>
        </div>
      </div>
      <br/>
      <br/>
    </div>
    <Footer/>
    </>
  );
};

export default Plans;