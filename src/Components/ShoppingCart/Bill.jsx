import React from "react";
import styles from "./Bill.module.css";
const Bill = ({ totalCount, totalAmount, discountProducts }) => {
  const totalSum = totalAmount - discountProducts;
  return (
    <div>
      
        <h3>صورتحساب</h3>
        <div className={styles.bill}>
          <div className={styles.offPrcentNumber}>
            <p>
              {totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
            <p>
              {discountProducts
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
            <p>{totalSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
          </div>
          <div>
            <p>ادامه خرید</p>
          </div>
        </div>
    </div>
  );
};

export default Bill;
