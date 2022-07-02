import React, { useState } from "react";
import { Map, Draggable } from "pigeon-maps";
import MapIndicator from "../assets/geo-alt.svg";
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export function MyMap() {
  const [anchor, setAnchor] = useState([33.8869, 9.5375]);

  return (
    <div className="text-start">

      <Map
        width={400}
        height={300}
        defaultCenter={[33.8869, 9.5375]}
        defaultZoom={8}
      >
        <Draggable offset={[60, 87]} anchor={anchor} onDragEnd={setAnchor}>
          <img src={MapIndicator} width={30} height={30} alt="Pigeon!" />
        </Draggable>
      </Map>
      <br/>
    </div>
  );
}
