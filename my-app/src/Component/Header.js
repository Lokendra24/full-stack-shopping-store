import React, { useContext, useEffect, useState } from 'react'
import Search from './Search';
import '../Css/Header.css'

import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useNavigate } from 'react-router-dom';

import { shoppingContext } from '../Context/ContextApi';

function Header() {

  const navigate=useNavigate()
  const {data,cartData,total,setTotal,HandleRemoveFromCart,HandleCartProductQuantity}=useContext(shoppingContext)

  const base_url='http://localhost:1337'

  const [mobileMenu,setMobileMenu]=useState(false)
  const [searchBar,setSearchBar]=useState(false)

  const HandleClick=()=>{
      if(mobileMenu)
       setMobileMenu(false)
      else
       setMobileMenu(true)
  }

  const HandleSearch=()=>{
      if(searchBar)
       setSearchBar(false)
      else
       setSearchBar(true)
  }

  useEffect(()=>{
    let total=0
    cartData.map((element)=>{
      total=total + (element.attributes.price)*(element.quantity)
    })
    setTotal(total)
  },[cartData])


  return (
    <div className='menu_or_search_container'>
    <div className='header_container'>
       <div className='content_container'>
        <div className='first_section'>
          <h6 onClick={()=>navigate('/')} >HOME</h6>
          <h6>ABOUT</h6>
          <h6>CATEGORIES</h6>
        </div>   
        <h4 onClick={()=>navigate('/')}>YOUR-STORE</h4>
        <div className='last_section'>
          <div onClick={HandleSearch} ><SearchIcon className='header_icon' /></div>
          <FavoriteBorderIcon className='header_icon' />
          <div onClick={HandleClick}><ShoppingCartIcon className='header_icon' /></div>
        </div>
       </div>  
    </div>
    {
    mobileMenu &&  
    <>
     <div className='mobil_menu_container' />
      <div className='mobil_menu'>
        <div className='menu_upper_Section'>
          <p>Shoping Cart</p>
          <span onClick={()=>setMobileMenu(false)}>
           <CloseIcon fontSize='small' />
           <p >Close</p>
          </span>
        </div>
        {
         !data && 
          <div className='lower_section'>
           <AddShoppingCartIcon  className='shopping_icon'/>
           <p>No Product in this Cart</p>
           <button >Continue Shopping</button>
          </div>
          }
          {
          data &&
            <div className='middle_section'>
              <div className='md_section_content_container'>
                {
                 cartData.map((element,index)=>{
                  let count=element.quantity
                  return(
                 <div className='md_section_content' key={index} >
                 <img src={ base_url + element?.attributes?.image?.data?.[0]?.attributes?.url} alt='' />
                 <div className='title_button' >
                   <p>{element?.attributes?.title}</p>
                   <div className='cart_buttons'>
                    <button onClick={()=>{HandleCartProductQuantity(count-1,index)}} >-</button>
                    <button>{element.quantity}</button>
                    <button onClick={()=>{HandleCartProductQuantity(count+1,index)}}>+</button>
                   </div>
                   <span>{element.quantity} x <span>{element?.attributes?.price} Rs</span></span>
                 </div>
                 <div onClick={()=>HandleRemoveFromCart(cartData,index)} > <CloseIcon fontSize='small' style={{cursor:'pointer'}} /></div>
                 </div>)}
                 ) 
                  }
              </div>
              <div className='lw_section_content'>
                <div className='total_amount' >
                  <p>SUBTOTAL:</p>
                  <h4>{total} Rs</h4>
                </div>
                <div><button>Checkout</button></div>
              </div>
            </div>
          }
      </div>    
      </>  
      }
      {
       searchBar && <Search setSearchBar={setSearchBar} />
      }   
    </div>
  )
}

export default Header