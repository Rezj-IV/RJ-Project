"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Color.module.css";
import AddToCartButton from "../ShoppingCart/AddToCartButton";
import { BsCheckLg } from "react-icons/bs";
const Color = ({ colorID }) => {
  const [color, setColor] = useState({ id: colorID[0].id ,showColor: colorID[0].showColor });
  const mainColor = color.id ? color.showColor : colorID[0].showColor;
  const backgroundColor = color.id ? color.color : colorID[0].color;
  const clickToShow = (allColor) => {
    setColor(allColor);
  };
  const [first, setfirst] = useState(0);

  // useEffect(() => {
  //   AddToCartButton({
  //     color:  backgroundColor,
  //   });
  // }, [color]);

  return (
    <div>
      <div className={styles.colorContainer}>
        <div className={styles.showColorContainer}>
          <span className={styles.showColorTitle}>رنگ :</span>
          <span className={styles.showColor}>{mainColor}</span>
        </div>

        {colorID.map((item) => {
          return (
            <div key={item.id}>
              <div
                className={
                  color.id === item.id
                    ? `${styles.CheckColor}`
                    : styles.insideColor
                }
              >
                <BsCheckLg
                  className={
                    color.id === item.id ? `${styles.Check}` : styles.notCheck
                  }
                />

                <div
                  onClick={() => clickToShow(item)}
                  className={styles.color}
                  style={{
                    backgroundColor: item.color,
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Color;
