import Card from '@/Components/Card/Card';
import GetIncredibleOffers from '@/Components/IncredibleOffersProducts/GetIncredibleOffers';
import React from 'react'

const IncredibleOffersList =  async() => {
    const data = await GetIncredibleOffers()
  return (
    <div>
      {
        data.map(item=>{
            return <Card product={item}/>
        })
      }
    </div>
  )
}

export default IncredibleOffersList