import React from "react";
import * as repository from "../../../../../../RestConfig/RestRequest";
import CardDetails from "@/Components/Card/CardDetails";
async function getAllCategoryType(props) {
  const response = await repository.Get(`products/category/${props}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("دیتا به درستی از سرور دریافت نشد");
  }
}
const CTContent = async (props) => {
  const context = await props.params; 
  const SearchParams = await props.searchParams;
  const data = await getAllCategoryType(context.CTContent);
  console.log(data);
  const result = data.filter((item) => {
    return item.type.includes(SearchParams.class);

  });
  return (
    <div>
      {" "}
      <CardDetails product={result} />
    </div>
  );
};

export default CTContent;
