"use client";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { NextArrow } from "./CaruselArrow";
import { PrevArrow } from "./CaruselArrow";
import SlideCarouselCard from "./SlideCarouselCard";

const Carusel = (props) => {
  let result = props.data.filter((item) => {
      return item.stock !== 0;
    });
  let settings = {
    speed: 700,
    centerMode: true,
    centerPadding: "1em",
    swipeToSlide: true,
    rtl: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow width="30px" height="30px" />,
    prevArrow: <PrevArrow width="30px" height="30px" />,
    responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          speed: 100,
          adaptiveHeight: true,
          slidesToScroll: 1,
          centerPadding: "1px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          speed: 100,
          adaptiveHeight: true,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          speed: 100,
          adaptiveHeight: true,
          slidesToScroll: 1,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          speed: 100,
          adaptiveHeight: true,
          slidesToScroll: 1,
          centerPadding: "1px",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          speed: 100,
          adaptiveHeight: true,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <Slider
      {...settings}
      autoplay={true}
      autoplaySpeed={2000}
      focusOnSelect={false}
      rtl={true}
      slidesToScroll={1}
    >
      {result.map((item) => (
        <SlideCarouselCard key={item.id} product={item} />
      ))}
    </Slider>
  );
};

export default Carusel;
