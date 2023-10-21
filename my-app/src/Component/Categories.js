import React from 'react'
import '../Css/Categories.css'
import { useNavigate } from 'react-router-dom'

import { useContext, useEffect } from 'react';
import { shoppingContext } from '../Context/ContextApi';
import { fetchDatafromApi } from '../utils/api';

function Categories() {
    const navigate=useNavigate()

    const base_url='http://localhost:1337'
    const {category,setCategory}=useContext(shoppingContext)

  useEffect(()=>{
    getData()
  },[])

  const getData=()=>{
    fetchDatafromApi('api/categories?populate=*').then(
      ({data})=>{
        setCategory(data)
      }
    )
  }

  return (
    <div className='ct_container'>
        <div className='img_container' onClick={()=>navigate(`/category/${(category[0]?.attributes?.title).replaceAll(" ", "-")}`,{state:category[0]?.id})}>
            <img src={ base_url + category[0]?.attributes?.image?.data?.attributes?.url} alt='' />
        </div>
        <div className='img_container' onClick={()=>navigate(`/category/${(category[1]?.attributes?.title).replaceAll(" ", "-")}`,{state:category[1]?.id})}>
            <img src={base_url + category[1]?.attributes?.image?.data?.attributes?.url} alt='' />
        </div>
        <div className='img_container' onClick={()=>navigate(`/category/${(category[2]?.attributes?.title).replaceAll(" ", "-")}`,{state:category[2]?.id})}>
            <img src={base_url + category[2]?.attributes?.image?.data?.attributes?.url} alt='' />
        </div>
        <div className='img_container' onClick={()=>navigate(`/category/${(category[3]?.attributes?.title).replaceAll(" ", "-")}`,{state:category[3]?.id})}>
            <img src={base_url + category[3]?.attributes?.image?.data?.attributes?.url} alt='' />
        </div>
    </div>
  )
}

export default Categories