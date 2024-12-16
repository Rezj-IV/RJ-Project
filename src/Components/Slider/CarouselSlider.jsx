"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import styles from "./CarouselSlider.module.css";

const CarouselSlider = ({ imageSlider }) => {
  console.log(imageSlider);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {imageSlider.map((item) => {
        return (
          <div key={item.id} className={styles.sliderContainer}>
            <Image
              className={styles.imageSlider}
              src={item.indexImageUrl}
              alt={item.name}
              fill
            />
          </div>
        );
      })}
    </Slider>
  );
};
export default CarouselSlider;
