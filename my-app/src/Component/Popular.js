import React, { useContext, useEffect } from 'react'
import ProductCard from './ProductCard'
import '../Css/Popular.css'
import { fetchDatafromApi } from '../utils/api'
import { shoppingContext } from '../Context/ContextApi'

function Popular() {

  const {data,setData}=useContext(shoppingContext)

  useEffect(()=>{
    getData()
  },[])

  const getData=()=>{
    fetchDatafromApi('api/products?populate=*').then(
      ({data})=>{
        setData(data)
        // console.log(data)
      }
    )
  }

  return (
    <div className='pp_container'>
        <h2>Popular</h2>
        <div className='pp_diivder' />
        <div className='product_container'>
          {
            data?.map((element,index)=><ProductCard data={element} key={index} />)
          }
        </div>
    </div>
  )
}

export default Popular