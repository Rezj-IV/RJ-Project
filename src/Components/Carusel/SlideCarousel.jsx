import React from "react";
import Carusel from "./Carusel";
import styles from "./SlideCarousel.module.scss";
import Image from "next/image";
import { AiOutlineLeft } from "react-icons/ai";
import { LiaPercentSolid } from "react-icons/lia";
import Link from "next/link";

const SlideCarousel = ({ PRD }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.ContainerContent}>
        <pre className={styles.offerText}>
          𝓡𝓙
          <br />
          𝕆𝕗𝕗
          <i>％ </i>
        </pre>

        <Link href="/IncredibleOffers" className={styles.ShowAllIncredibleOffers}>
          نمایش همه
          <AiOutlineLeft className={styles.AiOutlineLeft} />
        </Link>
      </div>

      <div className={styles.ContainerCarousel}>
        <Carusel data={PRD} />
      </div>
    </div>
  );
};

export default SlideCarousel;
