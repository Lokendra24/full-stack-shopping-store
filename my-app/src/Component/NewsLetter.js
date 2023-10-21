import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../Css/Newsletter.css'

function NewsLetter() {
  return (
    <div className='nl_container'>
        <div className='nl_image'>
            <img src={require('../assets/newsletter-bg.jpeg')} alt=''/>
        </div>
        <div className='nl_inner'>
            <p>NewsLetter</p>
            <h4>signup for letest update and offers</h4>
            <div>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
            </div>
            <p>Will be used in acordence with our Privacy Policy</p>
            <div className='nl_icon_container'>
             <div className='nl_icon'><FacebookIcon fontSize='small' /></div>
             <div className='nl_icon'><InstagramIcon fontSize='small' /></div>
             <div className='nl_icon'><TwitterIcon fontSize='small' /></div>
             <div className='nl_icon'><LinkedInIcon fontSize='small' /></div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter