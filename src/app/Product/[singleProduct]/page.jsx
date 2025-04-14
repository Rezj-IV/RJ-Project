import React, { Suspense } from "react";
import * as repository from "../../../../RestConfig/RestRequest";
import styles from "./singleProduct.module.scss";
import Image from "next/image";
import ImageModal from "@/Components/Modal/ImageModal";
import ProductAttribute from "@/Components/Product/ProductAttribute";
import { BsShop } from "react-icons/bs";
import { AiOutlineLeft, AiOutlineSetting } from "react-icons/ai";
import { GoShieldCheck } from "react-icons/go";
import { BsCart3, BsBoxSeam } from "react-icons/bs";
import InformationBar from "@/Components/Product/InformationBar";
import Carusel from "@/Components/Carusel/Carusel";
import Link from "next/link";
import NonExistentSingleCard from "@/Components/Product/NonExistentSingleCard";
import Color from "@/Components/Product/Color";
import AddToCartButton from "@/Components/ShoppingCart/AddToCartButton";
import CarouselSlider from "@/Components/Slider/CarouselSlider";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import LowerPart from "@/Components/LowerPart/LowerPart";
import MainMenu from "@/Components/Menu/MainMenu";
import SearchBox from "@/Components/Header/SearchBox";
import SearchAndBasket from "@/Components/Header/SearchAndBasket";

async function getAllSingleProduct(props) {
  const response = await repository.Get(`products/${props}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("دیتا به درستی از سرور دریافت نشد");
  }
}

async function getAllSameCategory(props) {
  const response = await repository.Get(`products/category/${props}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("دیتا به درستی از سرور دریافت نشد");
  }
}
const singleProduct = async (props) => {
  const context = await props.params;
  const data = await getAllSingleProduct(context.singleProduct);
  const category = await getAllSameCategory(data.category);
  return (
    <div>
      <div className={styles.searchAndBasketContainer}>
        <SearchAndBasket />
      </div>
      <div className={styles.Header}>
        <Header />
        <MainMenu />
      </div>

      <div className={styles.LowerPart}></div>
      {data.stock === 0 ? (
        <NonExistentSingleCard data={data} category={category} />
      ) : (
        <div className={styles.mainContainer}>
          <div className={styles.dataProductContainer}>
            <Suspense>
              <div className={styles.descriptionContainer}>
                <div className={styles.nameContainer}>
                  <p className={styles.name}>{data.name}</p>
                  <p className={styles.nameb}>{data.nameB}</p>

                  <div className={styles.commentContainer}>
                    <span className={styles.comment}>نظرات کاربران</span>
                    <span className={styles.numberComment}>0نظر</span>
                  </div>
                  {data.colorID.length !== 0 ? (
                    <div>
                      <Color colorID={data.colorID} />
                    </div>
                  ) : null}

                  {data.attribute.length !== 0 ? (
                    <div>
                      <h3 className={styles.mainFeatures}>ویژگی‌های اصلی</h3>
                      <div className={styles.attributeContainer}>
                        {data.attribute.map((item) => {
                          return <ProductAttribute Att={item} key={item.id} />;
                        })}
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className={styles.imageContainer}>
                  <div className={styles.offerTextContainer}>
                    {data.incredibleOffers === true ? (
                      <pre className={styles.offerText}>
                        𝓡𝓙
                        <br />
                        𝕆𝕗𝕗
                        <i>％ </i>
                      </pre>
                    ) : null}
                  </div>
                  <div className={styles.prdImage}>
                    <Image
                      src={data.indexImageUrl}
                      width={370}
                      height={370}
                      alt={data.name}
                      priority
                    />
                  </div>
                  <div className={styles.otherImage}>
                    <ImageModal
                      images={data.images}
                      namePrd={data.name}
                      mainImage={data.indexImageUrl}
                    />
                  </div>
                </div>
              </div>
            </Suspense>
            <Suspense>
              <div className={styles.productDetailsContainer}>
                <div className={styles.productDetailsChild}>
                  <div className={styles.sellerContainer}>
                    <div className={styles.seller}>
                      <p>فروشنده</p>

                      <BsShop className={styles.iconShop} />
                      <span>{data.seller}</span>
                    </div>

                    <div className={styles.Evaluation}>
                      <AiOutlineSetting className={styles.iconShop} />
                      <span>ارزیابی عملکرد: </span>
                      <span className={styles.excEvaluation}>عالی</span>
                    </div>

                    <div className={styles.warranty}>
                      <GoShieldCheck className={styles.iconShop} />
                      <span>گارانتی اصالت و سلامت فیزیکی کالا</span>
                    </div>
                  </div>

                  <div className={styles.PriceAndCounterContainer}>
                    {data.priceWithDiscount === 0 ? (
                      <div className={`${styles.priceDetail}`}>
                        <div className={`${styles.priceContainer}`}>
                          <div className={styles.price}>
                            {data.price
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                            <span className={styles.priceToman}>تومان</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className={`${styles.priceDetail}`}>
                        {data.stock < 3 ? (
                          <div className={styles.remainingContainer}>
                            <div className={styles.remaining}>
                              <BsBoxSeam className={styles.FiBox} />
                              <span>{data.stock}</span>
                              <span>عدد در انبار باقی مانده</span>
                            </div>
                          </div>
                        ) : null}
                        <div className={styles.offPrcentContainer}>
                          <div className={`${styles.offPrcent}`}>
                            <div className={styles.offPrcentNumber}>
                              {Math.floor(data.price - data.priceWithDiscount)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </div>
                            <div className={styles.offPrcentToman}>
                              {" "}
                              تومان تخفیف
                            </div>
                          </div>
                        </div>
                        <div className={`${styles.priceContainer}`}>
                          <div className={styles.priceWithDiscount}>
                            <p>
                              {" "}
                              {data.price
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </p>

                            <div className={styles.discountPercentage}>
                              {Math.floor(
                                ((data.price - data.priceWithDiscount) /
                                  data.price) *
                                  100
                              )}
                              <span>%</span>
                            </div>
                          </div>
                          <div className={`${styles.price}`}>
                            {data.priceWithDiscount
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            <span className={styles.priceToman}>تومان</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className={styles.AddToCartButton}>
                      <AddToCartButton data={data} />
                    </div>
                  </div>
                </div>
              </div>
            </Suspense>
          </div>
          <Suspense>
            {data.category === "هوآوی " || data.category === "آنر" ? null : (
              <div className={styles.caruselContainer}>
                <div className={styles.titleCarusel}>
                  <p>برند مشابه</p>
                  <Link
                    href={`/brand/${data.category}`}
                    className={styles.ShowAll}
                  >
                    <span> نمایش همه</span>
                    <AiOutlineLeft className={styles.AiOutlineLeft} />
                  </Link>
                </div>
                <Carusel data={category} />
              </div>
            )}
          </Suspense>
          <div className={styles.informationProductContainer}>
            <Suspense>
              <InformationBar
                Att={data.attribute}
                data={data}
                PrdId={data.id}
              />
            </Suspense>
          </div>
        </div>
      )}
      <div className={styles.Footer}>
        <Footer />
      </div>
    </div>
  );
};

export default singleProduct;
