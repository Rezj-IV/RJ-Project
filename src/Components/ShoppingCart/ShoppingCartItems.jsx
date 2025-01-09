"use client";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./ShoppingCartItems.module.css";
import ShoppingCartItem from "./ShoppingCartItem";
import EmptyShoppingCart from "./EmptyShoppingCart";
import Bill from "./Bill";

const ShoppingCartItems = () => {
  const data = useSelector((state) => state.ShoppingCart);
  return (
    <>
      {data.totalCount === 0 ? (
        <EmptyShoppingCart />
      ) : (
        <div className={styles.container}>
          <div className={styles.rightSide}>
            {data.items.map((item) => {
              return (
                <ShoppingCartItem
                  Product={item}
                  key={item.id}
                  discountProducts={data.discountProducts}
                />
              );
            })}
          </div>

          <div className={styles.leftSide}>
            <Bill
              totalCount={data.totalCount}
              totalAmount={data.totalAmount}
              discountProducts={data.discountProducts}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCartItems;
