import React from "react";
import { Container } from "react-bootstrap";
import Button from "../Button/Button";

const Satisfied = () => {
  return (
    <div className="satisfiedsection">
      <Container>
        <div className="satisfieddata">
          <h4>Satisfied to see our work?</h4>
          <h2>
            Let’s discuss about
            <br /> your thoughts!
          </h2>
          <Button label="CONTACT US" />
        </div>
      </Container>
    </div>
  );
};

export default Satisfied;
