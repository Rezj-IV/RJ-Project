import React from 'react'
import styles from "./Basket.module.css"
import { RiShoppingCartLine } from "react-icons/ri";
import Link from 'next/link';
const Basket = () => {
  return (
    <div>
        <Link href='/ShoppingCart'>
        <div className={styles.ShoppingCartButton}>
            <RiShoppingCartLine className={styles.ShoppingCartIcon}/>
        </div>
        </Link>
    </div>
  )
}

export default Basket