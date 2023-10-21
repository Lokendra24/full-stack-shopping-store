import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const shoppingContext=createContext()

function ContextApi(props) {
    const [data,setData]=useState([])
    const [category,setCategory]=useState([])
    const [relatedData,setRelatedData]=useState([])
    const [cartData,setCartData]=useState([])
    const [total,setTotal]=useState(0)
    const location=useLocation()
 
    useEffect(() => {
      window.scrollTo(0, 0);
  }, [location]);
    
    const HandleAddToCart=(product,quantity)=>{

      product={...product,...{quantity:quantity}}

      let result= cartData.find((data)=>data.id === product.id)
      if(!result)
        setCartData([...cartData,product])

      setTotal(0)  
    }

    const HandleRemoveFromCart=(product,index)=>{
      product.splice(index,1)
      setCartData([...cartData])
      setTotal(0)
    }

    const HandleCartProductQuantity=(quantity,index)=>{
      
      cartData[index].quantity=quantity;
      setCartData([...cartData])
      
      setTotal(0)
      
    }

  return (
    <shoppingContext.Provider value={{
        data,
        setData,
        category,
        setCategory,
        relatedData,
        setRelatedData,
        cartData,
        setCartData,
        total,
        setTotal,
        HandleAddToCart,
        HandleRemoveFromCart,
        HandleCartProductQuantity
    }}>
        {props.children}
    </shoppingContext.Provider>
  )
}

export default ContextApi
export {shoppingContext}