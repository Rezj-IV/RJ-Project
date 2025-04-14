"use client";
import Link from "next/link";
import React from "react";
import styles from "./LogSignUI.module.css";
import { BiLogOut } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { RxExit } from "react-icons/rx";
import { removeToken } from "@/Redux/Slices/UserSlice";
import { RiUserLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";

const LogSignUI = () => {
  const dispatch = useDispatch();
  const jwt = useSelector((state) => state.Users);
  // const arrayToken = jwt.token.split(".");
  // const tokenPayload = JSON.parse(atob(arrayToken[1]));
  const rout = useRouter();
  const SignOut = () => {
    dispatch(removeToken());
    rout.push("/");
  };
  return (
    <div>
      {jwt.token ? (
        <div className={styles.userIconContainer}>
          <Link href="/Profile" className={styles.userIcon}>
            <AiOutlineUser className={styles.userIcon} />
          </Link>

          <div className={styles.userLayer}>
            <Link href="/Profile" className={styles.userAccount}>
              <p>
                حساب کاربری
                {/* <span className={styles.username}>{tokenPayload.username}</span> */}
              </p>
              <MdKeyboardArrowLeft className={styles.ArrowLeftIcon} />
            </Link>
            <div onClick={SignOut} className={styles.sginOut}>
              <RxExit className={styles.exitIcon} />

              <p>خروج از حساب کاربری</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.LogSignUIContainer}>
          <span>
            <BiLogOut className={styles.iconLogin} />
          </span>
          <Link className={styles.link} href="/Login">
            ورود
          </Link>
          <span>|</span>
          <Link className={styles.link} href="/Signup">
            ثبت نام
          </Link>
        </div>
      )}
    </div>
  );
};

export default LogSignUI;
