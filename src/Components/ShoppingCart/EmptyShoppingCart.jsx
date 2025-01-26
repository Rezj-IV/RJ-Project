import React from "react";
import styles from "./EmptyShoppingCart.module.css";
import Image from "next/image";
import Link from "next/link";
import { PiSealPercent  } from "react-icons/pi";
import { MdOutlineChevronLeft } from "react-icons/md";
const EmptyShoppingCart = () => {
  return (
    <div className={styles.emptyBasketContainer}>
      <div className={styles.emptyBasketContent}>
        <Image
        priority
          src="/images/mptyBasket.png"
          alt="EmptyShoppingCart"
          height={300}
          width={300}
        />
        <h2>سبد خرید شما خالیه!</h2>
        <p>برای مشاهده تخفیف‌های امروز، روی لینک زیر کلیک کنید.</p>
        <div className={styles.mostDiscounts}>
          <PiSealPercent  className={styles.percentIcon} />

          <Link href="IncredibleOffers" className={styles.goToIncredibleOffer}>بیشترین تخفیف های امروز</Link>
          <MdOutlineChevronLeft className={styles.lefyIcon}/>
        </div>
      </div>
    </div>
  );
};

export default EmptyShoppingCart;
