import React, { useEffect, useState } from 'react'
import '../Css/Search.css'

import CloseIcon from '@mui/icons-material/Close';
import { fetchDatafromApi } from '../utils/api';
import { useNavigate } from 'react-router-dom';

function Search({setSearchBar}) {
   
  const navigate=useNavigate()  
    
  const [value,setValue]=useState()  
  const [searchResult,setSearchResult]=useState()

  const base_url='http://localhost:1337'

  const HandleChange=(event)=>{
    setValue(event.target.value)
  }

  useEffect(()=>{
    getData()
  },[value])

  const getData=()=>{
    fetchDatafromApi(`api/products?populate=*&filters[title][$contains]=${value}`).then(
      ({data})=>{
        setSearchResult(data)
      }
    )
  }

  return (
    <div className='search_container'>
          <div className='search_input' >
            <input type='text' placeholder='SEARCH FOR PRODUCTS' onChange={HandleChange} />
            <div className='search_close' onClick={()=>setSearchBar(false)} ><CloseIcon fontSize='large' /></div>
          </div>
          <div className='searchresult_content_container'>
            {
                searchResult?.map((element,index)=>
                <div className='searchresult_container' key={index} onClick={()=>{navigate(`/details/${(element?.attributes?.title).replaceAll(" ", "-")}`,{state:element});setSearchBar(false)}} >
                    <div className='search_image'>
                      <img src={ base_url + element?.attributes?.image?.data?.[0]?.attributes?.url} alt=''  />
                    </div>
                    <div className='search_title_desc'>
                      <h4>{element?.attributes?.title}</h4>
                      <p>{element?.attributes?.desc}</p>
                    </div>
                </div>
                )
            }
          </div>
    </div>
  )
}

export default Search