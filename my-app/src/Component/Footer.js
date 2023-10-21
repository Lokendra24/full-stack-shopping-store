import React from 'react'
import '../Css/Footer.css'

function Footer() {
  return (
    <div className='f_container' >
        <div className='f_content'>
           <div className='f_first'>
              <h4>About</h4>
              <p>
                 Voluptatem accusantium doloremque laudantium, totam rem
                 aperiam, eaque ipsa quae ab illo inventore veritatis et
                 quasi architecto beatae vitae dicta sunt explicabo eaque
                 ipsa quae ab illo.
              </p>
           </div>
           <div className='f_second'>
              <h4>Contact</h4>
              <p>Kayaloram Rd, Punnamada, Kottankulangara, Alappuzha,
                 Kerala, 688006</p>
              <p>Phone: 0471 272 0261</p>
              <p>Email: store@jsdev.com</p>
           </div>
           <div className='f_third'>
              <h4>Categories</h4>
              <p>Headphones</p>
              <p>Smart Watches</p>
              <p>Bluetooth Speakers</p>
              <p>Wireless Earbuds</p>
              <p>Home Theatre</p>
              <p>Projectors</p>
           </div>
           <div className='f_four'>
              <h4>Pages</h4>
              <p>Home</p>
              <p>About</p>
              <p>Privacy</p>
              <p>Returns</p>
              <p>Terms & Conditions</p>
              <p>Contact Us</p>
           </div>
        </div>
        <div className='f_payment'>
         <img src={require('../assets/payments.png')} alt='' />
        </div>
    </div>
  )
}

export default Footer