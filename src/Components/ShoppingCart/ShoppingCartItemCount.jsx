"use client";
import {
  decreaseItem,
  increaceItem,
  removeItem,
} from "@/Redux/Slices/ShoppingCartSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LuTrash2 } from "react-icons/lu";
import { MdChevronLeft } from "react-icons/md";
import styles from "./ShoppingCartItemCount.module.css";
import Link from "next/link";
import { LuMinus, LuPlus } from "react-icons/lu";

const ShoppingCartItemCount = ({ PrdId }) => {
  const selector = useSelector((state) => state.ShoppingCart);
  const Xcount = selector.items.filter((item) => item.id === PrdId)[0].count;
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.counter}>
        <LuPlus className={styles.counterIcon} onClick={() => dispatch(increaceItem(PrdId))} />

        <label className={styles.countNumber}>{Xcount}</label>

        {Xcount === 1 ? (
          <LuTrash2 className={styles.counterIcon} onClick={() => dispatch(removeItem(PrdId))} />
        ) : (
          <LuMinus className={styles.counterIcon} onClick={() => dispatch(decreaseItem(PrdId))} />
        )}
      </div>
      <div>
        <Link href="/ShoppingCart" className={styles.goShoppingCart}>
          <p>مشاهده سبد خرید</p>
          <MdChevronLeft className={styles.leftIcon} />
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCartItemCount;
