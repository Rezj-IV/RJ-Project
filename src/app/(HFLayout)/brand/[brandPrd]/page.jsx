import React from "react";
import * as repository from "../../../../../RestConfig/RestRequest";
import CardDetails from "@/Components/Card/CardDetails";
async function getAllSameCategory(props) {
  const response = await repository.Get(`products/category/${props}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("دیتا به درستی از سرور دریافت نشد");
  }
}

const brandData = async (props) => {
  const context = await props.params;
  const data = await getAllSameCategory(context.brandPrd);
  console.log(data);
  return (
    <div>
      <CardDetails product={data} />
    </div>
  );
};

export default brandData;
