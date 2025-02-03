
import { RiArrowDropLeftLine , RiArrowDropRightLine  } from "react-icons/ri";
import { RxCaretLeft ,RxCaretRight } from "react-icons/rx";

import styles from "./CaruselSliderArrow.module.css";
export function NextArrowSlide(props) {
  const { className, style, onClick } = props;
  return (
      <RiArrowDropRightLine
        className={` ${styles.NextArrowSlide}`}
        onClick={onClick}
      />
  );
}
export function PrevArrowSlide(props) {
  const { className, style, onClick } = props;
  return (
  <div className={style.PrevArrowSlideContainer}>
      <RiArrowDropLeftLine
        className={`  ${styles.PrevArrowSlide}`}
        onClick={onClick}
      />
      </div>
  );
}
