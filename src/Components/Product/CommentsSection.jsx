"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./CommentsSection.module.scss";
import { BiPlus, BiMessageDots } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { LuSquareUserRound } from "react-icons/lu";

const CommentsSection = ({ PrdData, PrdId }) => {
  const [showComment, setShowComment] = useState(false);
  const jwt = useSelector((state) => state.Users);
  // const arrayToken = jwt.token.split(".");
  // const tokenPayload = JSON.parse(atob(arrayToken[1]));
  const Content = useRef();

  const rout = useRouter();

  const clickToModal = (props) => {
    if (jwt.token) {
      setShowComment(!showComment);
    } else {
      rout.push("/Login");
    }
  };

  const RegisterACommentClick = (props) => {
    localStorage.setItem(
      "Comment",
      JSON.stringify({
        id: PrdId,
        content: Content.current.value,
      })
    );

    if (Content.current.value) {
      setShowComment(!showComment);
    }
  };

  return (
    <div className={styles.commentsSectionContainer}>
      <div className={styles.rightSideCommentsSection}>
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

        {PrdData.id === JSON.parse(localStorage.getItem("Comment")).id ? (
          <div className={styles.contentCommentsContainer}>
            <div>
              <div className={styles.userComment}>
                {/* <p>{tokenPayload.username}</p> */}
              </div>

              <div className={styles.textComment}>
                <span>
                  {JSON.parse(localStorage.getItem("Comment")).content}
                </span>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div className={styles.leftSideCommentsSection}>
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
      </div>
      {showComment && (
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
                src={PrdData.indexImageUrl}
                alt={PrdData.name}
                height={70}
                width={70}
              />
              <p>
                {PrdData.name.substring(0, 55)}
                {PrdData.name.length > 55 ? "..." : null}
              </p>
            </div>
            <div className={styles.commentText}>
              <p>متن دیدگاه:</p>
              <span>*</span>
              <textarea
                ref={Content}
                type="text"
                className={styles.commentTextInput}
                placeholder="نظر خود را در مورد این کالا با کاربران دیگر به اشتراک بگذارید.."
              />
            </div>

            <div
              className={styles.registerCommentContainer}
              onClick={() => RegisterACommentClick(PrdData.id)}
            >
              <div className={styles.registerComment}>ثبت دیدگاه</div>
            </div>

            <div className={styles.textCaptionContainer}>
              <span className={styles.textCaption}>
                ثبت دیدگاه به معنی موافقت با
              </span>
              <span className={styles.RjLandTextCaption}>
                قوانین انتشار ارجی لند
              </span>
              <span className={styles.textCaption}>است.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentsSection;
