import React from "react";
import * as repository from "../../../RestConfig/RestRequest";

async function getAllProduct() {
  const response = await repository.Get("products/incredibleOffers");
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("دیتا به درستی از سرور دریافت نشد");
  }
}
const GetIncredibleOffers = async () => {
  const PrdData = await getAllProduct();

  return PrdData
   
  
};

export default GetIncredibleOffers;