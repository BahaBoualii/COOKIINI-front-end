import React, { useState } from "react";
import Footer from "../footer";
import Popover from "react-bootstrap/Popover";
import Overlay from "react-bootstrap/Overlay";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import PricingCard from "./pricingcard";
import Meals from "./meals";
import { Link } from "react-router-dom";
import { Container, Row, Col, InputGroup, Form } from "react-bootstrap";
import MealTempate from "./mealTempalte";
import foodImage from "../assets/meal.png";
import Image from "react-bootstrap/Image";
import { Rating } from "react-simple-star-rating";
import caloriesOnHover from "../assets/caloriesOnHover.png";
import ratingOnHover from "../assets/ratingOnHover.png";
import timeOnHover from "../assets/timeOnHover.png";
import Chef from "../assets/chef.png";
import ReactPlayer from "react-player";
import fullIcon from "../assets/star-fill.svg";
import deliveredIngredientIcon from "../assets/deliveredIngredients.png";
import homeIngredientIcon from "../assets/homeIngredients.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LeftArrows from "../assets/arrow-right 1.png";
import RightArrows from "../assets/arrow-right 2.png";
import rateIcon from "../assets/rate.png";

/*
    Fetch data from the DB to fill this object
    Everything is static
*/

const MealObject = {
  mealName: "Delicious Food",
  id: "1",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  timing: 10,
  calories: 550,
  chef: "Foulen Ben Foulen",
  carbohydrates: 440,
  protein: 320,
  fats: 550,
  vit_miner: 540,
  image: "",
  ingredients: [
    "ingredient 1",
    "ingredient 2",
    "ingredient 3",
    "ingredient 4",
    "ingredient 5",
  ],
  atHomeIngredients: [
    "ingredient 1",
    "ingredient 2",
    "ingredient 3",
    "ingredient 4",
    "ingredient 5",
  ],
  video: "",
  rating: 4.5,
  categories: ["category 1", "category 2", "category 3", "category 4"],
  purshasesNumber: 100,
  priceForCouple: 49.99,
};

