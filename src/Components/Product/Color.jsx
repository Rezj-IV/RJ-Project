"use client";
import React, { useState } from "react";
import styles from "./Color.module.css";
const Color = ({ colorID }) => {
  const [color, setColor] = useState([]);
  const clickToShow = (allColor) => {
    setColor(allColor);
  };
  console.log(color);

  return (
    <div>
      <div className={styles.colorContainer}>
        <div className={styles.showColorContainer}>
          <span className={styles.showColorTitle}>رنگ :</span>
          <span className={styles.showColor}>
            {color.id ? color.showColor : colorID[0].showColor}
          </span>
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
