"use client";
import React from "react";
import styles from "./AddToCart.module.css";
import { BsCart3 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addItem } from "@/Redux/Slices/ShoppingCartSlice";
const AddToCart = ({ product }) => {
  const dispatch = useDispatch();
  

  return (
    <div>
      <div
        className={styles.shoppingCartBtnContainer}
        onClick={() => dispatch(addItem(product))}
      >
        <div className={styles.textShoppingCart}>
          <span>افزودن به سبد خرید</span>
        </div>

        <div className={styles.BsCartIcon}>
          <BsCart3 />
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
