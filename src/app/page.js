import MobileMenu from "@/Components/Menu/MobileMenu";
import styles from "./page.module.css";
import MainMenu from "@/Components/Menu/MainMenu";
import Header from "@/Components/Header/Header";
import GetIncredibleOffers from "@/Components/IncredibleOffersProducts/GetIncredibleOffers";
import IncCarusel from "@/Components/Carusel/IncCarusel";
import Modal from "@/Components/Modal/ImageModal";
import MainSlider from "@/Components/Slider/mainSlider";
import ProductCarusel from "@/Components/Product/ProductCarusel";
import * as repository from "../../RestConfig/RestRequest";
import SixIcon from "@/Components/SixIcon/SixIcon";

async function getAllProduct() {
  const response = await repository.Get("products");
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("دیتا به درستی از سرور دریافت نشد");
    
  }
}
export default async function Home() {
  const data = await getAllProduct();
  console.log(data);
  return (
    <>
      <Header />

      {/* <MainMenu/>
      <MainSlider/> */}

      <div className={styles.PdContainer}>
        {/* <SixIcon/> */}

        {/* <IncCarusel />  */}
        {/* <ProductCarusel data={data}/>   */}
      </div>
    </>
  );
}
