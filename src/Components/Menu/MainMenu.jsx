import styles from "./MainMenu.module.css";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { LuBadgePercent, LuFlame } from "react-icons/lu";
import MobileMenu from "./MobileMenu";

const MainMenu = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.productCategoriesContainer}>
        <div className={styles.productCategories}>
          <div className={styles.AiOutlineMenu}>
            <AiOutlineMenu />
          </div>
          <span>دسته بندی محصولات</span>
        </div>

        <div className={styles.layer}>
          <MobileMenu />
        </div>
      </div>

      <Link href="/IncredibleOffers" className={styles.offContainer}>
        <LuBadgePercent className={styles.MLogo} />
        <span>شگفت‌انگیزها</span>
      </Link>

      <Link
        href="/Product/specialCategory/bestSelling"
        className={styles.bestSellers}
      >
        <LuFlame className={styles.MLogo} />
        <span>پرفروش‌ ترین‌ها</span>
      </Link>
    </div>
  );
};

export default MainMenu;
