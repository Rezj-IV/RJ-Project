import Link from "next/link";
import React from "react";
import styles from "./LogSignUI.module.css";
import { BiLogOut } from "react-icons/bi";
const LogSignUI = () => {
  return (
    <div className={styles.LogSignUIContainer}>

      <span><BiLogOut className={styles.iconLogin}/></span>
      <Link className={styles.link} href="/Login">ورود</Link>
      <span>|</span>
      <Link className={styles.link} href="/Signup">ثبت نام</Link>
    </div>
  );
};

export default LogSignUI;
