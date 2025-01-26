import React from "react";
import LogSignUI from "./LogSignUI";
import SearchBox from "./SearchBox";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import Basket from "./Basket";
const Header = () => {
  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.HeaderRightSide}>
        <Link href="/" className={styles.RJLandLogo}>
          <Image
            src="/logo/RJLand.png"
            width={105}
            height={105}
            alt="RJLand"
            priority
          />
        </Link>
        <SearchBox />
      </div>
      <div className={styles.HeaderLeftSide}>
        <LogSignUI />

        <Basket />
      </div>
    </div>
  );
};

export default Header;
