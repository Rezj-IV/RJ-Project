"use client";
import React, { useState } from "react";
import styles from "./SearchBox.module.css";
import * as repository from "../../../RestConfig/RestRequest";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const SearchBox = () => {
  const [textSearch, setTextSearch] = useState([]);

  const changeHandler = (e) => {
    e.preventDefault();
    setTextSearch(e.target.value);
  };

  return (
    <div className={styles.searchBoxContainer}>
        <Link href={`search/${textSearch}`}>
      <CiSearch className={styles.searchIcon}/>

      
      </Link>
      <input type="text" onChange={changeHandler} className={styles.searchBox} placeholder="محصول، برند یا دسته مورد نظرتان را جستجو کنید" />
    
    </div>
  );
};

export default SearchBox;
