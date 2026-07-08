import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import purpleblanket from "../../assets/purple-blanket.png";
import emptybedroomset from "../../assets/empty-bedroom-set.png";
import grayfabricsofaplacedindoor from "../../assets/gray-fabric-sofa-placed-indoor.png";
import Group5 from "../../assets/Group5.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Container>
        <div className="portfoliodata">
          <h4>Portfolio</h4>
          <h3>Resent creative works</h3>
        </div>
        <Row className="portfoliocontent">
          <Col md={4}>
            <PortfolioIcon
              portfolioimg={purpleblanket}
              portfoliotitle="Bedroom"
              portfoliopara="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
            />
          </Col>
          <Col md={4}>
            <PortfolioIcon
              portfolioimg={emptybedroomset}
              portfoliotitle="Wallpaper"
              portfoliopara="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
            />
          </Col>
          <Col md={4}>
            <PortfolioIcon
              portfolioimg={grayfabricsofaplacedindoor}
              portfoliotitle="Living Room"
              portfoliopara="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. "
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export const PortfolioIcon = (props) => {
  return (
    <div className="portfolio-icon">
      <img src={Group5} alt="" className="portfoliohover" />
      <img src={props.portfolioimg} alt="" />
      <h3>{props.portfoliotitle}</h3>
      <p>{props.portfoliopara}</p>
    </div>
  );
};

export default Portfolio;
