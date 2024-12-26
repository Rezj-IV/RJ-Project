import React from "react";
import styles from "./Card.module.scss";
import Image from "next/image";
import Link from "next/link";
import UnavailableCarusel from "../Carusel/UnavailableCarusel";
import { BsBoxSeam } from "react-icons/bs";

const Card = ({ product }) => {
  return (
    <Link
      style={{ textDecoration: "none", color: "#272951" }}
      href={`/Product/${product.id}`}
    >
      {product.stock === 0 ? (
        <UnavailableCarusel product={product} />
      ) : (
        <div className={styles.mainContainer}>
          <div className={`${styles.incredibleOfferImageContainer}`}>
            {product.incredibleOffers === true ? (
              <Image
                className={`${styles.incredibleOfferImage}`}
                alt="IncredibleOffer"
                src="/IconImages/IncredibleOffer.png"
                width={110}
                height={15}
              />
            ) : null}
          </div>

          <div className={styles.MainImageContainer}>
            <div className={styles.colorContainer}>
              {product.colorID.map((item) => {
                return (
                  <div
                    className={styles.color}
                    key={item.id}
                    style={{ backgroundColor: item.color }}
                  ></div>
                );
              })}
            </div>

            <div className={styles.image}>
              <Image
                alt={product.name}
                src={product.indexImageUrl}
                width={195}
                height={195}
              />
            </div>
          </div>
          <div className={`${styles.productNameContainer}`}>
            <p align="justify" className={`${styles.productName}`}>
              {" "}
              {product.name.substring(0, 60)}
              {product.name.length > 60 ? "..." : null}
            </p>

            {product.stock < 3 ? (
              <div className={styles.remainingContainer}>
                <div className={styles.remaining}>
                  <BsBoxSeam className={styles.FiBox} />
                  <span>{product.stock}</span>
                  <span>عدد در انبار باقی مانده</span>
                </div>
              </div>
            ) : null}
          </div>

          {product.priceWithDiscount === 0 ? (
            <div className={`${styles.priceContainer}`}>
          <div className={styles.mainPrice}>
          {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
          <span className={styles.tomanOffIcon}>تومان</span>
          </div>
            </div>
          ) : (
            <div className={`${styles.priceDetail}`}>
              <label className={`${styles.offPrcent}`}>
                <span>
                  {" "}
                  {Math.floor(
                    ((product.price - product.priceWithDiscount) /
                      product.price) *
                      100
                  )}
                </span>
                <span className={styles.prcent}>%</span>
              </label>

              <div className={`${styles.priceContainer}`}>
                <div>
                  <div className={styles.OffPrice}>
                    {product.priceWithDiscount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>

                  <span className={styles. tomanOffIcon}>تومان</span>
                </div>
                <div>
                  <div className={`${styles.price}`}>
                    {product.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                  <span className={styles.tomanIcon}>تومان</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </Link>
  );
};

export default Card;
