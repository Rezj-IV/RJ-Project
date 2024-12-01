"use client";
import React, { useRef, useState } from "react";
import Card from "./Card";
import styles from "./CardDetails.module.scss";
const CardDetails = ({ product }) => {
  const checked = useRef("");
  const checked1 = useRef("");
  const checked2 = useRef("");
  const [state, setState] = useState([]);
  const checkHandler = (id, box) => {
    let exist = false;
    state.forEach((element) => {
      if (element.id == id.id) {
        exist = true;
      }
    });
    if (!exist) {
      if (box.current.checked) {
        setState([...state, id]);
      }
    } else {
      setState(
        state.filter((item) => {
          return item.id !== id.id;
        })
      );
    }
  };
  console.log(state);
  return (
    <div className={styles.cardDetailsConrainer}>
      <div className={styles.cardDetail}>
      <div className={styles.filterLogo}>
        <p>فیلتر</p>
      </div>
        <div className={styles.categories}>
        <p>دسته بندی ها</p>
        <input
          type="checkbox"
          id="mobile"
          ref={checked}
          onChange={() => {
            checkHandler({ id: 1, name: "mobile" }, checked);
          }}
        />
        <label>mobile</label>
        <br />
        <input
          type="checkbox"
          id="tablet"
          ref={checked1}
          onChange={() => {
            checkHandler({ id: 2, name: "tablet" }, checked1);
          }}
        />
        <label>tablet</label>
        <br />
        <input
          type="checkbox"
          id="laptop"
          ref={checked2}
          onChange={() => {
            checkHandler({ id: 3, name: "laptop" }, checked2);
          }}
        />
        <label>laptop</label>
        </div>
        
      </div>
      <div className={styles.Card}>
        {product.map((item) => {
          return <Card product={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default CardDetails;
