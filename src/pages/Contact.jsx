import React from 'react'
import ContactBg from '../assets/images/contact-bg.jpg'
import JCLocation from '../components/JCLocation'

export default function Contact() {
  return (
    <div>
      {/* Hero section */}
      <div className="row ">
        <div className='col banner-bg'>
          <img src={ContactBg} alt="Jaggulas Consulting" />
            <div className="container bg-content">
              <div className="banner-bg-content p-5">
                <h1 className="container"> Contact Us</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Hero section ends*/}

       {/* Location */}
        <JCLocation />
      {/* Location ends*/}





    </div>
  )
}
