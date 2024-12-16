import * as Repository from "../../../RestConfig/RestRequest";
import CarouselSlider from "./CarouselSlider";
import styles from "./MainSlider.module.css";
import Image from "next/image";
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
  const slide= await getAllSlides();
  console.log(slide);
  console.log("object");
  return(
    <div>
<CarouselSlider imageSlider={slide}/>
    </div>
  )
};

export default MainSlider;
