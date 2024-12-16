"use client";

import { BiChevronLeft , BiChevronRight  } from "react-icons/bi";
export function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BiChevronRight 
      className={className}
      style={{
        ...style,
        backgroundColor: "#ffffff",
        borderRadius: "50%",
        boxShadow: "0 0 14px -3px rgba(0,0,0,.22)",
        width: `${props.width}`,
        height: `${props.height}`,
        margin: "auto",
        marginRight: "30px",
        zIndex: "10000",
        color: "#4a4a4a  ",
      }}
      onClick={onClick}
    />
  );
}
export function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BiChevronLeft
      className={className}
      style={{
        ...style,
        backgroundColor: "#ffffff",
        borderRadius: "50%",
        boxShadow: "0 0 14px -3px rgba(0,0,0,.22)",
        height: "30px",
        width: "30px",
        margin: "auto",
        marginLeft: "30px",
        zIndex: "10000",
        color: "#4a4a4a",
      }}
      onClick={onClick}
    />
  );
}
