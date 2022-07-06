import React, { useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import ConsumerIcon from "../assets/signinasconsumer.png";
import ChefIcon from "../assets/signinaschef.png";

const SignInOptions = () => {
const [firstButtonStyle,setFirstButtonStyle] = useState("bg-transparent text-dark fw-bolder me-lg-5 pt-4 mb-sm-2 mb-xs-2 shadow-lg")
const [secondButtonStyle,setSecondButtonStyle] = useState("bg-transparent text-dark fw-bolder shadow-lg")

  return (
    <div
      className="text-center my-3 w-sm-75"
      style={{
        justifyContent: "center",
        alignContent: "center",
        display: "flex",
      }}
    >
      <div
        className="mx-5 my-5"
        style={{
          width:"55%",
          display: "flex",
          backgroundColor: "#FFF9F0",
          justifyContent: "center",
          alignContent: "center",
          borderRadius: "25px",

        }}
      >
        <Container className="py-5">
          <p
            className="fw-bolder fs-1  mx-5 mb-lg-5 "
            style={{ color: "#019267" }}
          >
            Let us know who you are
          </p>
          <Button
            size="lg"
            className={firstButtonStyle}
            variant="secondary"
            style={{
              border:"solid",
              width: "13em",
              borderRadius: "25px",
            }}
            onClick={() => {
              firstButtonStyle==="bg-transparent text-dark fw-bolder me-lg-5 pt-4 mb-sm-2 mb-xs-2 shadow-lg" ?
              setFirstButtonStyle("bg-transparent text-dark fw-bolder me-lg-5 pt-4 mb-sm-2 mb-xs-2") :
              setFirstButtonStyle("bg-transparent text-dark fw-bolder me-lg-5 pt-4 mb-sm-2 mb-xs-2 shadow-lg")
              
            }}
          >
            <img src={ConsumerIcon} className="my-4" />
            <br />
            I'm just browsing <br />
            the recipes
          </Button>
          <Button
            size="lg"
            className={secondButtonStyle}
            variant="secondary"
            style={{
              width: "13em",
              border:"solid",
              borderRadius: "25px",
            }}
            onClick={() => {
              secondButtonStyle==="bg-transparent text-dark fw-bolder shadow-lg" ?
              setSecondButtonStyle("bg-transparent text-dark fw-bolder ") :
              setSecondButtonStyle("bg-transparent text-dark fw-bolder shadow-lg")
              
            }}
          >
            <img src={ChefIcon} className="my-3" />
            <br />I want to contribute
            <br /> with my own
            <br /> recipes
          </Button>
        </Container>
      </div>
    </div>
  );
};
export default SignInOptions;
