"use client";
import React, { useEffect, useState } from "react";
import styles from "./Color.module.css";
import AddToCartButton from "../ShoppingCart/AddToCartButton";
const Color = ({ colorID }) => {
  const [color, setColor] = useState([]);

  const clickToShow = (allColor) => {
    setColor(allColor);
  };
  const mainColor = color.id ? color.showColor : colorID[0].showColor;
  const backgroundColor = color.id ? color.color : colorID[0].color;


  // useEffect(() => {
  //   AddToCartButton({
  //     color: {mainColor , backgroundColor},
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
              <div className={styles.insideColor}>
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
