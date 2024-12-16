import React, { useId } from "react";
import styles from "./InformationBar.module.scss";
import Image from "next/image";
import { BsBoxSeam, BsShop } from "react-icons/bs";
import { GoShieldCheck } from "react-icons/go";

const InformationBar = ({ Att, data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.informationBar}>
        <div>
          <p>مشخصات فنی</p>
        </div>
        <div>
          <p>نظرات کاربران</p>
        </div>
      </div>
      <div className={styles.informationContainer}>
        <div className={styles.informationBarContainer}>
          <div className={styles.specificationsProductContainer}>
            <h1>مشخصات فنی</h1>

            <div className={styles.specificationsProduct}>
              <h4>سیستم عامل :</h4>
              <p>{Att.operatingsystem}</p>
            </div>
            <div className={styles.specificationsProduct}>
              <h4>سایز صفحه نمایش :</h4>

              <p>{Att.screensize}</p>
            </div>

            <div className={styles.specificationsProduct}>
              <h4>رزولوشن :</h4>

              <p>{Att.resolution}</p>
            </div>

            <div className={styles.specificationsProduct}>
              <h4>تراشه:</h4>

              <p>{Att.chip}</p>
            </div>

            <div className={styles.specificationsProduct}>
              <h4>پردازنده‌:</h4>

              <p>{Att.processor}</p>
            </div>

            <div className={styles.specificationsProduct}>
              <h4>حافظه داخلی:</h4>

              <p>{Att.internalmemory}</p>
            </div>

            <div className={styles.specificationsProduct}>
              <h4>حافظه رم:</h4>

              <p>{Att.ram}</p>
            </div>
          </div>
        </div>
        <div className={styles.dataProductContainer}>
          <div className={styles.dataProduct}>
            <div className={styles.nameAndImgContainer}>
              <div className={styles.imagePrd}>
                <Image
                  src={data.indexImageUrl}
                  alt={data.name}
                  width={90}
                  height={90}
                />
              </div>
              <div className={styles.namePrd}>
                <span>{data.name}</span>
              </div>
            </div>

            <div className={styles.seller}>
              <BsShop className={styles.iconShop} />
              <span>{data.seller}</span>
              <div>
                <BsBoxSeam/>
                <span>موجود در انبار</span>
                <span>{data.seller}</span>
                <span> ( ارسال فوری )</span>
              </div>
            </div>

            <div className={styles.warranty}>
              <GoShieldCheck className={styles.iconShop} />
              <span>گارانتی اصالت و سلامت فیزیکی کالا</span>
            </div>

            <div>
              {data.priceWithDiscount === 0 ? (
                <div className={`${styles.priceContainer}`}>
                  {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  تومان
                </div>
              ) : (
                <div className={`${styles.priceDetail}`}>
                  <div className={styles.offPrcentContainer}>
                    <div className={`${styles.offPrcent}`}>
                      <div className={styles.offPrcentNumber}>
                        {Math.floor(data.price - data.priceWithDiscount)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </div>
                      <div className={styles.offPrcentToman}> تومان تخفیف</div>
                    </div>
                  </div>
                  <div className={`${styles.priceContainer}`}>
                    <div className={styles.priceWithDiscount}>
                      {data.priceWithDiscount
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </div>
                    <div className={`${styles.price}`}>
                      {data.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      <span className={styles.priceToman}>تومان</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.commentsProduct}></div>
    </div>
  );
};

export default InformationBar;
