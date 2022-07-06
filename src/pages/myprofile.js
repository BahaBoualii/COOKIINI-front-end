import React, { useState } from "react";
import Footer from "../footer";
import "./plans12.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import PricingCard from "./pricingcard";
import Meals from "./meals";
import { Link } from "react-router-dom";
import { Container, Row, Col, InputGroup, Form } from "react-bootstrap";

/*
    Fetch data from the DB 
    Everything is Static
*/

const MyProfile = (props) => {
  const [userNewPassBox1, setUserNewPassBox1] = useState("password");
  const [userNewPassBox2, setUserNewPassBox2] = useState("password");

  const userPhoneNumber = "55 555 555";
  const userEmail = "foulenbenfoulen@gmail.com";
  const userBirthDay = "14 - 03 - 2001";
  return (
    <>
      <div className="mx-5 mb-5">
        <Container
          className="w-75 mt-5 px-5 py-4"
          style={{
            backgroundColor: "rgb(255, 249, 240)",
            borderRadius: "15px",
          }}
        >
          <h1 className="fw-bold mb-5 display-5">My Profile</h1>
          <Row className="text-xs-center">
            <Col className="mx-lg-5">
              <p className="fw-bold fs-4 mt-3" style={{ color: "#019267" }}>
                First Name
              </p>
              <p className="fs-5">Foulen</p>
              <p className="fw-bold fs-4" style={{ color: "#019267" }}>
                Last Name
              </p>
              <p className="fs-5">Ben Foulen</p>
              <p className="fw-bold fs-4" style={{ color: "#019267" }}>
                Email address
              </p>
              <input
                size="25"
                className="bg-transparent"
                defaultValue={"userEmailAddress@gmail.com"}
                style={{ outline: "none", border: "none" }}
              ></input>
              <span className="ms-lg-2 ps-2 d-none d-xl-inline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </span>
              <hr className="w-75" />
            </Col>
            <Col className="text-start mt-3 ms-lg-5">
            <p className="fw-bold fs-4" style={{ color: "#019267" }}>
                New password
              </p>
              <input
                placeholder="New password"
                type={userNewPassBox2}
                className="bg-transparent"
                style={{ outline: "none", border: "none" }}
                size="20"
              ></input>
              <span className="ms-lg-5 ms-sm-1 ps-lg-3 ps-sm-1 d-none d-xl-inline">
                <svg
                  onClick={() => {
                    userNewPassBox1 === "password"
                      ? setUserNewPassBox1("text")
                      : setUserNewPassBox1("password");
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-eye"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </span>
              <hr className="w-75" />
              <p className="fw-bold fs-4" style={{ color: "#019267" }}>
                Confirm new password
              </p>
              <input
                placeholder="Confirm new password"
                type={userNewPassBox2}
                className="bg-transparent"
                style={{ outline: "none", border: "none" }}
                size="20"
              ></input>
              <span className="ms-lg-5 ms-sm-1 ps-lg-3 ps-sm-1 d-none d-xl-inline">
                <svg
                  onClick={() => {
                    userNewPassBox2 === "password"
                      ? setUserNewPassBox2("text")
                      : setUserNewPassBox2("password");
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-eye"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </span>
              <hr className="w-75" />
            </Col>
          </Row>
          <div
            className="text-center mt-5 me-5"
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Button
              variant="secondary"
              className="px-4 py-2 btn btn-transparent bg-transparent fw-bold text-center fs-3 "
              style={{
                color: "#019267",
                border: "solid",
                borderRadius: "20px",
              }}
              size="md "
            >
              Save <br />
              Changes
            </Button>
          </div>
        </Container>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default MyProfile;
