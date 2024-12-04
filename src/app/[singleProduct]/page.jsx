import React from "react";
import * as repository from "../../../RestConfig/RestRequest";
import styles from "./singleProduct.module.scss";
import Image from "next/image";
import ImageModal from "@/Components/Modal/ImageModal";
async function getAllSingleProduct(props) {
  const response = await repository.Get(`products/${props}`);
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

  console.log(context);
  console.log(data);
  return (
    <div className={styles.container}>
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
                  {/* <span>رنگ :</span>
                  <span className={styles.showColor}>{item.showColor}</span> */}
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
        </div>

        <div className={styles.imageContainer}>
          {data.incredibleOffers === true ? (
            <Image
              className={`${styles.incredibleOfferImage}`}
              alt="IncredibleOffer"
              src="/IconImages/IncredibleOffer.png"
              width={110}
              height={12}
            />
          ) : null}
          <div className={styles.prdImage}>
            <Image
              src={data.indexImageUrl}
              width={360}
              height={360}
              alt={data.name}
            />
          </div>
          <div className={styles.otherImage}>
            <ImageModal images={data.images} alt={data.name} />
          </div>
        </div>
      </div>

      <div className={styles.peiceContainer}></div>
    </div>
  );
};

export default singleProduct;
