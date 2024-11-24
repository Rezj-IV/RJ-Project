
import * as Repository from "../../../RestConfig/RestRequest";
import styles from "./Slider.module.scss";
import Image from "next/image";
import CurrentIndexImage from "./CurrentIndexImage";

async function getAllSlides() {

  const response = await Repository.Get("Slider");
  if (!response.ok) {
    console.log("error GET-Slide");
  } else {
    const data = await response.json();
    return data;
  }

}
const Slider = async (props) => {
  const slide =await getAllSlides()

  console.log("searchParams");
  console.log(props.searchParams);






  return(
    <div>
<CurrentIndexImage/>

    </div>
  )











  
// console.log(slide.length);
// //  console.log(props.params);
//   return (
//     <div>
//       {slide.length !== 0  ? (
//         <div className={styles.Slider}>
          
//          <CurrentIndexImage slideLength={slide.length}>
//           <Slider/>
//          </CurrentIndexImage>

//           <div className={styles.Slide}>
//             <Image
//               className={styles.imageSlide}
//               src={slide[0].indexImageUrl}
//               fill
//               alt="tecno"
//             />
//           </div>
//         </div>
//        ) : null} 

      
//     </div>
//   );
};

export default Slider;
