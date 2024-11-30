import React from "react";
import styles from "./MenuContents.module.css";
import Link from "next/link";
import Image from "next/image";


const MenuContents = async ({ itemId }) => {
  return (
    <>
      {itemId === 1 ? (
        <div>
          <h3>برندهای مختلف گوشی موبایل</h3>
          <Link href="/">اپل </Link>
          <Link href="/"> سامسونگ</Link>
          <Link href="/"> شیائومی</Link>

          <h3>تبلت</h3>
          <Link href="/">اپل </Link>
          <Link href="/"> سامسونگ</Link>
          <Link href="/"> شیائومی</Link>

          <h3>ساعت هوشمند</h3>
          <Link href="/">اپل </Link>
          <Link href="/"> سامسونگ</Link>
          <Link href="/"> شیائومی</Link>
        </div>
      ) : null}

      {itemId === 2 ? (
        <div>
          <h3>لپ تاپ</h3>
          <Link href="/"> مک بوک</Link>
          <Link href="/"> لپ‌تاپ ام اس آی </Link>
          <Link href="/"> لپ‌تاپ ایسوس </Link>

          <h3>کامپیوتر</h3>
          <Link href="/">All in one </Link>
          <Link href="/">Mini pc </Link>
          <Link href="/"> کیس اسمبل شده</Link>

          <h3> کنسول بازی</h3>
          <Link href="/">Ps5 </Link>
          <Link href="/"> Ps4</Link>
          <Link href="/"> Xbox</Link>
        </div>
      ) : null}

{itemId > 2 ?(<div className={styles.Developing}>
  
  <Image src="/logo/developingLogo.jpg" alt="Developing" width={150} height={150} className={styles.developingLogo}/>
 <div className={styles.notification}>
  <h3>وب سایت در حال توسعه هست</h3>
  <h4>ممنون از صبر و شکیبایی شما</h4>

 </div>
</div>) : null}
      <div></div>
    </>
  );
};

export default MenuContents;
