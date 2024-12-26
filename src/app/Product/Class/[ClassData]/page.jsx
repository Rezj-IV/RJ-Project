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

  let result2 = data.filter((item) => {
    return item.flagBearer === true;
  });

  let result3 = data.filter((item) => {
    return item.bestSelling === true;
  });
  return (
    <div>
      {context.ClassData === "laptop" ? (
        <div>
          <CardDetails product={result} />
        </div>
      ) : null}
      {context.ClassData === "computer" ? (
        <div>
          <CardDetails product={result} />
        </div>
      ) : null}{" "}
      {context.ClassData === "console" ? (
        <div>
          <CardDetails product={result} />
        </div>
      ) : null}
      {context.ClassData === "flagBearer" ? (
        <div>
          <CardDetails product={result2} />
        </div>
      ) : null}
      {context.ClassData === "bestSelling" ? (
        <div>
          <CardDetails product={result3} />
        </div>
      ) : null}
    </div>
  );
};

export default ClassData;
