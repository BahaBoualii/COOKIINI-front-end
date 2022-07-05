import React, { useState } from "react";
import Footer from "../footer";
import "./plans12.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import PricingCard from "./pricingcard";
import Meals from "./meals";
import { Link } from "react-router-dom";
import { Container, Row, Col, InputGroup, Form } from "react-bootstrap";

const MealObject = () => {
   id = "1",
   MelaName="Delicious Food",
   description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
   timing = 10,
   calories = 550,
   chef = "Foulen ben foulen",
   carbohydrates = 440,
   protein=320,
   fats=550,
   vit_miner = 540,
   image = "",
   ingredients = ["ingredient 1","ingredient 2","ingredient 3","ingredient 4"],
   atHomeIngredients = ["ingredient 1","ingredient 2","ingredient 3","ingredient 4"],
   video = "",
   rating= 4.5,
   categories = ["category 1","category 2","category 3",,"category 4"],
   purshasesNumber = 100,
   priceForCouple = 49.99,


};

export default MealObject;