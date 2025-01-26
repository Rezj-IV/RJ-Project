"use client";
import React from "react";
import styles from "./Profile.module.css";
import { TbUserHexagon } from "react-icons/tb";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import { MdConstruction } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import { removeToken } from "@/Redux/Slices/UserSlice";

const profile = (prop) => {
  const dispatch = useDispatch();
  const jwt = useSelector((state) => state.Users);
  const arrayToken = jwt.token.split(".");
  const tokenPayload = JSON.parse(atob(arrayToken[1]));
  const rout = useRouter();
  const clickHandler = () => {
    dispatch(removeToken());
    rout.push("/");
  };
  return (
    <div className={styles.profileContainer}>
      <div className={styles.rightSide}>
        <div className={styles.profile}>
          <TbUserHexagon className={styles.profileIcon} />
          <p>{tokenPayload.username}</p>
        </div>

        <div className={styles.profileContent}>
          <MdOutlineRemoveRedEye className={styles.EyeIcon} />
          <p> اخرین کالاهای دیده شده</p>
        </div>

        <div className={styles.profileContent} onClick={clickHandler}>
          <RxExit className={styles.ExitIcon} />
          <p> خروج</p>
        </div>
      </div>

      <div className={styles.leftSide}>
        <div className={styles.constructionContainer}>
          <div className={styles.construction}>
            <div className={styles.Specifications}>
              <p>نام کاربری :</p>
              <span>{tokenPayload.username}</span>
            </div>
            <div className={styles.Specifications}>
              <p>نام :</p>

              <span>{tokenPayload.name}</span>
            </div>
            <div className={styles.Specifications}>
              <p>نام خانوادگی :</p>
              <span>{tokenPayload.lastname}</span>
            </div>
            <div className={styles.Specifications}>
              <p>شماره موبایل :</p>
              <span>{tokenPayload.mobilenumber}</span>
            </div>
            <div className={styles.Specifications}>
              <p>ایمیل :</p>
              <span>{tokenPayload.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
