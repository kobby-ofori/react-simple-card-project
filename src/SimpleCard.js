import React from "react";
import "./App.css";
import Description from "./Description";
import Title from "./Title";
import Image from "./Image";
import pexels from "./images/pexels-pixabay.jpg"

class SimpleCard extends React.Component {
  render() {
    return (
      <div className="card">
        <Image src={pexels} alt="pic" />
        <div className="main">
          <Title title1="RIMS" title2="ARCHITECTURE" />
          <Description
            description1="RIMS Architecture is an architectural firm and construction company
          that specializes in the design and construction of residential and
          commercial buildings. Our designs are eco-friendly and are built as
          designed."
            description2="Before moving on to the next level, we work closely with you, the
          customer, to make sure you are entirely satisfied with the schematic
          design. This is done to create a design that you, the client, are
          happy with in every way."
            description3="We stand out from the competition due to our attention to detail and
          ability to create designs that blend in with their surroundings. Given
          that purchasing a house is rarely a simple decision, we make every
          effort to provide our clients with the finest experience possible."
          />
        </div>
      </div>
    );
  }
}

export default SimpleCard;
