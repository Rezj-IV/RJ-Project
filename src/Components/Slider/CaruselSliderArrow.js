
import { RiArrowDropLeftLine , RiArrowDropRightLine  } from "react-icons/ri";
import styles from "./CaruselSliderArrow.module.css";

export function NextArrowSlide(props) {
  const {onClick}  = props;
  return (
      <RiArrowDropRightLine
        className={` ${styles.NextArrowSlide} ${styles.arrow}`}
        onClick={onClick}
      />
  );
}
export function PrevArrowSlide(props) {
  const  {onClick}  = props;
  return (
  <div>
      <RiArrowDropLeftLine
        className={`  ${styles.PrevArrowSlide} ${styles.arrow}`}
        onClick={onClick}
      />
      </div>
  );
}
