import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import styles from "./CaruselSliderArrow.module.css";
export function NextArrowSlide(props) {
  const { className, style, onClick } = props;
  return (
      <BiChevronRight
        className={`${className} ${styles.NextArrowSlide}`}
        onClick={onClick}
      />
  );
}
export function PrevArrowSlide(props) {
  const { className, style, onClick } = props;
  return (
      <BiChevronLeft
        className={`${className}  ${styles.PrevArrowSlide}`}
        onClick={onClick}
      />
  );
}
