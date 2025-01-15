"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ShoppingCartItems.module.css";
import ShoppingCartItem from "./ShoppingCartItem";
import EmptyShoppingCart from "./EmptyShoppingCart";
import Bill from "./Bill";
import { GoTrash } from "react-icons/go";
import { removeAll } from "@/Redux/Slices/ShoppingCartSlice";

const ShoppingCartItems = () => {
  const data = useSelector((state) => state.ShoppingCart);
  const dispatch = useDispatch()
  console.log(data.totalCount);
  return (
    <>
      {data.totalCount === 0 ? (
        <EmptyShoppingCart />
      ) : (
        <div className={styles.container}>
          <div className={styles.rightSide}>
          <div className={styles.yourShoppingCartContainer}>
                    <div className={styles.yourShoppingCartTitle}>
                      <h3>سبد خرید شما</h3>
                      <span>{data.items.length}
                      <span>عدد کالا</span>

                      </span>
                    </div>
                    <div className={styles.removeAll}>
                      <span>حذف کل سبد خرید</span>
                      <GoTrash className={styles.trashIcon} onClick={()=>dispatch(removeAll())} />
                    </div>
                  </div>
            {data.items.map((item) => {
              return (
                <ShoppingCartItem
                  Product={item}
                  key={item.id}
                  discountProducts={data.discountProducts}
                  length={data.items.length}
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
