"use client"
import React from 'react'
import styles from './Card.module.css'
import Image from 'next/image'
import Link from 'next/link'
import UnavailableCarusel from '../Carusel/UnavailableCarusel'

const Card = ({product}) => {
  return (
    <Link style={{textDecoration:"none" , color:"#272951"}} href={`/SingelProduct/${product.name}`}>
    {product.stock === 0 ? <UnavailableCarusel product = {product}/>:
 <div className={styles.mainContainer}>
        <div className={`${styles.incredibleOfferImageContainer}`}>
        {
          product.incredibleOffers === true ? <Image className={`${styles.incredibleOfferImage}`} alt="IncredibleOffer" src='/IconImages/IncredibleOffer.png' width={200} height={15} /> : null
        }
        </div>
        <p align="justify" className={`${styles.productName}`}> {product.name.substring(0, 25)}{product.name.length > 25 ? "..." : null}</p>
       
                <Image alt={product.name} src={product.indexImageUrl} width={200} height={200} />
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

export default Card