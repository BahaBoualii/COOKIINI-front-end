import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FormControl,
  FormGroup,
  ControlLabel,
  HelpBlock,
  Checkbox,
  Radio,
  Button,
  Form,
} from "react-bootstrap";
import facebookLogo from "../assets/facebook (1) 2.png";
import twitterLogo from "../assets/twitter (1) 1.png";
import gmailLogo from "../assets/google 1.png";

const Signup = () => {
  // Depends on the choice of the user
  const isBrowsing = false;
  return (
    <div className="mt-5 text-center">
      <Container
        fluid="md"
        style={{ backgroundColor: "#FFF9F0", borderRadius: "15px" }}
      >
        <Row>
          <Col className="text-center mx-5">
            <p className="fw-bold fs-1 mt-3" style={{ color: "#019267" }}>
              Create your account
            </p>
            <Form
              className="text-start pe-5 pb-2"
              style={{ borderRight: "solid" }}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fs-5">Username</Form.Label>
                <Form.Control
                  style={{ backgroundColor: "rgba(1, 146, 103, 0.1)" }}
                  type="text"
                  placeholder="Enter your username"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fs-5">Email</Form.Label>
                <Form.Control
                  style={{ backgroundColor: "rgba(1, 146, 103, 0.1)" }}
                  type="email"
                  placeholder="Enter your email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fs-5">Password</Form.Label>
                <Form.Control
                  style={{ backgroundColor: "rgba(1, 146, 103, 0.1)" }}
                  type="password"
                  placeholder="Type your password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fs-5">Confirm your password</Form.Label>
                <Form.Control
                  style={{ backgroundColor: "rgba(1, 146, 103, 0.1)" }}
                  type="password"
                  placeholder="Retype your password"
                />
              </Form.Group>
            </Form>
            <div className="text-center">
              <Button
                variant="secondary"
                style={{
                  backgroundColor: "#019267",
                  color: "eee",
                  borderRadius: "15px",
                }}
                className="mb-3 fs-5 mt-2"
                type="submit"
              >
                Sign up
              </Button>
            </div>
          </Col>
          <Col
            className="text-center fw-bold fs-1 mt-sm-5 mt-xs-1"
            style={{ color: "#019267" }}
          >
            <div className="mt-4"></div>
            {isBrowsing && (
              <>
                <p className="mt-5 pt-5 pe-3">Sign up with</p>

                <Row fluid>
                  <Col className="text-md-end text-lg-end text-sm-center">
                    <img src={facebookLogo} alt="signUpWithFacebook" />
                  </Col>
                  <Col>
                    <img src={twitterLogo} alt="signUpWithTwitter" />
                  </Col>
                  <Col className="text-md-start text-lg-start text-sm-center">
                    <img src={gmailLogo} alt="signUpWithGmail" />
                  </Col>
                </Row>
              </>
            )}
            {!isBrowsing && (
              <>
                <p className="fs-5 fw-normal text-dark text-start me-">
                  Did you have previous simillar experiences ?
                </p>
                <div
                  className="text-start fs-5 fw-normal text-dark"
                  style={{ display: "flex" }}
                >
                  <Form.Check className="me-lg-3 me-md-3 me-sm-4" type="radio" id="hasPrevExperience" label="Yes" />
                  <Form.Check
                    type="radio"
                    id="hasNotPrevExperience"
                    label="No"
                  />
                </div>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
