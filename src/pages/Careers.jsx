import React from 'react'
import ToTop from '../components/ToTop'
import CareersBg from '../assets/images/careers-bg.jpg'

export default function Careers() {
  return (
    <div>
      {/* Hero section */}
      <div className="row ">
        <div className='col banner-bg'>
          <img src={CareersBg} alt="Jaggulas Consulting" />
            <div className="container bg-content">
              <div className="banner-bg-content p-5">
                <h1 className="container"> Join Jaggulas Consulting</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Hero section ends*/}

        {/* To top icon */}
         <ToTop />
        {/* To top icon */}
    </div>
  )
}
