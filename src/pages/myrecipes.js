import React from "react";
import { Container, Button } from "react-bootstrap";
import Footer from "../footer";
import MyRecipesTemplate from "./recipeTemplate";
const MyRecipes = () => {
  return (
    <div className="my-5">
      <Container
        style={{ backgroundColor: "#FFF9F0", borderRadius: "25px" }}
        className="px-4 py-4"
      >
        <h1 className="display-3 fw-bold    ">My Recipes</h1>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button className="bg-transparent text-dark ms-2" variant="dark">
            Add new recipe <span className="px-5 py-5" style={{borderRadius:"200px",border:"1px black solid"}} className="fw-bolder">+</span>
          </Button>
        </div>

        <MyRecipesTemplate
          name="Cheese Burger"
          date=""
          details="lorem ipsum ipsum ipsum ipsum ipsum "
          date="14/03/2001"
          progress="uploaded"
          uploadDate="14/10/2010"
        />
        <MyRecipesTemplate
          name="Recipe Lorem"
          date=""
          details="lorem ipsum ipsum ipsum ipsum ipsum "
          date="14/03/2001"
          progress="pending"
        />
        <MyRecipesTemplate
          name="Recipe Lorem"
          date=""
          details="lorem ipsum ipsum ipsum ipsum ipsum "
          date="14/03/2001"
          progress="denied"
          uploadDate="14/10/2010"
        />
      </Container>
    </div>
  );
};
export default MyRecipes;
