import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../Button/Button";

const Wemake = () => {
  return (
    <div className="Wemake">
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <ul>
              <li>Home</li>
              <li>Office</li>
              <li>Furniture</li>
            </ul>
            <div>
              <h1>
                We make your home
                <br /> better & elegant.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <Button label="CONTACT US" />
            </div>
          </Col>
          <Col sm={12} md={6} className="wemakeimgsec">
            <div className="Wemakeimg"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Wemake;
