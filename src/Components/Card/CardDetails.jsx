"use client";
import React, { Suspense, useId, useRef, useState } from "react";
import Card from "./Card";
import styles from "./CardDetails.module.scss";
import { CgReorder } from "react-icons/cg";
import { BsFilter } from "react-icons/bs";
const CardDetails = ({ product }) => {
  const checked2 = useRef("");
  const [state, setState] = useState([]);
  // const checkHandler = (id, box) => {
  //   let exist = false;
  //   state.forEach((element) => {
  //     if (element == id) {
  //       exist = true;
  //     }
  //   });
  //   if (!exist) {
  //     if (box.current.checked) {
  //       setState([...state, id]);
  //     }
  //   } else {
  //     setState(
  //       state.filter((item) => {
  //         return item !== id;
  //       })
  //     );
  //   }
  // };
  let cats = [];
  product.forEach((item) => {
    if (cats.length == 0) {
      cats.push(item.category);
    } else {
      let found = cats.find((item2) => {
        return item2 == item.category;
      });
      if (!found) {
        cats.push(item.category);
      }
    }
  });
  console.log(cats);
  // const result = product.filter((item) => {
  //   return item.category.includes(state.item);
  // });
  console.log("aaaaaaa");
  console.log(state.item);
  const clickHandler = (props) => {
    setState(...state, props);
  };

  return (
    <div className={styles.cardDetailsConrainer}>
      <Suspense>
        <div className={styles.filterSectionContainer}>
          <div className={styles.filterSection}>
          <div className={styles.filterLogo}>
            <BsFilter className={styles.FilterIcon} />
            <p>فیلترها</p>
          </div>

          <div className={styles.categories}>
            <p>فقط کالا های موجود</p>

            <p>فیلتر بر اساس قیمت</p>
            <div>
              <p>برند ها</p>
              {cats.map((item) => {
                return (
                  <div key={useId()}>
                    <label onClick={() => clickHandler({ item })}>{item}</label>
                    {/* <input
                    type="checkbox"
                    id={item}
                    ref={checked2}
                    onChange={() => {
                      checkHandler(item, checked2);
                    }}
                  /> */}
                    {/* <input
                    type="checkbox"
                    id={item}
                    ref={checked2}
                    onChange={() => {
                      checkHandler(item, checked2);
                    // }}
                  /> */}
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.mainDropdown}></div>
        </div></div>
      </Suspense>
      <Suspense>
        <div className={styles.cardContainer}>
          <div className={styles.sortingContainer}>
            <div className={styles.sorting}>
              <div className={styles.title}>
                <CgReorder className={styles.order} />

                <span>مرتب سازی:</span>
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
          <div>
            <div className={styles.Card}>
              {product.map((item) => {
                return <Card product={item} key={item.id} />;
              })}
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default CardDetails;
