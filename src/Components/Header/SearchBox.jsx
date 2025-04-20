"use client";
import React, { useState } from "react";
import styles from "./SearchBox.module.css";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [textSearch, setTextSearch] = useState("");

  const rout = useRouter();

  const changeHandler = (e) => {
    setTextSearch(e.target.value);
    e.preventDefault();
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      rout.push(`/search/${textSearch}`);
    }
  };
  return (
    <div className={styles.searchBoxContainer} >
      <CiSearch className={styles.searchIcon} />

      <input
        className={styles.searchBox}
        type="text"
        onKeyDown={handleKeyDown}
        onChange={changeHandler}
        value={textSearch}
        placeholder="محصول ، برند  یا  دسته مورد  نظرتان  را  جستجو  کنید"
      />
    </div>
  );
};

export default SearchBox;
