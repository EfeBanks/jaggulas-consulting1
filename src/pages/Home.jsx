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
import JCLocation from '../components/JCLocation';
import { HashLink } from 'react-router-hash-link';


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
              <HashLink to='./#second'>
                <img src={scrolldown} alt="scroll down" className='scrolldown' />
              </HashLink>
            </div>
          {/* </div>    */}
          
          
        </div>
      </div>
        {/* Hero section ends */}

     {/* Trusted Partner */}
     <div className="second-section" id='second'>
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

        {/* Services showcase */}
        <div className="second-section">
        <div className="row">
                <div className="col-12 mb-4 trusted-partner text-center">
                  <h3>Elevate your business with Jaggulas Consulting</h3>
                </div>
        </div>
    
          <div className="row showcase-cont mx-3">
            <div className="panel" id="panel-1">
              <h6 className='fw-bold'>Consulting Services</h6>
              <HashLink to='/Services#consulting'> <button className='reveal know-more p-2'>Know more</button> </HashLink>
            </div>
            <div className="panel" id="panel-2">
            <h6 className='fw-bold'>Managed Services</h6>
            <HashLink to='/Services#managed'> <button className='reveal know-more p-2'>Know more</button> </HashLink>
            </div>
            <div className="panel" id="panel-3">
            <h6 className='fw-bold'>Professional Services</h6>
            <HashLink to='/Services#professional'> <button className='reveal know-more p-2'>Know more</button> </HashLink>
            </div>
            <div className="panel" id="panel-4">
            <h6 className='fw-bold'>Cloud Assessments</h6>
            <HashLink to='/Services#cloudassessments'> <button className='reveal know-more p-2'>Know more</button> </HashLink>
            </div>
            <div className="panel" id="panel-5">
            <h6 className='fw-bold'>Cloud Cost Optimization</h6>
            <HashLink to='/Services#cloudcost'> <button className='reveal know-more p-2'>Know more</button> </HashLink>
            </div>
            <div className="panel" id="panel-6">
            <h6 className='fw-bold'>Migration & Modernization</h6>
            <HashLink to='/Services#migration'> <button className='reveal know-more p-2'>Know more</button> </HashLink>
            </div>
            <div className="panel" id="panel-7">
            <h6 className='fw-bold'>Web Application Development</h6>
            <HashLink to='/Services#web'> <button className='reveal know-more p-2'>Know more</button> </HashLink>
            </div>
            <div className="panel" id="panel-8">
            <h6 className='fw-bold'>Backend Development</h6>
            <HashLink to='/Services#backend'> <button className='reveal know-more p-2'>Know more</button> </HashLink>
            </div>
            <div className="panel" id="panel-9">
            <h6 className='fw-bold'>API Gateways</h6>
            <HashLink to='/Services#api'> <button className='reveal know-more p-2'>Know more</button> </HashLink>
            </div>

          </div>
        </div>

        {/* Services showcase ends*/}

          {/* Location */}
          <JCLocation />

         {/* Location ends*/}





    </div>
  )
}

export default Home