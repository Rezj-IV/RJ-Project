"use client";
import React, { useRef, useState } from "react";
import Card from "./Card";
import styles from "./CardDetails.module.scss";
import { CgReorder } from "react-icons/cg";
import { BsFilter } from "react-icons/bs";
import ProductFilter from "../Product/ProductFilter";
const CardDetails = ({ product }) => {
  const checked = useRef("");
  const checked1 = useRef("");
  const checked2 = useRef("");
  const checked3 = useRef("");
  const checked4 = useRef("");
  const [state, setState] = useState([]);
  const checkHandler = (id, box) => {
    let exist = false;
    state.forEach((element) => {
      if (element == id) {
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
          return item !== id;
        })
      );
    }
  };

  console.log(state);

  return (
    <div className={styles.cardDetailsConrainer}>
      <div className={styles.cardDetail}>
        <div className={styles.filterLogo}>
          <BsFilter className={styles.FilterIcon}/>
          <p>فیلترها</p>
        </div>
        <div className={styles.categories}>
          <p>دسته بندی ها</p>
          <input
            type="checkbox"
            id="mobile"
            ref={checked}
            onChange={() => {
              checkHandler("mobile", checked);
            }}
          />
          <label>mobile</label>
          <br />
          <input
            type="checkbox"
            id="tablet"
            ref={checked1}
            onChange={() => {
              checkHandler("tablet", checked1);
            }}
          />
          <label>tablet</label>
          <br />
          <input
            type="checkbox"
            id="laptop"
            ref={checked2}
            onChange={() => {
              checkHandler("laptop", checked2);
            }}
          />
          <label>laptop</label>

          <br />
          <input
            type="checkbox"
            id="computer"
            ref={checked3}
            onChange={() => {
              checkHandler("computer", checked4);
            }}
          />
          <label>computer</label>
          <br />
          <input
            type="checkbox"
            id="console"
            ref={checked4}
            onChange={() => {
              checkHandler("console", checked);
            }}
          />
          <label>console</label>
        </div>

        <div className={styles.mainDropdown}></div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.sortingContainer}>
          <div className={styles.sorting}>
            <div className={styles.title}>
              <CgReorder className={styles.order} />

              <span>مرتب سازی:</span>
            </div>
            <div>
              <p>پرفروش ترین</p>
            </div>
            <div>
              <p>بیشترین قیمت</p>
            </div>
            <div>
              <p>کمترین قیمت</p>
            </div>
            <div>
              <p>بیشترین تخفیف</p>
            </div>
          </div>
          <div className={styles.length}>
            <span>{product.length}</span>
            <p>کالا</p>
          </div>
        </div>
        <div className={styles.Card}>
          {product.map((item) => {
            if (
              state[0] === item.type ||
              state[1] === item.type ||
              state[2] === item.type ||
              state[3] === item.type ||
              state[4] === item.type
            ) {
              return <Card product={item} key={item.id} />;
            } else {
              if (state.length === 0) {
                return <Card product={item} key={item.id} />;
              }
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
