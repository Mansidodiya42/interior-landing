import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import womanwearing from "../../assets/woman-wearing-black-eyeglasses.png";
import menswhite from "../../assets/mens-white-dress-shirt.png";
import quoteright from "../../assets/quote-right.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="testimonials">
      <Container>
        <div className="testimonialsdata">
          <h4>Testimonials</h4>
          <h3>Client says about us</h3>
        </div>
        <div className="testarrow">
          <FaChevronLeft />
          <FaChevronRight />
        </div>
        <div>
          <Slider {...settings}>
            <div className="testsilde">
              <img src={womanwearing} alt="" className="testimg" />
              <div className="textback">
                <h4>
                  Rekha Varadwaz<span> / CEO at Google Inc</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <img src={quoteright} alt="" className="quoteimg" />
              </div>
            </div>
            <div className="testsilde">
              <img src={menswhite} alt="" className="testimg" />
              <div className="textback">
                <h4>
                  Paresh Rawal<span> / Manager at Nike Inc</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <img src={quoteright} alt="" className="quoteimg" />
              </div>
            </div>
            <div className="testsilde">
              <img src={womanwearing} alt="" className="testimg" />
              <div className="textback">
                <h4>
                  Rekha Varadwaz<span> / CEO at Google Inc</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <img src={quoteright} alt="" className="quoteimg" />
              </div>
            </div>
            <div className="testsilde">
              <img src={menswhite} alt="" className="testimg" />
              <div className="textback">
                <h4>
                  Paresh Rawal<span> / Manager at Nike Inc</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <img src={quoteright} alt="" className="quoteimg" />
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
