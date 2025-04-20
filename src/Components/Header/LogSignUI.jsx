"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./LogSignUI.module.css";
import { BiLogOut } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { RxExit } from "react-icons/rx";
import { removeToken } from "@/Redux/Slices/UserSlice";
import { AiOutlineUser } from "react-icons/ai";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

const LogSignUI = () => {
  const dispatch = useDispatch();
  const jwt = useSelector((state) => state.Users);
  const [jwtData, setJwtData] = useState();
  useEffect(() => {
     if (jwt.token) {
      setJwtData(jwtDecode(jwt.token).username);
     }
 

 
  }, []);
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
                {jwtData && <span className={styles.username}>{jwtData}</span>}
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
