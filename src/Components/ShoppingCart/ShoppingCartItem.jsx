import React, { useState } from "react";
import Image from "next/image";
import styles from "./ShoppingCartItem.module.css";
import ShoppingCartItemCountB from "./ShoppingCartItemCountB";
import { BsShop } from "react-icons/bs";
import { GoShieldCheck } from "react-icons/go";
import { FiBox } from "react-icons/fi";

const ShoppingCartItem = ({
  Product,
  totalCount,
  totalAmount,
  discountProducts,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.productName}>
        <p>{Product.name}</p>
        <div className={styles.sellerContainer}>
          <div className={styles.seller}>
            <BsShop className={styles.iconShop} />
            <span>{Product.seller}</span>
          </div>

          <div className={styles.warranty}>
            <GoShieldCheck className={styles.iconShop} />
            <span>گارانتی اصالت و سلامت فیزیکی کالا</span>
          </div>

          <div className={styles.store}>
            <FiBox className={styles.iconShop} />
            <span>موجود در انبار</span>
            <span>{Product.seller}</span>
            <span> ( ارسال فوری )</span>
          </div>
        </div>
      </div>
      <div className={styles.productImage}>
        <Image
          width={130}
          height={130}
          alt={Product.name}
          src={Product.indexImageUrl}
        />
        <div className={styles.productDetails}>
          <div className={styles.counterAndPrice}>
            {Product.priceWithDiscount === 0 ? (
              <div className={`${styles.priceDetail}`}>
                <div className={`${styles.priceContainer}`}>
                  <div className={styles.price}>
                    {Product.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    <span className={styles.priceToman}>تومان</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className={`${styles.priceDetail}`}>
                <div className={styles.offPrcentContainer}>
                  <div className={`${styles.offPrcent}`}>
                    <span>
                      {" "}
                      {Math.floor(
                        ((Product.price - Product.priceWithDiscount) /
                          Product.price) *
                          100
                      )}
                    </span>
                    <span className={styles.prcent}>%</span>
                  </div>
                </div>
                <div className={`${styles.priceContainer}`}>
                  <div className={styles.priceWithDiscount}>
                    {Product.priceWithDiscount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                  <div className={`${styles.price}`}>
                    {Product.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    <span className={styles.priceToman}>تومان</span>
                  </div>
                </div>
              </div>
            )}
            <ShoppingCartItemCountB PrdId={Product.id} />
          </div>
          <div className={styles.colorContainer}></div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
