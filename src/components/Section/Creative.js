import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Group1 from "../../assets/Group1.png";
import Group2 from "../../assets/Group2.png";
import Group3 from "../../assets/Group3.png";
import Group4 from "../../assets/Group4.png";

const Creative = () => {
  return (
    <div className="whatwe">
      <Container>
        <div className="whatwedata">
          <h4>What We Do</h4>
          <h3>Creative Working areas</h3>
        </div>
        <Row className="whatwecontent">
          <Col md={3}>
            <CreativeIcon
              creativeimg={Group1}
              creativetitle="Home Decor"
              creativepara="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            />
          </Col>
          <Col md={3}>
            <CreativeIcon
              creativeimg={Group2}
              creativetitle="Jewellers"
              creativepara="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            />
          </Col>
          <Col md={3}>
            <CreativeIcon
              creativeimg={Group3}
              creativetitle="Office"
              creativepara="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            />
          </Col>
          <Col md={3}>
            <CreativeIcon
              creativeimg={Group4}
              creativetitle="Furnitures"
              creativepara="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export const CreativeIcon = (props) => {
  return (
    <div className="creative-icon">
      <img src={props.creativeimg} alt="" />
      <h3>{props.creativetitle}</h3>
      <p>{props.creativepara}</p>
    </div>
  );
};

export default Creative;
