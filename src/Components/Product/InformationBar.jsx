import React, { useId } from "react";
import styles from "./InformationBar.module.scss";
import Image from "next/image";
import { BsBoxSeam, BsShop } from "react-icons/bs";
import { GoShieldCheck } from "react-icons/go";
import { FiBox } from "react-icons/fi";
import CommentsSection from "./CommentsSection";

const InformationBar = ({ Att, data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.informationBarContainer}>
        {Att.length !== 0 ? (
          <div>
            <a href="">مشخصات فنی</a>
          </div>
        ) : null}
        <div>
          <a href=""> نظرات کاربران</a > 
        </div>
      </div>
      <div className={styles.informationContainer}>
        {Att.length !== 0 ? (
          <div className={styles.informationBar}>
            {Att.map((item) => {
              return (
                <div className={styles.specificationsProductContainer}>
                  <div className={styles.title}>
                    <span> •</span>
                    <h1>مشخصات فنی</h1>
                  </div>

                  <div className={styles.specificationsProduct}>
                    <h4>سیستم عامل :</h4>
                    <p>{item.operatingsystem}</p>
                  </div>
                  <div className={styles.specificationsProduct}>
                    <h4>سایز صفحه نمایش :</h4>

                    <p>{item.screensize}</p>
                  </div>
                  <div className={styles.specificationsProduct}>
                    <h4>رزولوشن :</h4>

                    <p>{item.resolution}</p>
                  </div>
                  <div className={styles.specificationsProduct}>
                    <h4>تراشه:</h4>

                    <p>{item.chip}</p>
                  </div>
                  <div className={styles.specificationsProduct}>
                    <h4>پردازنده‌:</h4>

                    <p>{item.processor}</p>
                  </div>

                  <div className={styles.specificationsProduct}>
                    <h4>حافظه داخلی:</h4>

                    <p>{item.internalmemory}</p>
                  </div>
                  <div className={styles.specificationsProduct}>
                    <h4>حافظه رم:</h4>

                    <p>{item.ram}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}

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
                {data.name.substring(0, 65)}
                {data.name.length > 65 ? "..." : null}
              </div>
            </div>

            <div className={styles.sellerContainer}>
              <div className={styles.seller}>
                <BsShop className={styles.iconShop} />
                <span>{data.seller}</span>
              </div>
              <div className={styles.store}>
                <FiBox className={styles.iconShop} />
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
                <div className={`${styles.priceDetail}`}>
                  <div className={`${styles.priceContainer}`}>
                    <div className={styles.mainPrice}>
                      {data.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      <span className={styles.priceToman}>تومان</span>
                    </div>
                  </div>
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
                    <div className={`${styles.price}`}>
                      {data.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </div>
                    <div className={styles.priceWithDiscount}>
                      {data.priceWithDiscount
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      <span className={styles.priceToman}>تومان</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {data.stock < 3 ? (
              <div className={styles.remainingContainer}>
                <div className={styles.remaining}>
                  <BsBoxSeam className={styles.FiBox} />
                  <span>{data.stock}</span>
                  <span>عدد در انبار باقی مانده</span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className={styles.commentsProduct}>
      
        <CommentsSection  dataPrd={data}/>
      </div>
    </div>
  );
};

export default InformationBar;
