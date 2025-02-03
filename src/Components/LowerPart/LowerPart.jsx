import styles from "./LowerPart.module.css";
import { HiHome } from "react-icons/hi2";
import { BiCategoryAlt, BiLogOut } from "react-icons/bi";
import { RiShoppingCartLine } from "react-icons/ri";
import Link from "next/link";
import React from "react";
import { AiFillAliwangwang } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";

const LowerPart = () => {
  return (
    <div className={styles.lowerPartContainer}>
      <Link href="/" className={styles.lowerPart}>
        <HiHome className={styles.icon} />

        <p>خانه</p>
      </Link>

      <Link href="/Categories" className={styles.lowerPart}>
        <BiCategoryAlt className={styles.icon} />

        <p>دسته بندی</p>
      </Link>

      <Link href="/ShoppingCart" className={styles.lowerPart}>
        <RiShoppingCartLine className={styles.icon} />
        <p>سبد خرید</p>
      </Link>

      <div className={styles.LogSignUIContainer}>
        <CiLogin className={styles.iconLogin} />

        <Link className={styles.link} href="/Login">
          ورود
        </Link>
        <span>|</span>
        <Link className={styles.link} href="/Signup">
          ثبت نام
        </Link>
      </div>
    </div>
  );
};

export default LowerPart;
