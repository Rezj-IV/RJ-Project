import axios from "axios";
import SA from "./Server-Address.json";

export const Get = (url) => {
  return fetch(`${SA.Main_Server}${url}`);
};

// export const Post = async (data) => {
//  return fetch("http://194.60.231.181:9095/users/login", {
//     method: "POST",
//     body:JSON.stringify({data}),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// };
export const Post =  (url, body) => {
 return axios({
    method:"POST",
    url:`${SA.Main_Server}${url}`, headers:{"Accept":"application/json, text/plain, /","Content-Type": "multipart/form-data"},
    data:body,
  })   
 };