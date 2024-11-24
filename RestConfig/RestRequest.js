import axios from "axios";
import SA from "./Server-Address.json";

export const Get =   (url) => {
  return  fetch(`${SA.Main_Server}${url}`);
};

export const Post =  (url, body) => {
 return axios.post(`${SA.Main_Server}${url}`, 
    body,
    {
      headers:{"Content-Type" : "application/json"}
  }  
);
  
 
  
};
