import React, { useEffect } from "react";
import "../Css/SingleCategory.css";

import ProductCard from "./ProductCard";
import { useLocation, useParams } from "react-router-dom";
import { fetchDatafromApi } from "../utils/api";

import { useContext } from 'react';
import { shoppingContext } from '../Context/ContextApi';


function SingleCategory() {
  
  const locate=useLocation()
  const {query}=useParams()

  const id=locate.state
  const {category,setCategory}=useContext(shoppingContext)

  useEffect(()=>{
    getData()
  },[])

  const getData=()=>{
    fetchDatafromApi(`api/products?populate=*&[filters][categories][id]=${id}`).then(
      ({data})=>{
        setCategory(data)
        // console.log(data)
      }
    )
  }

  return (
    <div className="sg_container">
      <div className="related_container">
        <h2>{query.replaceAll('-',' ')}</h2>
        <div className="pp_diivder" />
        <div className="product_container">
          {
            category?.map((element,index)=><ProductCard data={element} key={index} />)
          }
        </div>
      </div>
    </div>
  );
}

export default SingleCategory;
