import React from 'react'
import '../Css/Herosection.css'

function Herosection() {
  return (
    <div className='herosection_container'>
        <div className='herosection_first'>
           <h1>SALES</h1>
           <p>Convallis interdum purus adipiscing dis parturient
            posuere ac a quam a eleifend montes parturient posuere
            curae tempor
            </p>
           <div className='herosection_button'>
             <p>READ MORE</p>
             <p>SHOP NOW</p>
           </div>
        </div>
        <div className='herosection_second'>
            <img src={require('../assets/banner-img.png')} alt='productimage' />
        </div>
    </div>
  )
}

export default Herosection