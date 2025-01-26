"use client";
import React from "react";
import AddToCart from "./AddToCart";
import { useSelector } from "react-redux";
import ShoppingCartItemCount from "./ShoppingCartItemCount";

const AddToCartButton = ({data}) => {
  const selector = useSelector((state) => state.ShoppingCart);
  const prd = {
    id: data.id,
    name: data.name,
    category: data.category,
    type: data.type,
    seller: data.seller,
    stock: data.stock,
    price: data.price,
    priceWithDiscount: data.priceWithDiscount,
    incredibleOffers: data.incredibleOffers,
    indexImageUrl: data.indexImageUrl,
  //   colorID: [
  //     {
  //       id:
  //       color: ,
  //       showColor:
  //     },]
  };
  
  // const prd = {
  //   id: props.data.id,
  //   name: props.data.name,
  //   category: props.data.category,
  //   type: props.data.type,
  //   seller: props.data.seller,
  //   stock: props.data.stock,
  //   price: props.data.price,
  //   priceWithDiscount: props.data.priceWithDiscount,
  //   incredibleOffers: props.data.incredibleOffers,
  //   indexImageUrl: props.data.indexImageUrl,
  //   mainColor: props.color,
  // };

  return (
    <div>
      {selector.items.find(item=>item.id === data.id) ? 
      <ShoppingCartItemCount PrdId={data.id}/>:
      <AddToCart product={prd} />


      
    }

    </div>
  );
};

export default AddToCartButton;
