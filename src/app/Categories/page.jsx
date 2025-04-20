import MobileMenu from "@/Components/Menu/MobileMenu";
import React from "react";
import styles from "./Categories.module.css";
import Header from "@/Components/Header/Header";
import LowerPart from "@/Components/LowerPart/LowerPart";
const Categories = () => {
  return (
    <>
      <Header />
      <div className={styles.Categories}>
        <MobileMenu />
      </div>
      <LowerPart />
    </>
  );
};

export default Categories;
