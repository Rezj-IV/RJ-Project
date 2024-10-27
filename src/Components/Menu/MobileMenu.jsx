"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./MobileMenu.module.css";
import Link from "next/link";
import Image from "next/image";
import * as RequestRs from "../../../RestConfig/RestRequest";


const MobileMenu = (props) => {
  const [cheak, setCheak] = useState(false);
  const [menuOption, setMenuOption] = useState([]);
  // const ClickToMenu = () => {
  //   setfirst((prev) => !prev);
  //   <MainMenu Cheak={menuOption}/>
  //   console.log(first);

  // };
  const CloseMenu = () => {
    setCheak(false);
  };
  useEffect(() => {
    fetch("http://localhost:9090/ShowController")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMenuOption(data);
        console.log(menuOption);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
console.log(props.ShowMenu);
  return (
    <>
      <nav className={styles.navbar}>
        <div>
          {props.ShowMenu === true ? (
            <ul>
              <AiOutlineClose
                onClick={CloseMenu}
                className={styles.CloseMenu}
              />
              <div >
                {menuOption.map((item) => {
                  return (
                    <div className={styles.otherOption} key={item.id}>
                      <li>
                        <div className={styles.ParentLogo}>
                          <Image
                            className={styles.LogoOption}
                            src={item.logoUrl}
                            alt={item.name}
                            width={28}
                            height={28}
                          />
                        </div>
                        <div className={styles.ParentLink}>
                          <Link className={styles.LinkOption} href="">
                            {item.name}
                          </Link>
                        </div>
                      </li>
                    </div>
                  );
                })}
              </div>
            </ul>
          ) : null}
        </div>
      </nav>
      
      
    </>
  );
};

export default MobileMenu;
