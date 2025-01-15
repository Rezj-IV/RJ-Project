import React from "react";
import styles from "./ProductCarusel.module.scss";
import Carusel from "../Carusel/Carusel";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
import { FaBloggerB } from "react-icons/fa";
import {
  HomeImagesEighthSection,
  HomeImagesEleventhSection,
  HomeImagesFifthSection,
  HomeImagesFirstSection,
  HomeImagesFourthSection,
  HomeImagesNinthSection,
  HomeImagesSecondSection,
  HomeImagesSeventhSection,
  HomeImagesSixthSection,
  HomeImagesTenthSection,
  HomeImagesThirdSection,
} from "./HomeImages";

const ProductCarusel = ({ data , homeImages }) => {
  let result = data.filter((item) => {
    return item.flagBearer === true;
  });
  let result2 = data.filter((item) => {
    return item.type.includes("laptop");
  });
  let result3 = data.filter((item) => {
    return item.type.includes("computer");
  });
  let result4 = data.filter((item) => {
    return item.type.includes("console");
  });
  let result5 = data.filter((item) => {
    return item.bestSelling === true;
  });

 
  return (
    <div>
      <HomeImagesFirstSection images={homeImages}/> 
      <div className={styles.caruselContainer}>
        <div className={styles.titleCarusel}>
          <p>پرچمداران هوشمند</p>
          <Link
            href="/Product/specialCategory/flagBearer"
            className={styles.ShowAll}
          >
            نمایش همه
            <AiOutlineLeft className={styles.AiOutlineLeft} />
          </Link>
        </div>

        <Carusel data={result} />
      </div>
      <HomeImagesSecondSection images={homeImages}/>
      <HomeImagesThirdSection images={homeImages}/>

      <div className={styles.caruselContainer}>
        <div className={styles.titleCarusel}>
          <span>
            {" "}
            لپ‌ تاپ‌ها در
            <span className={styles.rjLand}>ار جی لند</span>
          </span>

          <Link href="/Product/Class/laptop" className={styles.ShowAll}>
            نمایش همه
            <AiOutlineLeft className={styles.AiOutlineLeft} />
          </Link>
        </div>
        <Carusel data={result2} />
      </div>
      <HomeImagesFourthSection images={homeImages}/>
      <HomeImagesFifthSection images={homeImages}/>

      <div className={styles.caruselContainer}>
        <div className={styles.titleCarusel}>
          <p>کامپیوتر و تجهیزات</p>
          <Link href="/Product/Class/computer" className={styles.ShowAll}>
            نمایش همه
            <AiOutlineLeft className={styles.AiOutlineLeft} />
          </Link>
        </div>
        <Carusel data={result3} />
      </div>
      <HomeImagesSixthSection images={homeImages}/>
      <HomeImagesSeventhSection images={homeImages}/>
      <HomeImagesEighthSection images={homeImages}/>

      <div className={styles.caruselContainer}>
        <div className={styles.titleCarusel}>
          <span>
            تجربه گیم با
            <span className={styles.rjLand}>ار جی لند</span>
          </span>
          <Link href="/Product/Class/console" className={styles.ShowAll}>
            نمایش همه
            <AiOutlineLeft className={styles.AiOutlineLeft} />
          </Link>
        </div>
        <Carusel data={result4} />
      </div>

      <HomeImagesNinthSection images={homeImages}/>

      <HomeImagesTenthSection images={homeImages}/>

      <div className={styles.caruselContainer}>
        <div className={styles.titleCarusel}>
          <p>پر فروش ترین ها</p>
          <Link
            href="/Product/specialCategory/bestSelling"
            className={styles.ShowAll}
          >
            نمایش همه
            <AiOutlineLeft className={styles.AiOutlineLeft} />
          </Link>
        </div>
        <Carusel data={result5} />
      </div>

      <div className={styles.caruselContainer}>
        <div className={styles.titleCarusel}>
          <p>وبلاگ</p>{" "}
          <div className={styles.weblog}>
            <FaBloggerB  className={styles.BloggerB}/>
            <p className={styles.weblogTitle}>بزودی در ار جی لند</p>
          </div>
          <Link href="" className={styles.ShowAll}>
            نمایش بیشتر در بلاگ
            <AiOutlineLeft className={styles.AiOutlineLeft} />
          </Link>
        </div>
        {}
        <HomeImagesEleventhSection images={homeImages}/>
      </div>
    </div>
  );
};

export default ProductCarusel;
