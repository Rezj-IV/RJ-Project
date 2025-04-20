import React from "react";
import styles from "./PUincorrect.module.css";
import { PiSealWarningDuotone } from "react-icons/pi";

const PUincorrect = () => {
  return (
    <div className={styles.inc}>
      <PiSealWarningDuotone className={styles.PiSealWarning}/>
      <span> نام کاربری یا رمزعبور نادرست است</span>
    </div>
  );
};

export default PUincorrect;
