"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./ImageModal.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

const ImageModal = ({ images, namePrd, mainImage }) => {
  const [modal, setModal] = useState(false);
  const [imgID, setImgID] = useState({
    id: 0,
    original: "",
  });
  const [ximg, setxImg] = useState();

  const clickToModal = () => {
    setModal(!modal);
  };
  const clickToShowImg = (props) => {
    setImgID({ id: props.id, original: props.original });
  };

  const clickToLeftSlide = () => {
    setImgID((...prev) => prev.id - 1);
  };
  const clickToRightSlide = () => {
    setImgID((...prev) => prev.id + 1);
  };
  return (
    <div className={styles.imagesProduct}>
      {modal && (
        <>
          <div className={styles.containerModalIMages}>
            <div className={styles.childModalIMages}>
              <div className={styles.closeModalIMagesContainer}>
                <div className={styles.closeModalIMagesChild}>
                  <div className={styles.officialImages}>
                    <h3>تصاویر رسمی</h3>
                  </div>

                  <div className={styles.closeIcon}>
                    <AiOutlineCloseCircle onClick={clickToModal} />
                  </div>
                </div>

                <div className={styles.bunchPhotos}>
                  <p>عکس</p>
                </div>
              </div>
              <div className={styles.containerModalSlideIMages}>
                <div className={styles.childModalSlideIMages}>
                  <div className={styles.rightsideContainer}>
                    <p className={styles.nameProduct}>{namePrd}</p>
                    <div className={styles.rightside}>
                      {images.map((item) => {
                        return (
                          <div
                            key={item.id}
                            className={styles.slideImage}
                            onClick={() => clickToShowImg(item)}
                          >
                            <Image
                              src={item.original}
                              alt={namePrd}
                              width={70}
                              height={70}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className={styles.leftSildeContainer}>
                  <div className={styles.mainModalIMages}>
                    <div className={styles.clickArrow}>
                      <BiChevronRight
                        className={styles.iconArrow}
                        onClick={clickToRightSlide}
                      />
                    </div>

                    {imgID.id ? (
                      <Image
                        src={imgID.original}
                        alt={namePrd}
                        width={400}
                        height={400}
                      />
                    ) : (
                      <Image
                        src={mainImage}
                        alt={namePrd}
                        width={400}
                        height={400}
                      />
                    )}
                    <div className={styles.clickArrow}>
                      <BiChevronLeft
                        className={styles.iconArrow}
                        onClick={clickToLeftSlide}
                      />
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className={styles.mainImage}>
        {images.map((item) => {
          return (
            <div key={item.id}>
              <div onClick={clickToModal} className={styles.showMore}>
                <Image
                  src={item.original}
                  alt={namePrd}
                  width={70}
                  height={70}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageModal;
