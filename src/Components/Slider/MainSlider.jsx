import * as Repository from "../../../RestConfig/RestRequest";
import CarouselSlider from "./CarouselSlider";
import React from "react";
async function getAllSlides() {
  const response = await Repository.Get("public/mainSlider");
  if (!response.ok) {
    console.log("error GET-Slide");
  } else {
    const data = await response.json();
    return data;
  }
}

const MainSlider = async () => {
  const slide = await getAllSlides();

  return (
    <>
      <CarouselSlider imageSlider={slide} />
    </>
  );
};

export default MainSlider;
