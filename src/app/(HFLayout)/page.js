import styles from "./page.module.css";
import IncCarusel from "@/Components/Carusel/IncCarusel";
import ProductCarusel from "@/Components/Product/ProductCarusel";
import * as repository from "../../../RestConfig/RestRequest";
import SixIcon from "@/Components/SixIcon/SixIcon";
import { Suspense } from "react";


async function getAllProduct() {
  const response = await repository.Get("products");
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("دیتا به درستی از سرور دریافت نشد");
  }
}
async function getAllHomeImages() {
  const response = await repository.Get("HomeImages");
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("دیتا به درستی از سرور دریافت نشد");
  }
}
export default async function Home() {
  const data = await getAllProduct();
  const homeImages = await getAllHomeImages();
  return (
    <>
      
      <div className={styles.PdContainer}>
        <Suspense>
          <SixIcon />
        </Suspense>
        <Suspense>
          <IncCarusel />
        </Suspense>
        <Suspense>
          <ProductCarusel data={data} homeImages={homeImages} />
        </Suspense>
      </div>
    </>
  );
}
