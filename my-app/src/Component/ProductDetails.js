import React, { useContext, useEffect, useState } from 'react'
import '../Css/ProductDetails.css'

import ProductCard from './ProductCard';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { shoppingContext } from '../Context/ContextApi';
import { useLocation } from 'react-router-dom';
import { fetchDatafromApi } from '../utils/api';

function ProductDetails() {
  
  const {setRelatedData,relatedData,HandleAddToCart}=useContext(shoppingContext)
  const [itemCount,setItemCount]=useState(1)
  const locate=useLocation()
  const receivData=locate.state 

  const base_url='http://localhost:1337'
  const categoryId=receivData?.attributes?.categories?.data?.[0]?.id
  const productId=receivData?.id

  useEffect(()=>{
    getData()
  },[])

  const getData=()=>{
    fetchDatafromApi(`api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=3`).then(
      ({data})=>{
        setRelatedData(data)
      }
    )
  }

  return (
    <div className='pdtls_container'>
        <div className='pdtls_content'>
           <div className='pdtls_image'>
             <img src={ base_url + receivData?.attributes?.image?.data?.[0]?.attributes?.url} alt='' />
           </div>
           <div className='pdtls_details'>
             <h4>{receivData?.attributes?.title}</h4>
             <h3>Rs {receivData?.attributes?.price}</h3>
             <p>
                {receivData?.attributes?.desc}
            </p>
             <div className='pdtls_buttons'>
                <button onClick={()=>setItemCount(itemCount>1 ? itemCount-1 : itemCount)} >-</button>
                <button>{itemCount}</button>
                <button onClick={()=>setItemCount(itemCount<9 ? itemCount+1 : itemCount)}>+</button>
                <button onClick={()=>{HandleAddToCart(receivData,itemCount);setItemCount(1)}} >
                 <ShoppingCartIcon /> Add To Cart
                </button>
             </div>
             <p>Category: <span>smart Watches</span></p>
             <div className='pdtls_icon'>
                <p>Share:</p>
                <FacebookIcon fontSize='small' />
                <InstagramIcon fontSize='small' />
                <TwitterIcon fontSize='small'/>
                <LinkedInIcon fontSize='small'/>
             </div>
           </div>
        </div>
        <div className='related_container'>
         <h2>Related Product</h2>
         <div className='pp_diivder' />
          <div className='product_container'>
            {
              relatedData?.map((element,index)=> <ProductCard data={element} key={index} />)
            }
          </div>
        </div> 
    </div>
  )
}

export default ProductDetails