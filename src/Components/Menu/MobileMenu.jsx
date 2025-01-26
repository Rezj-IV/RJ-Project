import styles from "./MobileMenu.module.css";
import Link from "next/link";
import Image from "next/image";
import * as Repository from "../../../RestConfig/RestRequest";
import MenuContents from "./MenuContents";
async function getAllContentMenu() {
  try {
    const response = await Repository.Get("ShowController");
    if (response.ok) {
      const date = await response.json();
      return date;
    } else {
      console.log("دیتا به درستی از سرور دریافت نشده است");
    }
  } catch {
    console.log("سرور از دسترس جارج شده !!!");
  }
}

const MobileMenu = async (props) => {
  const MenuItem = await getAllContentMenu();

  return (
    <>
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <ul>
            <div>
              {MenuItem.map((item) => {
                return (
                  <div className={styles.otherOption} key={item.id}>
                    <li>
                      <div className={styles.ParentLogo}>
                        <Image
                          src={item.logoUrl}
                          alt={item.name}
                          width={28}
                          height={28}
                        />
                      </div>
                      <div className={styles.ParentLink}>
                        <Link className={styles.LinkOption} href="">
                          {item.name}
                        </Link>
                      </div>
                      <div className={styles.layer}>
                        <MenuContents itemId={item.id} />
                      </div>
                    </li>
                  </div>
                );
              })}
            </div>
          </ul>
        </div>
      </nav>
      </div>
    </>
  );
};

export default MobileMenu;
