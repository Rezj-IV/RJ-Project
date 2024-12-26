import React from 'react'
import * as repository from "../../../../RestConfig/RestRequest" 
async function getAllSixIcon(props) {
    const response = await repository.Get(`products${props}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log("دیتا به درستی از سرور دریافت نشد");
    }
  }
const sixIconData = async (props) => {
    const context = await props.params;
    const data = await getAllSixIcon(context)
    console.log(data);
  return (
    <div>

    </div>
  )
}

export default sixIconData