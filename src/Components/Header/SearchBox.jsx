"use client";
import React, {useState } from "react";
import styles from "./SearchBox.module.css";
import * as repository from "../../../RestConfig/RestRequest";
import Link from "next/link";
const SearchBox = () => {
  const [textSearch, setTextSearch] = useState([]);
  
 

  const changeHandler = (e) => {
    e.preventDefault();
    setTextSearch(e.target.value);

  };

  
  
  return (
    <div>
      <input type="text" onChange={changeHandler} />
      <Link href={`search/${textSearch}`}>search</Link>
    </div>
  );
};

export default SearchBox;
