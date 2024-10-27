"use client";
import React, { useCallback, useState } from "react";
import styles from "./MainMenu.module.css";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { FaPercent } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
const MainMenu = () => {
  const [cheak, setCheak] = useState(false);

  const ClickToMenu = () => {
    setCheak((prev) => !prev);
    <MobileMenu ShowMenu={cheak} />;

    console.log(cheak);
  };
 
  

  return (
    <div>
      <nav className={styles.navM}>
        <ul className={styles.ulM}>
          <li className={styles.liM}>
            <Link className={styles.linkM} href="">
              <div className={styles.MObileResponse}>
                <AiOutlineMenu
                  onClick={ClickToMenu}
                  className={styles.AiOutlineMenu}
                />
                <span>دسته بندی محصولات</span>
              </div>
            </Link>
          </li>

          <li className={styles.liM}>
            <Link className={styles.linkM} href="">
            <FaPercent className={styles.offLogo}/>
            <span>تکنوآف</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainMenu;
