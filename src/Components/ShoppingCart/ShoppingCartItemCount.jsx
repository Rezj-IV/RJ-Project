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
import styles from "./ShoppingCartItemCount.module.css"
import Link from "next/link";
import { LuMinus, LuPlus } from "react-icons/lu";
import ShoppingCartItemCountB from "./ShoppingCartItemCountB";


const ShoppingCartItemCount = ({ PrdId }) => {
  console.log(PrdId);
  const selector = useSelector((state) => state.ShoppingCart);
  const Xcount = selector.items.filter((item) => item.id === PrdId)[0].count;
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
        <div className={styles.counter}>
        <LuPlus onClick={() => dispatch(increaceItem(PrdId))}/>

      <label className={styles.countNumber}>{Xcount}</label>

      {Xcount === 1 ? (
        <LuTrash2 onClick={() => dispatch(removeItem(PrdId))} />
      ) : (
<LuMinus onClick={() => dispatch(decreaseItem(PrdId))}/>

      )}
      </div>
      <div>
      
            <Link href="/ShoppingCart" className={styles.goShoppingCart}>
            <p>
            مشاهده سبد خرید

            </p>
            <MdChevronLeft className={styles.leftIcon}/>
            </Link>
      </div>
    </div>
  );
};

export default ShoppingCartItemCount;