const MealDetails = () => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Rate our meal</Popover.Header>
      <Popover.Body>
        <Rating allowHalfIcon="true" className="pb-3 mpe-1" size="25px" />
      </Popover.Body>
    </Popover>
  );

  const categoriesList = MealObject.categories.map((mealCategory) => (
    <span
      className="rounded-pill me-1 mb-1 pb-1 btn"
      style={{
        color: "black",
        fontSize: "9px",
        borderColor: "black",
        backgroundColor: "rgba(1, 146, 103, 0.1)",
      }}
    >
      {mealCategory}
    </span>
  ));

  const deliveredIngredients = MealObject.ingredients.map(
    (deliveredIngredient) => (
      <li>
        <span>
          <img
            alt="deliveredIngredients"
            src={deliveredIngredientIcon}
            className="me-1 text-start"
            style={{ width: "20px" }}
          />{" "}
          {deliveredIngredient}
        </span>
      </li>
    )
  );

  const atHomeIngredients = MealObject.atHomeIngredients.map(
    (atHomeIngredient) => (
      <li>
        <span>
          <img
            alt="homeIngrendients"
            src={homeIngredientIcon}
            className="me-1 text-start"
            style={{ width: "20px" }}
          />{" "}
          {atHomeIngredient}
        </span>
      </li>
    )
  );

  return (
    <>
      <Container
        className="mt-xl-5 px-xxl-5 py-sm-3 py-xl-5 px-xl-5 w-75 mb-5"
        style={{ backgroundColor: "#FFF9F0", borderRadius: "15px" }}
      >
        <Row>
          <Col
            md={3}
            lg={3}
            sm={3}
            xxl={3}
            className="d-none d-xxl-block text-center me-4"
          >
            <Image
              src={foodImage}
              style={{ height: "300px", weight: "300px" }}
            />
          </Col>
          <Col>
            <ul type="none">
              <li className="fw-bold fs-2 " style={{ color: "#019267" }}>
                {MealObject.mealName}
              </li>
              <Rating
                initialValue={MealObject.rating.toString()}
                className="pb-3 mpe-1"
                readonly="true"
                size="35px"
              />
              <li className="mt-3 fw-bolder fs-5">
                <span>
                  <img
                    src={timeOnHover}
                    alt="time"
                    className="h-25 me-2"
                    style={{ width: "7%" }}
                  />
                </span>
                {MealObject.timing} min
              </li>
              <li className="mt-2 fw-bolder fs-5">
                <span>
                  <img
                    alt="calories"
                    src={caloriesOnHover}
                    className="h-25 me-2"
                    style={{ width: "7%" }}
                  />
                </span>
                {MealObject.calories} Kcal
              </li>
              <li className="mt-2 fw-bolder" style={{ fontSize: "16px" }}>
                <span>
                  <img
                    alt="chef"
                    src={Chef}
                    className="h-25 py-1 me-2"
                    style={{ marginLeft: "0px", width: "7%" }}
                  />
                </span>
                {MealObject.chef}{" "}
              </li>
              <li className="mt-5">{categoriesList}</li>
            </ul>
          </Col>
          <Col className="text-end">
            <Button className="rounded-pill bg-dark fw-bold">
              Add to basket{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-basket"
                viewBox="0 0 16 16"
              >
                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
              </svg>
            </Button>
            <br />
            <Button
              variant="secondary"
              className="rounded-pill fw-bold mt-1 px-3"
              style={{ backgroundColor: "rgba(1, 146, 103, 0.5)" }}
            >
              Share
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="20"
                fill="currentColor"
                class="bi bi-reply"
                className="ms-1"
                viewBox="0 0 16 16"
                style={{ transform: "scaleX(-1)", marginBottom: "2px" }}
              >
                <path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z" />
              </svg>
            </Button>
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <span className="ms-1">
                <img
                  src={rateIcon}
                  className="mt-1"
                  style={{ width: "10%" }}
                  alt="rate"
                />
              </span>
            </OverlayTrigger>
          </Col>
        </Row>
        <p className="fw-bold fs-2 mt-5" style={{ color: "#019267" }}>
          Meal description :
        </p>
        <p className="fs-4">{MealObject.description}</p>
        <p className="fw-bold fs-2 mt-5" style={{ color: "#019267" }}>
          Detailed nutrients :
        </p>
        <Container>
          <Row>
            <Col>
              <ul className="ps-2" type="none">
                <li className="fs-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-card-list"
                    viewBox="0 0 16 16"
                    className="me-2"
                  >
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                    <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                  </svg>
                  Carbohydrates: {MealObject.carbohydrates}g
                </li>
                <li className="fs-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-card-list"
                    viewBox="0 0 16 16"
                    className="me-2"
                  >
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                    <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                  </svg>
                  Protein: {MealObject.protein}g
                </li>
                <li className="fs-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-card-list"
                    viewBox="0 0 16 16"
                    className="me-2"
                  >
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                    <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                  </svg>
                  Fats: {MealObject.fats}g
                </li>
                <li className="fs-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-card-list"
                    viewBox="0 0 16 16"
                    className="me-2"
                  >
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                    <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                  </svg>
                  Vitamins & Minerals: {MealObject.vit_miner}g
                </li>
              </ul>
              <div className=" mt-5" style={{ display: "inline-flex" }}>
                <p
                  className="fw-bold fs-2"
                  style={{
                    color: "#019267",
                    width: "6em",
                    display: "inline-flex",
                  }}
                >
                  Some of the ingredients that will be delivered :
                </p>
                <ul type="none" className="mt-5">
                  {deliveredIngredients}
                </ul>
              </div>
              <br />
              <div className=" mt-5" style={{ display: "inline-flex" }}>
                <p
                  className="fw-bold fs-2"
                  style={{
                    color: "#019267",
                    width: "6em",
                    display: "inline-flex",
                  }}
                >
                  Ingredients you need to at home :
                </p>
                <ul type="none" className="mt-2">
                  {atHomeIngredients}
                </ul>
              </div>
            </Col>
            <Col>
              <p
                className="fw-bold fs-2"
                style={{
                  color: "#019267",
                  width: "14em",
                  display: "inline-flex",
                }}
              >
                Take a look , our Chef is ready to help you make this meal
              </p>
              {/* Video url ===  MealObjet.video */}
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ulhRORJpuBM"
                height="600px"
                width="400px"
              ></ReactPlayer>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container
        className="text-center my-5 w-75"
        style={{
          display: "flex",
          alignContent: "space-evenly",
          backgroundColor: "#FFF9F0",
        }}
      >
        <Carousel
          className="w-100 mt-5"
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <MealTempate className="mx-2" />
          <MealTempate className="mx-2" />
          <MealTempate className="mx-2" />
          <MealTempate className="mx-2" />
          <MealTempate className="mx-2" />
        </Carousel>
      </Container>
      <Footer />
    </>
  );
};
export default MealDetails;
