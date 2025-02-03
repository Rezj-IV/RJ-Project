"use client";
import React from "react";
import styles from "./MenuContents.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MenuContents = ({ itemId }) => {
  const rout = useRouter();

  const mobileLink = (props) => {
    rout.push(`/Product/categoryType/${props}/?class=mobile`);
  };
  const tabletLink = (props) => {
    rout.push(`/Product/categoryType/${props}/?class=tablet`);
  };
  const smartWatchLink = (props) => {
    rout.push(`/Product/categoryType/${props}/?class=smartWatch`);
  };
  const laptopLink = (props) => {
    rout.push(`/Product/categoryType/${props}/?class=laptop`);
  };
  const computerLink = (props) => {
    rout.push(`/Product/categoryType/${props}/?class=computer`);
  };
  const allInOneLink = (props) => {
    rout.push(`/Product/categoryType/${props}/?class=allInOne`);
  };
  const consoleLink = (props) => {
    rout.push(`/Product/categoryType/${props}/?class=console`);
  };
  const handsfreeLink = (props) => {
    rout.push(`/Product/categoryType/${props}/?class=handsfree`);
  };
  return (
    <>
      {itemId === 1 ? (
        <div className={`${styles.contentsContainer} ${styles.gap}`}>
          <div className={styles.contents}>
            <div>
              <span className={styles.khat}>|</span>
              <Link
                className={styles.headerContent}
                href="/Product/Class/mobile"
              >
 موبایل              </Link>
            </div>
            <div
              className={styles.linkContent}
              onClick={() => mobileLink("اپل")}
            >
              اپل{" "}
            </div>
            <div
              className={styles.linkContent}
              onClick={() => mobileLink("سامسونگ")}
            >
              {" "}
              سامسونگ
            </div>
            <div
              className={styles.linkContent}
              onClick={() => mobileLink("شیائومی")}
            >
              {" "}
              شیائومی
            </div>
          </div>
          <div className={styles.contents}>
            <div>
              <span className={styles.khat}>|</span>

              <Link
                className={styles.headerContent}
                href="/Product/Class/tablet"
              >
                تبلت
              </Link>
            </div>
            <div
              className={styles.linkContent}
              onClick={() => tabletLink("اپل")}
            >
              اپل{" "}
            </div>
            <div
              className={styles.linkContent}
              onClick={() => tabletLink("سامسونگ")}
            >
              {" "}
              سامسونگ
            </div>
            <div
              className={styles.linkContent}
              onClick={() => tabletLink("شیائومی")}
            >
              {" "}
              شیائومی
            </div>
          </div>
          <div className={styles.contents}>
            <div>
              <span className={styles.khat}>|</span>

              <Link
                className={styles.headerContent}
                href="/Product/Class/smartWatch"
              >
                ساعت هوشمند
              </Link>
            </div>
            <div
              className={styles.linkContent}
              onClick={() => smartWatchLink("اپل")}
            >
              اپل{" "}
            </div>
            <div
              className={styles.linkContent}
              onClick={() => smartWatchLink("سامسونگ")}
            >
              {" "}
              سامسونگ
            </div>
            <div
              className={styles.linkContent}
              onClick={() => smartWatchLink("شیائومی")}
            >
              {" "}
              شیائومی
            </div>
          </div>
        </div>
      ) : null}

      {itemId === 2 ? (
        <div className={styles.contentsContainer}>
          <div className={styles.contents}>
            <div>
              <span className={styles.khat}>|</span>

              <Link
                href="/Product/Class/laptop"
                className={styles.headerContent}
              >
                لپ تاپ
              </Link>
            </div>
            <div
              className={styles.linkContent}
              onClick={() => laptopLink("مک بوک")}
            >
              {" "}
              مک بوک
            </div>
            <div
              className={styles.linkContent}
              onClick={() => laptopLink("msi")}
            >
              {" "}
              لپ‌تاپ ام اس آی{" "}
            </div>
            <div
              className={styles.linkContent}
              onClick={() => laptopLink("ایسوس")}
            >
              {" "}
              لپ‌تاپ ایسوس{" "}
            </div>
          </div>
          <div className={styles.contents}>
            <div>
              <span className={styles.khat}>|</span>

              <Link
                href="/Product/Class/computer"
                className={styles.headerContent}
              >
                کامپیوتر
              </Link>
            </div>
            <div
              className={styles.linkContent}
              onClick={() => allInOneLink("Hp")}
            >
              All in one{" "}
            </div>
            <div
              className={styles.linkContent}
              onClick={() => computerLink("miniPc")}
            >
              Mini pc{" "}
            </div>
            <div
              className={styles.linkContent}
              onClick={() => computerLink("assembledCase")}
            >
              {" "}
              کیس اسمبل شده
            </div>
          </div>
          <div className={styles.contents}>
            <div>
              <span className={styles.khat}>|</span>

              <Link
                href="/Product/Class/console"
                className={styles.headerContent}
              >
                {" "}
                کنسول بازی
              </Link>
            </div>
            <div
              className={styles.linkContent}
              onClick={() => consoleLink("ps5")}
            >
              Ps5{" "}
            </div>
            <div
              className={styles.linkContent}
              onClick={() => consoleLink("ps4")}
            >
              {" "}
              Ps4
            </div>
            <div
              className={styles.linkContent}
              onClick={() => consoleLink("xbox")}
            >
              {" "}
              Xbox
            </div>
          </div>
          <div className={styles.contents}>
            <div>
              <span className={styles.khat}>|</span>

              <Link
                href="/Product/Class/handsfree"
                className={styles.headerContent}
              >
                {" "}
                هندزفری
              </Link>
            </div>
            <div
              className={styles.linkContent}
              onClick={() => handsfreeLink("اپل")}
            >
              اپل{" "}
            </div>
            <div
              className={styles.linkContent}
              onClick={() => handsfreeLink("سامسونگ")}
            >
              {" "}
              سامسونگ
            </div>
            <div
              className={styles.linkContent}
              onClick={() => handsfreeLink("شیائومی")}
            >
              {" "}
              شیائومی{" "}
            </div>
            <div
              className={styles.linkContent}
              onClick={() => handsfreeLink("انکر")}
            >
              {" "}
              انکر{" "}
            </div>
          </div>
        </div>
      ) : null}

      {itemId > 2 ? (
        <div className={styles.Developing}>

          <div className={styles.notification}>
            <h3>وب سایت در حال توسعه هست</h3>
            <h4>ممنون از صبر و شکیبایی شما</h4>
          </div>
        </div>
      ) : null}
      <div></div>
    </>
  );
};

export default MenuContents;
