import MobileMenu from "@/Components/Menu/MobileMenu";
import styles from "./page.module.css";
import MainMenu from "@/Components/Menu/MainMenu";
import Header from "@/Components/Header/Header";
import GetProducts from "@/Components/GetProducts";
import GetIncredibleOffers from "@/Components/IncredibleOffersProducts/GetIncredibleOffers";
import IncCarusel from "@/Components/Carusel/IncCarusel";
import Modal from "@/Components/Modal/ImageModal";
import MainSlider from "@/Components/Slider/mainSlider";
import ProductCarusel from "@/Components/Product/ProductCarusel";
import * as repository from "../../RestConfig/RestRequest";

async function getAllProduct() {
  const response = await repository.Get("products");
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("دیتا به درستی از سرور دریافت نشد");
    4;
  }
}
export default async function Home() {
  const data = await getAllProduct();
  console.log(data);
  return (
    <>
      {/* <MainMenu/>
      <MainSlider/> */}

      <div className={styles.PdContainer}>
        {/* <Header/> */}
         {/* <IncCarusel /> */}
      <ProductCarusel data={data}/>  
      </div>
    </>
  );
}
