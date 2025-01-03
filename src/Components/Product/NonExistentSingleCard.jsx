import Image from 'next/image';
import React from 'react'
import styles from "./NonExistentSingleCard.module.css"
import ImageModal from '../Modal/ImageModal';
import Link from 'next/link';
import { AiOutlineLeft } from 'react-icons/ai';
import Carusel from '../Carusel/Carusel';
import InformationBar from './InformationBar';
import ProductAttribute from './ProductAttribute';

const NonExistentSingleCard = ({data , category}) => {
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
              

              </div>
            </div>
          </div>

          {data.category === "هوآوی " || data.category === "آنر" ? null : (
            <div className={styles.caruselContainer}>
              <div className={styles.titleCarusel}>
                <p>برند مشابه</p>
                <Link
                  href={`/brand/${data.category}`}
                  className={styles.ShowAll}
                >
                  نمایش همه
                  <AiOutlineLeft className={styles.AiOutlineLeft} />
                </Link>
              </div>
              <Carusel data={category} />
            </div>
          )}

          <div className={styles.informationProductContainer}>
            <InformationBar Att={data.attribute} data={data} stock={0}/>
          </div>
        </div>
    </div>
  )
}

export default NonExistentSingleCard