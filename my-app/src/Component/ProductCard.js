import React from 'react'
import '../Css/ProductCard.css'
import { useNavigate } from 'react-router-dom'

function ProductCard({data}) {
  const navigate=useNavigate()
  const base_url='http://localhost:1337'

  return (
    <div className='pd_container' onClick={()=>navigate(`/details/${(data?.attributes?.title).replaceAll(" ", "-")}`,{state:data})} >
        <div className='pd_image_container' >
            <img src={ base_url + data?.attributes?.image?.data?.[0]?.attributes?.url} alt='' />
         </div>   
        <h5>{data?.attributes?.title}</h5>
        <h4>Rs {data?.attributes?.price}</h4>
    </div>
  )
}

export default ProductCard