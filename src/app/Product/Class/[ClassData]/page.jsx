import React from "react";
import * as repository from "../../../../../RestConfig/RestRequest";
import CardDetails from "@/Components/Card/CardDetails";
async function getAllProduct() {
  const response = await repository.Get("products");
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("دیتا به درستی از سرور دریافت نشد");
  }
}
const ClassData = async (props) => {
  const context = await props.params;
  const data = await getAllProduct();

  let result = data.filter((item) => {
    return item.type.includes(context.ClassData);
  });

  return (
    <div>
      {result && (
        <div>
          <CardDetails product={result} />
        </div>
      )}
   
    </div>
  );
};

export default ClassData;
