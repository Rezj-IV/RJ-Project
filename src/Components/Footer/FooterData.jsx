import React from "react";
import styles from "./FooterData.module.scss";
import { FiPhone } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
const FooterData = ({ FtData }) => {
  return (
    <div className={styles.footerDataContainer}>
      <div className={styles.footerData}>
        <div className={styles.rightSideFooter}>
          <div className={styles.Addresses}>
            <FiPhone className={styles.phoneIcon} />
            <span>تلفن :</span>
            <p>021-36355980</p>
          </div>
          <div className={styles.Addresses}>
            <CgMail className={styles.gmailIcon} />
            <span>ایمیل :</span>
            <p>rezj.iv @ gmail . com</p>
          </div>
        </div>

        <div className={styles.leftSideFooter}>
          <div className={styles.leftSideContent}>
            <h3>دسترسی سریع</h3>
            <ul>
              <li>
                <Link href="/">گوشی سامسونگ</Link>
              </li>
              <li>
                <Link href="/">گوشی آیفون</Link>
              </li>
              <li>
                <Link href="/">گوشی شیائومی</Link>
              </li>
              <li>
                <Link href="/">قیمت لپ تاپ</Link>
              </li>
              <li>
                <Link href="/">هندزفری بلوتوثی</Link>
              </li>
              <li>
                <Link href="/">لپ تاپ ایسوس</Link>
              </li>
            </ul>
          </div>
          <div className={styles.leftSideContent}>
            <h3>پرفروش ترین محصولات</h3>
            <ul>
              <li>
                <Link href="/">تبلت سامسونگ</Link>
              </li>
              <li>
                <Link href="/">مک بوک</Link>
              </li>
              <li>
                <Link href="/">ساعت هوشمند</Link>
              </li>
              <li>
                <Link href="/">پلی استیشن</Link>
              </li>
              <li>
                <Link href="/">Airpods</Link>
              </li>
            </ul>
          </div>
          <div className={styles.leftSideContentDisabled}>
            <h3>درباره ما</h3>
            <ul>
              <li>
                <p>اهداف و تعهدهای ما</p>
              </li>
              <li>
                <p>سوالات متداول</p>
              </li>
              <li>
                <p>فروشگاه های حضوری</p>
              </li>
              <li>
                <p>تماس با ما</p>
              </li>
            </ul>
          </div>
          <div className={styles.leftSideContentDisabled}>
            <h3>قوانین و مقررات</h3>
            <ul>
              <li>
                <p>قوانین و مقررات</p>
              </li>
              <li>
                <p>حریم خصوصی کاربران</p>
              </li>
              <li>
                <p>چرا آر جی لند؟</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.symbols}>
        <div className={styles.symbolImage}>
          <Image width={60} height={60} alt="" src="/Symbol/etemad.png" />
        </div>
        <div className={styles.symbolImage}>
          <Image
            width={45}
            height={60}
            alt=""
            src="/Symbol/National Union.svg"
          />
        </div>
        <div className={styles.symbolImage}>
          <Image width={60} height={60} alt="" src="/Symbol/c5.png" />
        </div>
      </div>
      <div className={styles.foundation}>
        <span>۱۴۰۳</span>
        <p>تمامی حقوق مادی و معنوی این سایت متعلق به Rj Land می‌باشد.</p>
      </div>
    </div>
  );
};

export default FooterData;
