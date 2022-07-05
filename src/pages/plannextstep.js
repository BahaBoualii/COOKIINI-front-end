import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
const PlanNextStep = () => {
  return (
    <div
      className="justify-content-center"
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: "#FFF9F0",
          borderRadius: "25px",
        }}
        className="w-75 text-center my-5 mx-5"
      >
        <Container>
          <Row>
            <Col className="h-75 pb-5 px-5">
              <div className="" style={{ borderRight: "solid" }}>
                <p
                  className="fw-bolder fs-3 mt-5 mx-5 w-75"
                  style={{ color: "#019267" }}
                >
                  Choose the categories you want and we will provide you with
                  our bestsellers
                </p>
                {/* Fetch category names from DB
                Everythin' is static
              */}
                <div className="mt-lg-4">
                  <Button
                    variant="dark"
                    className="bg-transparent text-dark px-2 py-3 me-3 mb-3 fw-bolder"
                    style={{ borderRadius: "10px", border: "solid" }}
                  >
                    our category 1
                  </Button>
                  <Button
                    variant="dark"
                    className="bg-transparent text-dark px-2 py-3 me-3 mb-3  fw-bolder"
                    style={{ borderRadius: "10px", border: "solid" }}
                  >
                    our category 2
                  </Button>
                  <Button
                    variant="dark"
                    className="bg-transparent text-dark px-2 py-3 me-3 mb-3 fw-bolder"
                    style={{ borderRadius: "10px", border: "solid" }}
                  >
                    our category 3
                  </Button>
                  <Button
                    variant="dark"
                    className="bg-transparent text-dark px-2 py-3 me-3 mb-3 fw-bolder"
                    style={{ borderRadius: "10px", border: "solid" }}
                  >
                    our category 4
                  </Button>
                  <Button
                    variant="dark"
                    className="bg-transparent text-dark px-2 py-3 me-3 mb-3 fw-bolder shadow-sm"
                    style={{ borderRadius: "10px", border: "solid" }}
                  >
                    our category 5
                  </Button>
                  <Button
                    variant="dark"
                    className="bg-transparent text-dark px-2 py-3 me-3 mb-3 fw-bolder shadow-sm"
                    style={{ borderRadius: "10px", border: "solid" }}
                  >
                    our category 6
                  </Button>
                  <Button
                    variant="dark"
                    className="bg-transparent text-dark px-2 py-3 me-3 mb-3 fw-bolder shadow-sm"
                    style={{ borderRadius: "10px", border: "solid" }}
                  >
                    our category 7
                  </Button>
                  <Button
                    variant="dark"
                    className="bg-transparent text-dark px-2 py-3 me-3 mb-3 fw-bolder shadow-sm"
                    style={{ borderRadius: "10px", border: "solid" }}
                  >
                    our category 8
                  </Button>
                  <Button
                    variant="dark"
                    className="bg-transparent text-dark px-2 py-3 me-3 mb-3 fw-bolder shadow-sm"
                    style={{ borderRadius: "10px", border: "solid" }}
                  >
                    our category 9
                  </Button>
                  <br />
                  <Button
                    variant="secondary"
                    className="mt-4 mb-4 fw-bold px-3 px-1"
                    style={{ borderRadius: "12px", backgroundColor: "#019267" }}
                  >
                    Check basket
                  </Button>
                </div>
              </div>
            </Col>
            <Col>
              <div className="pt-lg-5 pe-lg-5 me-lg-5" style={{}}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                    <p
                      className="fw-bolder mb-4 fs-3 mt-5 text-center"
                      style={{ color: "#019267", width: "10em" }}
                    >
                      
                      have a good time browsing our meals list and choosing your
                      meals as you want
                    </p>

                  
                </div>
                <Button
                    variant="secondary"
                    className="mt-3 mb-4 fw-bolder px-4 px-1 bg-transparent"
                    style={{
                      borderRadius: "12px",
                      color: "#019267",
                      border: "solid",
                    }}
                  >
                    Browse Meals
                  </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default PlanNextStep;
