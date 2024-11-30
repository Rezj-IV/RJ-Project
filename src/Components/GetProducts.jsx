import Home from "@/app/page";
import React from "react";
import * as repository from "../../RestConfig/RestRequest";
async function getAllProduct() {
    const response = await repository.Get("products");
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log("دیتا به درستی از سرور دریافت نشد");
       }

}

const GetProducts = async () => {
  const PrdData = await getAllProduct();
  console.log(PrdData);
  return (
    <>
   <Home PrdData/>
    </>
  );
};

export default GetProducts;
