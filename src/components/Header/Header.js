import React from "react";
import logo from "../../assets/Logo.png";
import ShapeBG from "../../assets/ShapeBG.png";
import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <Row className="headerSection">
        <Col md={6}>
          <div className="headerlogo">
            <div>
              <img src={logo} alt="" />
            </div>
            <div>
              <p>
                Call Us: <a href="tel:+8001400123456">(+800) 1400 123 456</a>
              </p>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="shapeimg">
            <img src={ShapeBG} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
