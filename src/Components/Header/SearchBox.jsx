"use client";
import React, { useState } from "react";
import styles from "./SearchBox.module.css";
import * as repository from "../../../RestConfig/RestRequest";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { Form, Formik } from "formik";
import { FiSearch } from "react-icons/fi";

const SearchBox = () => {
  const [textSearch, setTextSearch] = useState("");

  const changeHandler = (e) => {
    e.preventDefault();
    setTextSearch(e.target.value);
  };
  // const rout = useRouter();
  // const Submit = () => {
  //   rout.push("/Login");
  // };

  return (
    <div className={styles.searchBoxContainer}>
      <Link href={`/search/${textSearch}`}>
      <CiSearch className={styles.searchIcon} />
      </Link>
      {/* <form onSubmit={Submit}> */}
        <input
          className={styles.searchBox}
          type="text"
          onChange={changeHandler}
          placeholder="محصول ، برند  یا  دسته مورد  نظرتان  را  جستجو  کنید"
        />
      {/* </form> */}
    </div>
  );
};

export default SearchBox;
