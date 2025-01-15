import React from "react";
import FooterData from "./FooterData";
import * as repository from "../../../RestConfig/RestRequest";
import styles from "./Footer.module.css";
import { IoIosArrowUp } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const Footer = async () => {
  return (
    <div className={styles.footer}>
      <div className={styles.headerFooter}>
        <Link href="/">
          <Image src="/logo/RJLand.png" width={130} height={130} alt="RJLand" />
        </Link>{" "}
        <div>
          <Link href="/" className={styles.goUp}>
            <p>بازگشت به بالا</p>
            <IoIosArrowUp className={styles.upIcon} />
          </Link>
        </div>
      </div>
      <div>
        <FooterData />
      </div>
    </div>
  );
};

export default Footer;
