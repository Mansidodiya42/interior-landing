import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import paperlinxlogo from "../../assets/paperlinxlogo.png";
import sportlogo from "../../assets/sportlogo.png";
import infraredlogo from "../../assets/infraredlogo.png";
import terrafirmalogo from "../../assets/terrafirmalogo.png";
import harrisonlogo from "../../assets/harrisonlogo.png";

const HappyClients = () => {
  return (
    <div className="happyclients">
      <Container>
        <div className="happyclientsdata">
          <h4>Happy Clients</h4>
          <h3>Successfully worked with them</h3>
        </div>
        <Row className="happyclientscontent">
          <Col md={2}>
            <ClientLogo clientlogo={paperlinxlogo} />
          </Col>
          <Col md={2}>
            <ClientLogo clientlogo={sportlogo} />
          </Col>
          <Col md={2}>
            <ClientLogo clientlogo={infraredlogo} />
          </Col>
          <Col md={2}>
            <ClientLogo clientlogo={terrafirmalogo} />
          </Col>
          <Col md={2}>
            <ClientLogo clientlogo={harrisonlogo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export const ClientLogo = (props) => {
  return (
    <div className="clientlogo">
      <img src={props.clientlogo} alt="" />
    </div>
  );
};

export default HappyClients;
