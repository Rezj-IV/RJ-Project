import React from "react";
import styles from "./ProductCarusel.module.scss";
import Carusel from "../Carusel/Carusel";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
const ProductCarusel = ({ data }) => {
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
  // let result6 = data.filter((item)=>{
  //   return item.category.includes("سامسونگ")
  // })
  console.log(data);
  console.log(result);
  return (
    <div>
      <div className={styles.caruselContainer}>
        <div className={styles.titleCarusel}>
          <p>پرچمداران هوشمند</p>
          <Link
            href="/"
            className={styles.ShowAll}
          >
            نمایش همه
            <AiOutlineLeft className={styles.AiOutlineLeft} />
          </Link>
        </div>

        <Carusel data={result} />
      </div>

      <div className={styles.caruselContainer}>
        <div className={styles.titleCarusel}>
          
          <span> لپ‌ تاپ‌ها در 
          <span className={styles.rjLand}>ار جی لند</span>
          </span>
          
          <Link
            href="/"
            className={styles.ShowAll}
          >
            نمایش همه
            <AiOutlineLeft className={styles.AiOutlineLeft} />
          </Link>
        </div>
        <Carusel data={result2} />
      </div>

      <div className={styles.caruselContainer}>
        <div className={styles.titleCarusel}>
          <p>کامپیوتر و تجهیزات</p>
          <Link
            href="/"
            className={styles.ShowAll}
          >
            نمایش همه
            <AiOutlineLeft className={styles.AiOutlineLeft} />
          </Link>
        </div>
        <Carusel data={result3} />
      </div>

      <div className={styles.caruselContainer}>
        <div className={styles.titleCarusel}>
          <span>تجربه  گیم  با  
          <span className={styles.rjLand}>ار جی لند</span>
          </span>
          <Link
            href="/"
            className={styles.ShowAll}
          >
            نمایش همه
            <AiOutlineLeft className={styles.AiOutlineLeft} />
          </Link>
        </div>
        <Carusel data={result4} />
      </div>

      <div className={styles.caruselContainer}>
        <div className={styles.titleCarusel}>
          <p>پر فروش ترین ها</p>
          <Link
            href="/"
            className={styles.ShowAll}
          >
            نمایش همه
            <AiOutlineLeft className={styles.AiOutlineLeft} />
          </Link>
        </div>
        <Carusel data={result5} />
      </div>

      {/* <div>
      <Carusel data={result6}/>
</div> */}
    </div>
  );
};

export default ProductCarusel;
