import styles from "./MainMenu.module.css";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { FaPercent } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
const MainMenu = () => {
  return (
    <div>
      <nav className={styles.navM}>
        <ul className={styles.ulM}>
          <li className={styles.liM}>
            <Link className={styles.linkM} href="">
              <div className={styles.MObileResponse}>
                <AiOutlineMenu className={styles.AiOutlineMenu} />
                <span>دسته بندی محصولات</span>
              </div>
            </Link>
            <div className={styles.layer} >
              <MobileMenu />
             
            </div>
          </li>

          <li className={styles.liM}>
            <Link className={styles.linkM} href="">
              <FaPercent className={styles.offLogo} />
              <span>تکنوآف</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainMenu;
