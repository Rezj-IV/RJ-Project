import React from "react";
import Image from "next/image";
import styles from "./ShoppingCartItem.module.css";
import ShoppingCartItemCountB from "./ShoppingCartItemCountB";
import { TbBuildingWarehouse } from "react-icons/tb";
import RemoveProduct from "./RemoveProduct";
import { PiSealCheck } from "react-icons/pi";
import { BsShopWindow } from "react-icons/bs";
import Link from "next/link";

const ShoppingCartItem = ({ Product }) => {
  return (
    <div className={styles.mainContainer}>
      <div
        className={
          Product.incredibleOffers === true
            ? styles.incredibleOffersLogo
            : styles.removePrdContainer
        }
      >
        {Product.incredibleOffers === true ? (
          <pre className={styles.offerText}>
            𝓡𝓙
            <br />
            𝕆𝕗𝕗
            <i>％ </i>
          </pre>
        ) : null}
        <RemoveProduct PrdId={Product.id} />
      </div>
      <div className={styles.container}>
        <div className={styles.productNSContainer}>
          <Link href={`/Product/${Product.id}`} className={styles.productName}>
            <p>{Product.name}</p>
          </Link>
          <div className={styles.sellerContainer}>
            <div className={styles.warranty}>
              <PiSealCheck className={styles.iconShop} />
              <span className={styles.sellerTextA}>
                گارانتی اصالت و سلامت فیزیکی کالا
              </span>
            </div>
            <div className={styles.seller}>
              <BsShopWindow className={styles.iconShop} />
              <span className={styles.sellerTextA}>{Product.seller}</span>
            </div>

            <div className={styles.store}>
              <TbBuildingWarehouse className={styles.iconShop} />
              <span>موجود در انبار</span>
              <span className={styles.sellerTextB}>{Product.seller}</span>
              <span> ( ارسال فوری )</span>
            </div>
          </div>
        </div>
        <div className={styles.productImage}>
          <Link href={`/Product/${Product.id}`}>
            <Image
              priority
              width={216}
              height={216}
              alt={Product.name}
              src={Product.indexImageUrl}
            />
          </Link>
        </div>
      </div>

      <div className={styles.Details}>
        <div className={styles.productDetails}>
          <div className={styles.mainPriceContainer}>
            {Product.priceWithDiscount === 0 ? (
              <div className={`${styles.priceContainer} ${styles.Mp} `}>
                <div className={styles.mainPrice}>
                  {Product.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  <span className={styles.toman}>تومان</span>
                </div>
              </div>
            ) : (
              <>
                <div className={`${styles.offPrcent}`}>
                  <span>
                    {" "}
                    {Math.floor(
                      ((Product.price - Product.priceWithDiscount) /
                        Product.price) *
                        100
                    )}
                  </span>
                  <span className={styles.prcent}>%</span>
                </div>
                <div className={`${styles.priceContainer}`}>
                  <div className={`${styles.price}`}>
                    {Product.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                  <div className={styles.priceWithDiscount}>
                    {Product.priceWithDiscount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    <span className={styles.toman}>تومان</span>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className={styles.counterAndColor}>
            <div className={styles.colorContainer}>color</div>
            <div className={styles.ShoppingCartItemCountB}>
              <ShoppingCartItemCountB PrdId={Product.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
