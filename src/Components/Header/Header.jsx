import React from "react";
import LogSignUI from "./LogSignUI";
import SearchBox from "./SearchBox";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.HeaderRightSide}>
        <Link href="/">
        <Image src="/logo/headerLogo.jpeg"  width={80} height={80} alt="headerLogo"/>

        </Link>
        <SearchBox />
      </div>
      <div>
        
        <LogSignUI />
      </div>
    </div>
  );
};

export default Header;
