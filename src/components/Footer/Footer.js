import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/Logo.png";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="footersec">
          <Row>
            <Col md={3}>
              <img src={logo} alt="" />
            </Col>
            <Col md={3}>
              <div>
                <h4>Address / Location</h4>
                <p>
                  Room No. #06, Hira Super Market, Pilkhana. Natore Sadar - 6400
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <h4>What we do</h4>
                <p>
                  <a href="/">Home Decor</a>
                  <a href="/">Jewellers Showroom</a>
                  <a href="/">Office</a>
                  <a href="/">Furniture Cabinets</a>
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <h4>Call Directly</h4>
                <p>
                  <a href="tel:+8801456789007">+880 1456 789 007</a>
                  <a href="tel:+8801037445554">+880 1037 445 554</a>
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={3}></Col>
            <Col md={3}>
              <div>
                <h4>Email & Skype</h4>
                <p>
                  <a href="mailto:leaf.interiors@gmail.com">
                    leaf.interiors@gmail.com
                  </a>
                  <a href="/">@Leaf_interiors</a>
                </p>
              </div>
            </Col>
            <Col md={3}></Col>
            <Col md={3}>
              <div>
                <h4>Follow us</h4>
                <SocialMedia />
              </div>
            </Col>
          </Row>
        </div>
        <div className="copyright">
          <p>&copy; Copyright Tonmoydedesigner. All right reserved 2022.</p>
        </div>
      </Container>
    </div>
  );
};

const SocialMedia = () => {
  return (
    <div className="socialmedia">
      <a href="/">
        <FaFacebookF />
      </a>
      <a href="/">
        <FaTwitter />
      </a>
      <a href="/">
        <FaInstagram />
      </a>
      <a href="/">
        <FaYoutube />
      </a>
    </div>
  );
};

export default Footer;
