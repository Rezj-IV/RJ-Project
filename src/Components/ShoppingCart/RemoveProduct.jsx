"use client";
import { removeItem } from "@/Redux/Slices/ShoppingCartSlice";
import React from "react";
import { GoTrash } from "react-icons/go";
import { useDispatch } from "react-redux";
import styles from "./RemoveProduct.module.css"

const RemoveProduct = ({PrdId}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className={styles.delete}>
        <div className={styles.Trash2Container} >
          <GoTrash className={styles.Trash2} onClick={()=>dispatch(removeItem(PrdId))}/>
        </div>
      </div>
    </div>
  );
};

export default RemoveProduct;
