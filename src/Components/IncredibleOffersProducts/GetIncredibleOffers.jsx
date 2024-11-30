import React from "react";
import * as repository from "../../../RestConfig/RestRequest";
import IncredibleOffersList from "@/app/IncredibleOffers/page";
import { RevalidateAC } from "@/Revalidate/RevalidateAC.js";

async function getAllProduct() {
  const response = await repository.Get("products/incredibleOffers");
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("دیتا به درستی از سرور دریافت نشد");
  }
  RevalidateAC("")
}
const GetIncredibleOffers = async () => {
  const PrdData = await getAllProduct();

  return PrdData
   
  
};

export default GetIncredibleOffers;
