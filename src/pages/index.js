import React from "react";
import Footer from "../footer";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Container, Row, Col, Button } from "react-bootstrap";
import CookiiniLogo from "../assets/cookiini logo.png";
import Cookiini from "../assets/Cookiini.png";
import Slogan from "../assets/Be your own Chef.png";
import Carousel from "react-multi-carousel";
import MealTempate from "./mealTempalte";
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from "react-player";
import BrowseMealIcon from "../assets/image 1.png";
import DeliverMealIcon from "../assets/Delivery 2.png";
import YoungChef from "../assets/youngchef.png";
import MakingMealIcon from "../assets/image 2.png";
import WhatAreWe from "../assets/image 3.png";

const Home = () => {
  const screenHeight = window.screen.availHeight + "px";
  return (
    <>
      <Container
        className="mt-md-5 mb-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Row>
          <Col>
            <img className="img-fluid" src={CookiiniLogo} alt="cookiini logo" />
          </Col>
          <Col className="mt-5 pt-5 d-none d-xl-block">
            <div className="mt-5 pt-5 pe-5">
              <img
                src={Cookiini}
                className="img-fluid mt-5 pt-5"
                alt="cookiini"
              />
              <img src={Slogan} className="img-fluid mt-2" alt="Slogan of Cookiini" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row style={{ display: "flex" }} className="text-xxs-center mx-2  d-sm-block d-md-flex">
          <Col
            className="fs-2 fs-sm-1"
            sm={12}
            lg={3}
            md={12}
          >
            <p className="w-100">
              Explore our plans. Our recipes are healthy, easy to make and they
              are{" "}
              <span className="fw-bolder fs-1" style={{ color: "#019267" }}>
                FRESH
              </span>
              .
            </p>
          </Col>
          <Col md={12} lg={9} sm={12} className="justify-content-end">
            <Carousel 
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
                  partialVisibilityGutter: 30,
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
              <MealTempate />
              <MealTempate />
              <MealTempate />

              <MealTempate />
              <MealTempate />
            </Carousel>
          </Col>
        </Row>
      </Container>
      <div
        className="w-100"
        style={{
          backgroundColor: "#FFF9F0",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Container>
          <Row className="py-4 ">
            <Col className="ms-3 fs-1 w-50" md={8} lg={8}>
              We made it super easy for you to plan the meals for your week with
              our customizable options.
            </Col>
            <Col style={{}} className="text-center me-sm-5 ms-5 mt-3">
              <Button
                variant="secondary"
                size="lg"
                className="bg-transparent fs-1 fw-bolder shadow-md my-3 py-3 px-3"
                style={{
                  color: "rgb(1, 146, 103)",
                  border: "solid",
                  borderRadius: "15px",
                }}
              >
                Try our plans
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row className="mt-5">
            <Col className="mt-5" style={{ display: "inline-flex" }}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ulhRORJpuBM"
                height="410px"
                width="300px"
                style={{ marginTop: "10px" }}
              ></ReactPlayer>
              <div>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=ulhRORJpuBM"
                  height="200px"
                  width="250px"
                  style={{ margin: "10px" }}
                ></ReactPlayer>
                <ReactPlayer
                  style={{ margin: "10px" }}
                  url="https://www.youtube.com/watch?v=ulhRORJpuBM"
                  height="200px"
                  width="250px"
                ></ReactPlayer>
              </div>
            </Col>
            <Col className="display-3 my-5 ms-lg-5">
              Get full{" "}
              <span
                className=""
                style={{ color: "#019267", fontWeight: "bold" }}
              >
                GUIDANCE
              </span>{" "}
              while making your meal through light videos from our dear Chefs.
            </Col>
          </Row>
        </Container>
      </div>
      <div className="my-5 px-5" style={{ backgroundColor: "#FFF9F0" }}>
        <Container className="text-center">
          <p
            style={{ color: "#019267" }}
            className="fw-bolder fs-1 text-center"
          >
            How to ?
          </p>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Col>
              <img
                src={BrowseMealIcon}
                style={{ height: "280px", width: "280px" }}
              />
              <p className="fs-4">Browse our different delicous meals</p>
            </Col>
            <Col>
              <img
                src={DeliverMealIcon}
                style={{ height: "280px", width: "280px" }}
              />
              <p className="fs-4">Get your meal package within 48 hours</p>
            </Col>
            <Col className="text-center">
              <img
                src={MakingMealIcon}
                style={{ height: "280px", width: "280px" }}
              />
              <p className="fs-4">Enjoy making your meal</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            {" "}
            <Col className="fs-1 my-5 ms-lg-5">
              <p style={{ width: "13em" }}>
                You have some hidden talent and you want to sell your recipes ?
                We got you, just create your{" "}
                <span className="fw-bolder fs-1" style={{ color: "#019267" }}>
                  CHEF
                </span>{" "}
                account and kick start your journey with us.
              </p>
            </Col>
            <Col
              className="d-none d-xxl-block"
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <img
                src={YoungChef}
                alt="chefPicture"
                className="me-5 mb-5"
                style={{ height: "500px", width: "500px", marginTop: "-30px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pb-5" style={{ backgroundColor: "#FFF9F0" }}>
        <Container className="text-center pt-3">
          <p
            style={{ color: "#019267" }}
            className="fw-bolder fs-1 text-center"
          >
            What are we ?
          </p>
          <Row>
            <Col className="me-3 d-none d-xl-block" md={3} lg={3} xl={3}>
              <img
                src={WhatAreWe}
                className="img-fluid"
                style={{ height: "350px", width: "350px", marginTop: "-120px" }}
              />
            </Col>
            <Col>
              <p className="display-5 text-start">
                <b>COOKIINI</b> is Tunisia's first high-quality food service
                platform that delivers pre-portioned fresh ingredients and
                authentic recipes to make tasty and healthy food at home.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Home;
