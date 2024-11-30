import React from 'react'
import styles from "./UnavailableCarusel.module.css"
import Image from 'next/image'
const UnavailableCarusel = ({product}) => {
  return (

        
    <div className={styles.opacity} >
 <div className={styles.mainContainer}>
        <div className={`${styles.incredibleOfferImageContainer}`}>
        {
          product.incredibleOffers === true ? <Image className={`${styles.incredibleOfferImage}`} alt={product.name} src='/IconImages/IncredibleOffer.svg' width={200} height={15} /> : null
        }
        </div>
       
                <Image className={styles.PrdImage} alt={product.name} src={product.indexImageUrl} width={150} height={150} />
                {product.priceWithDiscount === 0 ? (
          <div className={`${styles.priceContainer}`}>
            {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان
          </div>
        ) : (
          <div className={`${styles.priceDetail}`}>
            <div className={`${styles.priceContainer}`}>
              <div className={`${styles.priceBeforeOff}`}>
                {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                تومان
              </div>
              <div>
                {product.priceWithDiscount
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                تومان
              </div>
            </div>
            <label className={`${styles.offPrcent}`}>
              {Math.floor(
                ((product.price - product.priceWithDiscount) / product.price) * 100
              )}
              %
            </label>

          </div>

        )}

    </div>
    </div>
    
  )
}

export default UnavailableCarusel