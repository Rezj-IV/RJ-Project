"use client";
import React, { useState } from "react";
import styles from "./CommentsSection.module.scss";
import { BiPlus, BiMessageDots } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";

const CommentsSection = ({ dataPrd }) => {
  const [first, setfirst] = useState(false);
  const clickToModal = (props) => {
    setfirst(!first);
  };
  return (
    <div>
      <div className={styles.title}>
        <span> •</span>
        <h1>نظرات کاربران</h1>
      </div>

      <div className={styles.guidanceContainer}>
        <div className={styles.guidance}>
          <p>برای راهنمایی دیگران درمورد این کالا نظر دهید.</p>
          <span>برای ثبت نظر نیاز به خرید کالا نیست؛ </span>
        </div>
      </div>

      <div className={styles.addCommentContainer}>
        <div className={styles.addComment}>
          <div className={styles.writeOpinion}>
            <BiMessageDots className={styles.BiMessageDots} />

            <p>نظر خود را در مورد این محصول بنویسید ...</p>
          </div>
          <div className={styles.addCommentBtnContainer}>
            <div onClick={clickToModal} className={styles.addCommentBtn}>
              <span>افزودن نظر</span>
              <BiPlus className={styles.BiPlus} />
            </div>
          </div>
        </div>
      </div>

      {first && (
        <div className={styles.containerModalComment}>
          <div className={styles.childModalComment}>
            <div className={styles.headerComment}>
              <AiOutlineArrowRight
                onClick={clickToModal}
                className={styles.closeIcon}
              />
              <p>ثبت دیدگاه</p>
            </div>
            <div className={styles.PrdInformation}>
              <Image
                src={dataPrd.indexImageUrl}
                alt={dataPrd.name}
                height={70}
                width={70}
              />
              <p>
                {dataPrd.name.substring(0, 55)}
                {dataPrd.name.length > 55 ? "..." : null}
              </p>
            </div>
            <div className={styles.commentText}>
              <p>متن دیدگاه:</p>
              <span>*</span>
              <input
                type="text"
                className={styles.commentTextInput}
                placeholder="نظر خود را در مورد این کالا با کاربران دیگر به اشتراک بگذارید.."
              />
            </div>

            <div className={styles.registerCommentContainer}>
              <div className={styles.registerComment}>ثبت دیدگاه</div>
            </div>

            <div className={styles.textCaption}>
              <span className={styles.textCaption}>ثبت دیدگاه به معنی موافقت با</span>
              <span className={styles.RjLandTextCaption}>قوانین انتشار ارجی لند</span>
              <span className={styles.textCaption}>است.</span>

            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default CommentsSection;
