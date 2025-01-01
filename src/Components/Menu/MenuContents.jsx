import React from "react";
import styles from "./MenuContents.module.css";
import Link from "next/link";
import Image from "next/image";

const MenuContents = async ({ itemId }) => {
  return (
    <>
      {itemId === 1 ? (
        <div className={styles.contentsContainerA}>
          <div className={styles.contents}>
            <div>
              <span className={styles.khat}>|</span>
              <Link className={styles.headerContent} href="/Product/Class/mobile">
                برندهای مختلف گوشی موبایل
              </Link>
            </div>
            <Link className={styles.linkContent} href="/">
              اپل{" "}
            </Link>
            <Link className={styles.linkContent} href="/">
              {" "}
              سامسونگ
            </Link>
            <Link className={styles.linkContent} href="/">
              {" "}
              شیائومی
            </Link>
          </div>
          <div className={styles.contents}>
            <div>
              <span className={styles.khat}>|</span>

              <Link className={styles.headerContent} href="/Product/Class/tablet">
                تبلت
              </Link>
            </div>
            <Link className={styles.linkContent} href="/">
              اپل{" "}
            </Link>
            <Link className={styles.linkContent} href="/">
              {" "}
              سامسونگ
            </Link>
            <Link className={styles.linkContent} href="/">
              {" "}
              شیائومی
            </Link>
          </div>
          <div className={styles.contents}>
            <div>
              <span className={styles.khat}>|</span>

              <Link className={styles.headerContent} href="/Product/Class/smartWatch">
                ساعت هوشمند
              </Link>
            </div>
            <Link className={styles.linkContent} href="/">
              اپل{" "}
            </Link>
            <Link className={styles.linkContent} href="/">
              {" "}
              سامسونگ
            </Link>
            <Link className={styles.linkContent} href="/">
              {" "}
              شیائومی
            </Link>
          </div>
        </div>
      ) : null}

      {itemId === 2 ? (
        <div className={styles.contentsContainer}>
          <div className={styles.contents}>
            <div>
              <span className={styles.khat}>|</span>

              <Link href="/Product/Class/laptop" className={styles.headerContent}>
                لپ تاپ
              </Link>
            </div>
            <Link className={styles.linkContent} href="/">
              {" "}
              مک بوک
            </Link>
            <Link className={styles.linkContent} href="/">
              {" "}
              لپ‌تاپ ام اس آی{" "}
            </Link>
            <Link className={styles.linkContent} href="/">
              {" "}
              لپ‌تاپ ایسوس{" "}
            </Link>
          </div>
          <div className={styles.contents}>
            <div>
              <span className={styles.khat}>|</span>

              <Link href="/Product/Class/computer" className={styles.headerContent}>
                کامپیوتر
              </Link>
            </div>
            <Link className={styles.linkContent} href="/">
              All in one{" "}
            </Link>
            <Link className={styles.linkContent} href="/">
              Mini pc{" "}
            </Link>
            <Link className={styles.linkContent} href="">
              {" "}
              کیس اسمبل شده
            </Link>
          </div>
          <div className={styles.contents}>
            <div>
              <span className={styles.khat}>|</span>

              <Link href="/Product/Class/console" className={styles.headerContent}>
                {" "}
                کنسول بازی
              </Link>
            </div>
            <Link className={styles.linkContent} href="/">
              Ps5{" "}
            </Link>
            <Link className={styles.linkContent} href="/">
              {" "}
              Ps4
            </Link>
            <Link className={styles.linkContent} href="/">
              {" "}
              Xbox
            </Link>
          </div>
          <div className={styles.contents}>
            <div>
              <span className={styles.khat}>|</span>

              <Link href="/Product/Class/handsfree" className={styles.headerContent}>
                {" "}
                هندزفری
              </Link>
            </div>
            <Link className={styles.linkContent} href="/">
              اپل{" "}
            </Link>
            <Link className={styles.linkContent} href="/">
              {" "}
              سامسونگ
            </Link>
            <Link className={styles.linkContent} href="/">
              {" "}
              شیائومی{" "}
            </Link>
            <Link className={styles.linkContent} href="/">
              {" "}
              انکر{" "}
            </Link>
          </div>
        </div>
      ) : null}

      {itemId > 2 ? (
        <div className={styles.Developing}>
          <Image
            src="/logo/developingLogo.jpg"
            alt="Developing"
            width={150}
            height={150}
            className={styles.developingLogo}
          />
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
