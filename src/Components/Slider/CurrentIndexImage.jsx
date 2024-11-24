"use client";
import React, { useEffect, useState } from "react";
import styles from "./Slider.module.scss";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";
import { useSearchParams } from "next/navigation";
const CurrentIndexImage = ({slideLength}) => {
  const [CurrentUrl, setCurrentUrl] = useState(0);
  const searchParams=useSearchParams()
  const params = new URLSearchParams(searchParams.toString())
      
  console.log(slideLength);
useEffect(() => {

// params.set("indexImage", '2677')
//  console.log(params.values);

 
 
}, [CurrentUrl])

  const LeftClick = () => {
    const Back = CurrentUrl === 0;
    const result = Back ? slideLength - 1 : CurrentUrl - 1;
    setCurrentUrl(result);
  };
  console.log(slideLength);

  const RightClick = () => {
    const Forward = CurrentUrl === slideLength - 1;
    const result = Forward ? 0 : CurrentUrl + 1;
    setCurrentUrl(result);
  };
  return (
    <div>
      <div className={styles.leftArrow} onClick={LeftClick}>
        <BiSolidChevronLeft />
      </div>
      <div className={styles.rightArrow} onClick={RightClick}>
        <BiSolidChevronRight />
      </div>
    </div>

    


  );
};

export default CurrentIndexImage;
