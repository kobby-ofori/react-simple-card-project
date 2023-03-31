import React from "react";

class Description extends React.Component {
  render() {
    return (
      <div className="paragraph">
        <p>
          {this.props.description1}
          {/* RIMS Architecture is an architectural firm and construction company
          that specializes in the design and construction of residential and
          commercial buildings. Our designs are eco-friendly and are built as
          designed. */}
        </p>
        <p>
          {this.props.description2}
          {/* Before moving on to the next level, we work closely with you, the
          customer, to make sure you are entirely satisfied with the schematic
          design. This is done to create a design that you, the client, are
          happy with in every way. */}
        </p>
        <p>
          {this.props.description3}
          {/* We stand out from the competition due to our attention to detail and
          ability to create designs that blend in with their surroundings. Given
          that purchasing a house is rarely a simple decision, we make every
          effort to provide our clients with the finest experience possible. */}
        </p>
      </div>
    );
  }
}

export default Description;
