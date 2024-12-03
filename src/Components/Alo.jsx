// "use client";
// import React, { useState } from "react";

// const Alo = () => {
//   let style = {
//     display: "none",
//     width: "100px",
//     height: "80px",
//     backgroundColor: "aquamarine",
//     color: "#f1f8ff",
//   };
//   const [first, setfirst] = useState([{ ...style }]);

//   const clickHandler = async () => {
//     const sp = await setfirst((first[0].exist = true), {
//       ...first[1].it, 
//       display: "block",
//     });
//     if (first[0].exist === true) {
//       setfirst((first[1].it = style));
//       first[0].exist == false;
//     }
//   };
//   console.log(first[1].it);
//   return (
//     <div>
//       <button onClick={clickHandler}>Click</button>
//       <div
//         style={{
//           ...first[1].it,
//         }}
//       >
//         <h1>alo</h1>
//       </div>
//     </div>
//   );
// };

// export default Alo;
