import React from 'react';
import cloudvid from '../assets/cloudvideo.mp4';
import dummy1 from '../assets/images/dummy1.png';
import dummy2 from '../assets/images/dummy2.png';
import dummy3 from '../assets/images/dummy3.png';
import dummy4 from '../assets/images/dummy4.png';
import handshake from '../assets/images/handshake1.png'
import handshake2 from '../assets/images/handshake2.png'
import scrolldown from '../assets/images/scrolldown.png'
//import { RiScrollToBottomLine } from "react-icons/ri";
import { FaAward } from "react-icons/fa";
import { GrCloudSoftware } from "react-icons/gr";
import { MdDisplaySettings } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { FaClock } from "react-icons/fa";

function Home() {
  return (
    <div>
         {/* Hero section */}
      <div className="row">
        <div className='videoBg'>
          
          <video src={cloudvid} autoPlay loop muted playsInline webkit-playsInline />
          <div className="videoBg-overlay"></div>
          {/* <div className="caption"> */}
            <div className="caption1">
                <h1>Jaggulas Consulting</h1>
                <h3>Your Perfect Virtual Partner</h3> 
            </div>
            <div className="caption2"> 
                <div className='moving-img'> <img src={dummy1} alt="dummy logo" /></div>
                <div className='moving-img'> <img src={dummy2} alt="dummy logo" /> </div>
                <div className='moving-img'> <img src={dummy3} alt="dummy logo" /> </div>
                <div className='moving-img'> <img src={dummy4} alt="dummy logo" /> </div>
                <div className='moving-img'> <img src={dummy1} alt="dummy logo" /></div>
                <div className='moving-img'> <img src={dummy2} alt="dummy logo" /> </div>
                <div className='moving-img'> <img src={dummy3} alt="dummy logo" /> </div>
                <div className='moving-img'> <img src={dummy4} alt="dummy logo" /> </div>
                
            </div>
            <div className="caption3">
              {/* <span className='scrolldown'><RiScrollToBottomLine /></span> */}
              <img src={scrolldown} alt="scroll down" className='scrolldown' />

            </div>
          {/* </div>    */}
          
          
        </div>
      </div>
        {/* Hero section ends */}

     {/* Trusted Partner */}
     <div className="second-section">
        <div className="row align-items-center mx-sm-5 mx-3">
            <div className="col-sm-4 m-sm-4 m-2 p-2 ps-0 "  >
              <img src={handshake} alt="handshake" className='handshake img-fluid'/>
              <img src={handshake2} alt="handshake" className='handshake2 img-fluid'/>
            </div>
            <div className="col-sm">
            <div className="row">
                <div className="col-12 mb-4 trusted-partner">
                  <h3>Trusted Partner for Business Transformation</h3>
                </div>
            </div>

            <div className="row">
            <div className="col-sm second-section-text">

              <div className='second-section-icon'> <FaAward /></div>
              <h5 className='my-3'>High Quality Delivery</h5>
              <p>
                We deliver to our clients high-quality software applications and products as well as cloud services by enhancing performance and efficiency while optimizing costs for both new and legacy systems.
 
              </p>
            </div>
            <div className="col-sm second-section-text">

            <div className='second-section-icon'> <MdDisplaySettings /></div>
              <h5 className='my-3'>Software Development</h5>
              <p>
                At Jaggulas Consulting, we build custom software development services to create tailored, scalable, and efficient solutions for your business needs, enhancing performance and user experience.
 
              </p>
            </div>
            <div className="col-sm second-section-text">
            <div className='second-section-icon'> <GrCloudSoftware /></div>
              <h5 className='my-3'>Cloud Services</h5>
              <p>
              We provide comprehensive cloud services offering secure data storage, scalable infrastructure, and seamless collaboration tools to boost efficiency, flexibility, and business growth while ensuring high performance and reliability.
 
              </p>
            </div>
            </div>
            </div> 
        </div>
      </div>  
        {/* Trusted Partner ends */}

        {/* Location */}
        <div className="location-section p-5">
          <div className="row  mx-sm-5 mx-2 d-flex justify-content-center g-3 text-light">
            <div className="col-sm-3 first-cont mx-4 py-5 rounded">
            <div className="p-3"> 
                  <h5 className="text-center border-bottom border-secondary pb-2 mx-2">India</h5>
                  <div className="cont-inner p-2">
                  <div className="address my-3">
                    <span className='me-3'><FaLocationDot/></span> Kushaiguda, Hyderabad, Secunderabad, Telangana 500062
                    </div>
                    <div className="mail my-3">
                      <span className=''><MdEmail/></span>  business@jaggulasconsulting.com

                    </div>
                    <div className="call my-3">
                      <span className='me-3'><MdCall/></span> +91 9490790767
                    </div>
                    <div className="time">
                      <span className='me-3'><FaClock/></span>  9AM to 6PM
                    </div>
                    
                  </div>
                  
              </div>
            </div>

            <div className="col-sm-3 second-cont py-5 rounded-3">
            <div className="p-3">
                  <h5 className=" text-center border-bottom border-secondary pb-2 mx-2">South Africa</h5>
                  <div className="cont-inner p-2 ">
                  <div className="address my-3">
                    <span className='me-3'><FaLocationDot/></span> 3 Fairwinds Rd, Eversdal, Cape Town, 7536, South Africa
                    </div>
                    <div className="mail my-3">
                      <span><MdEmail/></span>  business@jaggulasconsulting.com

                    </div>
                    <div className="call my-3">
                      <span className='me-3'><MdCall/></span> +27 740687900 
                    </div>

                    <div className="time">
                      <span className='me-3'><FaClock/></span>  8AM to 5PM
                    </div>
                  
                </div>
              </div>

            </div>
          </div>
        </div>
        
         {/* Location ends*/}






    </div>
  )
}

export default Home