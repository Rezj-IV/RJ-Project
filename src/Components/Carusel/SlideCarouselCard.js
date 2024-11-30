import React from 'react'
import styles from './SlideCarouselCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
import UnavailableCarusel from './UnavailableCarusel'

const SlideCarouselCard = ({product}) => {
  return (
    <Link href={`/SingelProduct/${product.name}`} className={styles.LinkContainer}>
      {product.stock === 0 ? <UnavailableCarusel product = {product}/>:
     <div className={styles.mainContainer}>
        <div className={`${styles.incredibleOfferImageContainer}`}>
        {
          product.incredibleOffers === true ? <Image className={`${styles.incredibleOfferImage}`} alt="IncredibleOffer" src='/IconImages/IncredibleOffer.png' width={140} height={15} /> : null
        }
        </div>
       
                <Image className={styles.PrdImage} alt={product.name} src={product.indexImageUrl} width={180} height={180} />

                <p align="justify" className={`${styles.productName}`}> {product.name.substring(0, 35)}{product.name.length > 35 ? "..." : null}</p>

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
}
    </Link>
  )
}

export default SlideCarouselCard