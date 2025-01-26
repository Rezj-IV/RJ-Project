"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import styles from "./CarouselSlider.module.css";
import { NextArrowSlide, PrevArrowSlide } from "./CaruselSliderArrow";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CarouselSlider = ({ imageSlider }) => {
  var settings = {
    dots: true,
    dotsClass: `slick-dots ${styles.dots}`,

    swipeToSlide: true,
    speed: 500,
    rtl: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrowSlide />,
    prevArrow: <PrevArrowSlide />,
  };
  const rout = useRouter();
  const clickHandler = (props) => {
    rout.push(`/Product/categoryType/${props}/?class=mobile`);
  };
  return (
    <Slider {...settings}>
      {imageSlider.map((item) => {
        if (item.id === 3 || item.id === 7) {
          return (
            <Link href={`/Product/Class/${item.name}`} key={item.id}>
              <div className={styles.sliderContainer}>
                <Image
                  priority
                  className={styles.imageSlider}
                  src={item.indexImageUrl}
                  alt={item.name}
                  fill
                />
              </div>
            </Link>
          );
        } else {
          return (
            <div
              key={item.id}
              className={styles.sliderContainer}
              onClick={() => clickHandler(item.name)}
            >
              <Image
                priority
                className={styles.imageSlider}
                src={item.indexImageUrl}
                alt={item.name}
                fill
              />
            </div>
          );
        }
      })}
    </Slider>
  );
};
export default CarouselSlider;
