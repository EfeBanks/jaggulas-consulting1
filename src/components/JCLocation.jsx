import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { FaClock } from "react-icons/fa";

export default function JCLocation() {
  return (
    <div>
        <div className="location-section p-5 border-bottom border-secondary">
          <div className="sm-container">
          <div className="row mx-sm-5 mx-2 d-flex justify-content-center g-3 text-light">
            <div className="col-lg first-cont py-5 rounded">
            <div className="py-3"> 
                  <h5 className="text-center border-bottom border-secondary pb-2 mx-2">South Africa</h5>
                  <div className="cont-inner p-2">
                  <div className="address my-3">
                    <span className='me-3'><FaLocationDot/></span>80 Strand St, Cape Town City Centre, Cape Town, 8001                 </div>
                    <div className="mail my-3">
                      <span className=''><MdEmail/></span> business@jaggulasconsulting.com

                    </div>
                    <div className="call my-3">
                      <span className='me-3'><MdCall/></span> +27 740687900 
                    </div>
                    <div className="time">
                      <span className='me-3'><FaClock/></span> 8AM to 5PM
                    </div>
                    
                  </div>
                  
              </div>
            </div>

            <div className="col-lg middle-cont mx-4 py-5 rounded">
            <div className="py-3"> 
                  <h5 className="text-center border-bottom border-secondary pb-2 mx-2">South Africa</h5>
                  <div className="cont-inner p-2">
                  <div className="address my-3">
                    <span className='me-3'><FaLocationDot/></span>3 Fairwinds Rd, Eversdal, Cape Town, 7536, South Africa                 </div>
                    <div className="mail my-3">
                      <span className=''><MdEmail/></span> business@jaggulasconsulting.com

                    </div>
                    <div className="call my-3">
                      <span className='me-3'><MdCall/></span> +27 740687900 
                    </div>
                    <div className="time">
                      <span className='me-3'><FaClock/></span> 8AM to 5PM
                    </div>
                    
                  </div>
                  
              </div>
            </div>

            <div className="col-lg second-cont py-5 rounded-3">
            <div className="py-3">
                  <h5 className=" text-center border-bottom border-secondary pb-2 mx-2">India</h5>
                  <div className="cont-inner p-2 ">
                  <div className="address my-3">
                    <span className='me-3'><FaLocationDot/></span> Kushaiguda, Hyderabad, Secunderabad, Telangana 500062
                    </div>
                    <div className="mail my-3">
                      <span><MdEmail/></span> business@jaggulasconsulting.com

                    </div>
                    <div className="call my-3">
                      <span className='me-3'><MdCall/></span> +91 9490790767
                    </div>

                    <div className="time">
                      <span className='me-3'><FaClock/></span> 9AM to 6PM 
                    </div>
                  
                </div>
              </div>

            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

