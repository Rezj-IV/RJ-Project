"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./ImageModal.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ImageModal = ({ images, alt }) => {
  const [modal, setModal] = useState(false);
  const clickToModal = () => {
    setModal(!modal);
  };
  return (
    <div className={styles.imagesProduct}>
      {modal && (
        <>
          <div>
            {" "}
            <AiOutlineCloseCircle onClick={clickToModal} />
          </div>
          <div className={styles.containerModalIMages}>
            <div className={styles.modalIMages}>
              <p>{alt}</p>
              {images.map((item) => {
                return (
                  <div key={item.id} className={styles.image}>
                    
                    <Image
                      src={item.original}
                      alt={alt}
                      width={75}
                      height={75}
                    />
                  </div>
                );
              })}
            </div>

            <div className={styles.mainModalIMages}>
              <h1>image</h1>
            </div>
          </div>
        </>
      )}
      <div className={styles.mainImage}>
        {images.map((item) => {
          return (
            <div key={item.id}>
              <div onClick={clickToModal} className={styles.showMore}>
                <Image src={item.original} alt={alt} width={70} height={70} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageModal;
