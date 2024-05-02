import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import First from "../assets/banners/FirstSlide.png";
import Second from "../assets/banners/SecondSlide.png";
import "./Carousel.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div className="slide">
        <img src={First} alt="" />
      </div>
      <div className="slide">
        <img src={Second} alt="" />
      </div>
    </Slider>
  );
};

export default Carousel;
