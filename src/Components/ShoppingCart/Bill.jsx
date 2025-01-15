import React from "react";
import styles from "./Bill.module.css";
const Bill = ({ totalCount, totalAmount, discountProducts }) => {
  const totalSum = totalAmount - discountProducts;
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>صورتحساب</h3>
      <div className={styles.bill}>
        <div className={styles.offPrcentNumber}>
          <div className={styles.ProductPrice}>
            <p className={styles.ProductPriceText}>قیمت محصولات</p>
            <span className={styles.ProductPriceText}>
              {totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            <span className={styles.toman}>تومان</span>

            </span>
          </div>
          <div className={styles.ProductPrice}>
            <p className={styles.productDiscountText}>تخفیف محصولات</p>
            <span className={styles.productDiscountText}>
              {discountProducts
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              <span className={styles.toman}>تومان</span>
            </span>
          </div>
          <div className={styles.ProductPrice}>
            <p className={styles.totalSumText}>جمع کل</p>
            <span className={styles.totalSumText}>
              {totalSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            <span className={styles.toman}>تومان</span>

            </span>
          </div>
        </div>
        <div className={styles.purchaseConfirmationContainer}>
        <div className={styles.purchaseConfirmation}>
          <p>تایید خرید</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Bill;
