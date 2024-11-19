import React, {useState} from 'react'
import AboutBg from '../assets/images/about-bg1.jpg'
import AboutImg from "../assets/images/about-img.png";
import { FaCheckCircle } from "react-icons/fa";
import { TbWorldStar } from "react-icons/tb";
import { TbTargetArrow } from "react-icons/tb";
import Modal from 'react-bootstrap/Modal';
import Service10 from '../assets/images/service10.jpg'
import { Link } from 'react-router-dom';


export default function About() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <div>
      {/* Hero section */}
      <div className="row ">
        <div className='col banner-bg'>
          <img src={AboutBg} alt="Jaggulas Consulting" />
            <div className="container bg-content">
              <div className="banner-bg-content p-5">
                <h1 className="container"> Who We Are</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Hero section ends*/}

      {/* about section */}
      <div className="section-bg1 border-bottom border-secondary">
        <div className="container py-5">
      <div className="row py-5 px-4 g-4 d-flex justify-content-center">
            <div className="col-md-6">
              <img src={AboutImg} alt="jaggulas consulting" className='img-fluid about-img'/>
            </div>
            <div className="col-md-6 text">
              <h4 className='fw-bold mb-3 about-heading'>About Us</h4>
              <p>At Jaggulas Consulting, our business is about providing to our Clients, Software Development and Cloud Services.
              Our commitment to excellence and integrity sets us apart from other IT service providers. 
                We deliver high-quality applications and products by enhancing performance and efficiency while optimizing costs for both new and legacy systems.
                
              </p>

              <h5 className='fw-bold mb-3 mt-4'>What we offer :<span className='dash ms-2'></span> </h5> 
              <ul className='offer'>
                <li><span><FaCheckCircle className='offer-icon me-2'/> </span> Software development services which includes Web development, Backend development and Api gateways</li>
                <li><span><FaCheckCircle className='offer-icon me-2'/> </span>Cloud services which includes Cloud consulting and Professional services</li>
                <li><span><FaCheckCircle className='offer-icon me-2'/> </span> Cloud managed services to provide your business with outsourced management of cloud infrastructure</li>
                <li><span><FaCheckCircle className='offer-icon me-2'/> </span>Cloud assessments services to help evaluate an organization’s current infrastructure and identify opportunities for migration</li>
                <li><span><FaCheckCircle className='offer-icon me-2'/> </span>Cloud cost optimization to reduce unnecessary cloud expenses by right-sizing resources and optimizing usage </li>
                <li><span><FaCheckCircle className='offer-icon me-2'/> </span>We help businesses transition to the cloud by our cloud migration and modernization services.</li>
             
              </ul>  
              
            </div>
        </div>
      </div>
      </div>
      {/* about section ends */}

      {/* what we do */}

       <div className="location-section p-5 ">
       <h4 className='fw-bold mb-3 about-heading ps-4'>What We Do <span className='dash ms-2'></span></h4>
          <div className="row py-5 px-sm-4 px-0 mx-sm-5 mx-1 d-flex justify-content-center g-4 text-light">
          
          <div className="col-md-4 vision-cont py-2 rounded-3 mx-2">
            <div className="p-3 text-center">
              <div className='vision-icon'><TbWorldStar/></div>
                  <h5 className="  pb-2 mx-2">Our Vision</h5>
                  <div className="cont-inner p-2 ">
                  <p className="address my-3">
                  To shape the future of technology by providing cutting-edge cloud solutions and Advanced Technology Architecture, empowering organizations to innovate and thrive. We aim to be a catalyst for digital transformation, fostering a resilient and interconnected digital landscape that benefits businesses and communities alike.

                  </p>
                  <div className=" my-3">
                    {/* <button className="contact-btn mt-3" onClick={handleShow} >Read More</button> */}
                    <Link to="/Contact">
                    <button className="contact-btn mt-3" >Contact Us</button>
                    </Link>
                  </div>

                  
                </div>
              </div>

            </div>

            <div className="col-md-4 vision-cont py-2 rounded-3 mx-2">
            <div className="p-3 text-center">
              <div className="vision-icon"><TbTargetArrow/></div>
                  <h5 className="  pb-2 mx-2">Our Mission</h5>
                  <div className="cont-inner p-2 ">
                  <p className="address my-3">
                  To empower businesses through innovative cloud-based solutions and exceptional software development, enhancing collaboration, scalability, and operational efficiency, and driving seamless digital transformation.

                  </p>
                  <div className=" my-3">
                    <Link to="/Contact">
                    <button className="contact-btn mt-3" >Contact Us</button>
                    </Link>
                  </div>

                  
                </div>
              </div>

            </div>
          </div>
        </div>
        

      {/* what we do */}


      {/* Modal Section */}

      <>     
       
       <Modal show={show} onHide={handleClose} className='modal-lg modal-bg' style={{backgroundColor: '#050B3A'}} >
          
           <Modal.Header closeButton>
 
           </Modal.Header>
           <Modal.Body>  
           <div className="container"> 
           <div className='row'>            
           <div className='col-sm-5'>    
           <img src={Service10} alt="jaggulas consulting" className='img-fluid service-img pt-5'/>
           </div>

               <div className="col-sm-7 text-light" style={{padding:'30px'}}>
               <h4 className='fw-bold mb-3 about-heading ps-4'>Our Vision</h4>
      
                   <p style={{color:'#050B3A'}}>To shape the future of technology by providing cutting-edge cloud solutions and Advanced Technology Architecture, empowering organizations to innovate and thrive. We aim to be a catalyst for digital transformation, fostering a resilient and interconnected digital landscape that benefits businesses and communities alike.</p>
               </div>     
           </div>
           </div>
               </Modal.Body> 

       </Modal> 
   </>
        {/* Modal Section ends */}
    </div>
  )
}
