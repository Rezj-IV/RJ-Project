"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./SearchAndBasket.module.css";
import { RiShoppingCartLine } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import SearchBox from "./SearchBox";
import { CiSearch } from "react-icons/ci";
import { HiArrowRight } from "react-icons/hi";

const SearchAndBasket = () => {
  const selector = useSelector((state) => state.ShoppingCart);
  const [showSearch, setShowSearch] = useState(false);
  const [textSearch, setTextSearch] = useState("");

  const changeHandler = (e) => {
    e.preventDefault();
    setTextSearch(e.target.value);
  };

  return (
    <div className={styles.searchAndBasketContainer}>
      <div onClick={() => setShowSearch(!showSearch)}>
        <FiSearch className={styles.Icon} />
      </div>
      <Link href="/ShoppingCart" className={styles.ShoppingCart}>
        <RiShoppingCartLine className={styles.Icon} />
        {selector.totalCount !== 0 ? <div>{selector.totalCount}</div> : null}
      </Link>
      {showSearch && (
        <div className={styles.SearchBoxContainer}>
          <div className={styles.searchBox}>
            {/* <Link href={`/search/${textSearch}`}>
              <CiSearch className={styles.searchIcon} />
            </Link> */}
            <HiArrowRight
              onClick={() => setShowSearch(!showSearch)}
              className={styles.ArrowRight}
            />

            <input
              className={styles.searchBoxInput}
              type="text"
              onChange={changeHandler}
              placeholder="جستجو  در   کالاهای  آر جی لند"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAndBasket;
