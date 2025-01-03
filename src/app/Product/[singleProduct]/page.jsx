import React from "react";
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
  console.log(context);
  console.log(data);
  console.log(category);
  return (
    <div>
      {data.stock === 0 ? (
        <NonExistentSingleCard data={data}  category={category}/>
      ) : (
        <div className={styles.mainContainer}>
          <div className={styles.dataProductContainer}>
            <div className={styles.descriptionContainer}>
              <div className={styles.nameContainer}>
                <p className={styles.name}>{data.name}</p>
                <p className={styles.nameb}>{data.nameB}</p>

                <div className={styles.commentContainer}>
                  <span className={styles.comment}>نظرات کاربران</span>
                  <span className={styles.numberComment}>0نظر</span>
                </div>
                <div className={styles.colorContainer}>
                  {data.colorID.map((item) => {
                    {
                      data.colorID !== undefined;
                    }
                    return (
                      <div>
                        <span className={styles.showColor}>رنگ :</span>
                        <h4 className={styles.showColor}>{item.showColor}</h4>
                        <div className={styles.insideColor}>
                          <div
                            className={styles.color}
                            style={{
                              backgroundColor: item.color,
                            }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {data.attribute.length !== 0 ? (
                  <div>
                    <h3 className={styles.mainFeatures}>ویژگی‌های اصلی</h3>
                    <div className={styles.attributeContainer}>
                      {data.attribute.map((item) => {
                        return <ProductAttribute Att={item} />;
                      })}
                    </div>
                  </div>
                ) : null}
              </div>

              <div className={styles.imageContainer}>
                {/* {data.incredibleOffers === true ? (
            <Image
              className={`${styles.incredibleOfferImage}`}
              alt="IncredibleOffer"
              src="/IconImages/IncredibleOffer.png"
              width={110}
              height={12}
            />
          ) : null} */}
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

                <div>
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
                          {data.priceWithDiscount
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                        <div className={`${styles.price}`}>
                          {data.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          <span className={styles.priceToman}>تومان</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {data.stock < 3 ? (
                  <div className={styles.remainingContainer}>
                    <div className={styles.remaining}>
                      <BsBoxSeam className={styles.FiBox} />
                      <span>{data.stock}</span>
                      <span>عدد در انبار باقی مانده</span>
                    </div>
                  </div>
                ) : null}
                <div className={styles.shoppingCartBtnContainer}>
                  <div className={styles.textShoppingCart}>
                    <span>افزودن به سبد خرید</span>
                  </div>

                  <div className={styles.BsCartIcon}>
                    <BsCart3 />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {data.category === "هوآوی " || data.category === "آنر" ? null : (
            <div className={styles.caruselContainer}>
              <div className={styles.titleCarusel}>
                <p>برند مشابه</p>
                <Link
                  href={`/brand/${data.category}`}
                  className={styles.ShowAll}
                >
                  نمایش همه
                  <AiOutlineLeft className={styles.AiOutlineLeft} />
                </Link>
              </div>
              <Carusel data={category} />
            </div>
          )}

          <div className={styles.informationProductContainer}>
            <InformationBar Att={data.attribute} data={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default singleProduct;
