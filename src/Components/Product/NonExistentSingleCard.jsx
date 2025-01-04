import Image from "next/image";
import React from "react";
import styles from "./NonExistentSingleCard.module.css";
import ImageModal from "../Modal/ImageModal";
import Link from "next/link";
import { AiOutlineLeft } from "react-icons/ai";
import Carusel from "../Carusel/Carusel";
import InformationBar from "./InformationBar";
import ProductAttribute from "./ProductAttribute";
import { CiBellOn } from "react-icons/ci";

const NonExistentSingleCard = ({ data, category }) => {
  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.dataProductContainer}>
          <div className={styles.descriptionContainer}>
            <div className={styles.nameContainer}>
              <p className={styles.name}>{data.name}</p>
              <p className={styles.nameb}>{data.nameB}</p>

              <div className={styles.commentContainer}>
                <span className={styles.comment}>نظرات کاربران</span>
                <span className={styles.numberComment}>0نظر</span>
              </div>
              <div className={styles.nonExistentContainer}>
                <div className={styles.line}></div>
                <div>
                  <span className={styles.non}>ناموجود</span>
                </div>
                <div className={styles.line}></div>
              </div>
              {data.attribute.length !== 0 ? (
                <div>
                  <h3 className={styles.mainFeatures}>ویژگی‌های اصلی</h3>
                  <div className={styles.attributeContainer}>
                    {data.attribute.map((item) => {
                      return <ProductAttribute Att={item} />;
                    })}
                  </div>
                </div>
              ) : null}
            </div>

            <div className={styles.imageContainer}>
              <div className={styles.prdImage}>
                <Image
                  src={data.indexImageUrl}
                  width={370}
                  height={370}
                  alt={data.name}
                  priority
                />
              </div>
              <div className={styles.otherImage}>
                <ImageModal
                  images={data.images}
                  namePrd={data.name}
                  mainImage={data.indexImageUrl}
                />
              </div>
            </div>
          </div>

          <div className={styles.productDetailsContainer}>
            <div className={styles.productDetailsChild}>
              <div className={styles.DetailsNonExistentContainer}>
                <div className={styles.DetailsLine}></div>
                <div>
                  <span className={styles.DetailsNon}>ناموجود</span>
                </div>
                <div className={styles.DetailsLine}></div>
              </div>
              <div className={styles.DetailsText}>
              <span>این محصول در حال حاضر موجود نیست. می‌توانید </span>

                <span className={styles.substituteText}> از محصولات جایگزین</span>
                <span> در پایین کالا دیدن نمایید .</span>

              </div>
              <div className={styles.notificationContainer}>
                <p>موجود شد اطلاع بده</p>
                <CiBellOn  className={styles.notificationIcon}/>
              </div>
            </div>
          </div>
        </div>

        {data.category === "هوآوی " || data.category === "آنر" ? null : (
          <div className={styles.caruselContainer}>
            <div className={styles.titleCarusel}>
              <p>برند مشابه</p>
              <Link href={`/brand/${data.category}`} className={styles.ShowAll}>
                نمایش همه
                <AiOutlineLeft className={styles.AiOutlineLeft} />
              </Link>
            </div>
            <Carusel data={category} />
          </div>
        )}

        <div className={styles.informationProductContainer}>
          <InformationBar Att={data.attribute} data={data} stock={0} />
        </div>
      </div>
    </div>
  );
};

export default NonExistentSingleCard;
