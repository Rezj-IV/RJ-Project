import React from "react";
import * as repository from "../../../RestConfig/RestRequest";
import Link from "next/link";
import Image from "next/image";
import styles from "./SixIcon.module.scss";
async function getAllSixIcon() {
  const response = await repository.Get("SixIcon");
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("دیتا به درستی از سرور دریافت نشد");
  }
}
const SixIcon = async () => {
  const data = await getAllSixIcon();
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sixIconContainer}>
        {data.map((item) => {
          return (
            <div>
              {item.id === 6 ? (
                <div className={styles.sixIcon} key={item.id}>
                  <Image
                    width={80}
                    height={80}
                    src={`/SixIcon/${item.url}`}
                    alt={item.iconName}
                    priority
                  />
                  <p>{item.iconName}</p>
                </div>
              ) : (
                <div className={styles.sixIcon} key={item.id}>
                  <Link
                    href={`/Product/specialCategory/${item.label}`}
                    className={styles.sixIconLink}
                  >
                    <Image
                      width={80}
                      height={80}
                      src={`/SixIcon/${item.url}`}
                      alt={item.iconName}
                      priority
                    />
                    <p>{item.iconName}</p>
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SixIcon;
