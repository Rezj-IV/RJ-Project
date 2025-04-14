"use client";
import React from "react";
import AddToCart from "./AddToCart";
import { useSelector } from "react-redux";
import ShoppingCartItemCount from "./ShoppingCartItemCount";

const AddToCartButton = ({data}) => {
  const selector = useSelector((state) => state.ShoppingCart);
  console.log(selector);
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

  };
  
  

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
