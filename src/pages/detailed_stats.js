import React from "react";
import { Container } from "react-bootstrap";
import StatsTemplate from "./statsTemplate";
const DetailedStats = () => {
  return (
    <div>
      <Container className="px-3 py-4" style={{ backgroundColor: "#FFF9F0",borderRadius:"20px" }}>
        <h1 className="display-3 fw-bolder ps-4">Detailed Statistics</h1>
        <StatsTemplate
          name="Recipe lorem"
          purchaseNumber="80"
          income="450"
          rating="26457"
          stars="3.6"
          date="14/03/2001"
        />
        <StatsTemplate
          name="Recipe lorem"
          purchaseNumber="80"
          income="450"
          rating="26457"
          stars="3.6"
          date="14/03/2001"
        />
        <StatsTemplate
          name="Recipe lorem"
          purchaseNumber="80"
          income="450"
          rating="26457"
          stars="3.6"
          date="14/03/2001"
        />
        
      </Container>
    </div>
  );
};
export default DetailedStats;
