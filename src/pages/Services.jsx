import React from 'react'
import ServiceBg from '../assets/images/service-bg1.1.jpg'
import Service1 from '../assets/images/service1.jpg'
import Service2 from '../assets/images/service2.jpg'
import Service3 from '../assets/images/service3.jpg'
import Service4 from '../assets/images/service4.jpg'
import Service5 from '../assets/images/service5.jpg'
import Service6 from '../assets/images/service6.jpg'
import Service7 from '../assets/images/service7.jpg'
import Service8 from '../assets/images/service8.jpg'
//import Service9 from '../assets/images/service9.jpg'
import Service10 from '../assets/images/service10.jpg'

export default function Services() {
  return (
    <div>
        {/* Hero section */}
        <div className="row ">
        <div className='col banner-bg'>
          <img src={ServiceBg} alt="Jaggulas Consulting" />
            <div className="container bg-content">
              <div className="banner-bg-content p-5">
                <h1 className="container"> Our Services</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Hero section ends*/}

      {/* content section 1*/}
      <div className="section-bg1 border-bottom border-secondary" id="consulting">
        <div className="container py-sm-5 py-5">
      <div className="row py-5 px-4 g-5 d-flex justify-content-center">
            <div className="col-sm-4">
              <img src={Service10} alt="jaggulas consulting" className='img-fluid service-img'/>
            </div>
            <div className="col-sm-4 text">
              <h4 className='fw-bold mb-3'>Cloud Consulting Services</h4>
              <p>Cloud consulting services help businesses optimize cloud infrastructure, enhance scalability, improve security, and reduce costs through strategic planning, implementation, and management of cloud-based solutions.
              </p>   
              
            </div>
        </div>
      </div>
      </div>
      {/* content section 1 ends */}

       {/* content section 2*/}
       <div className="section-bg2 border-bottom border-secondary" id="managed">
        <div className="container py-sm-5 py-5 ">
      <div className="row py-5 px-4 g-5 d-flex justify-content-center">
          
            <div className="col-sm-4 text">
              <h3 className='fw-bold mb-3'>Managed Services</h3>
              <p>Cloud managed services provide businesses with outsourced management of cloud infrastructure, including monitoring, security, optimization, and support, ensuring efficient and scalable operations without internal resource strain. 
              </p>   
              
            </div>
            <div className="col-sm-4">
              <img src={Service2} alt="jaggulas consulting" className='img-fluid service-img'/>
            </div>
        </div>
      </div>
      </div>
      {/* content section 2 ends */}

      
      {/* content section 3*/}
      <div className="section-bg1 border-bottom border-secondary" id="professional">
        <div className="container py-sm-5 py-5">
      <div className="row py-5 px-4 g-5 d-flex justify-content-center">
            <div className="col-sm-4">
              <img src={Service1} alt="jaggulas consulting" className='img-fluid service-img'/>
            </div>
            <div className="col-sm-4 text">
              <h3 className='fw-bold mb-3'>Professional Services</h3>
              <p>Cloud professional services offer expertise in cloud strategy, migration, implementation, management, and optimization, helping businesses leverage cloud solutions for scalability, security, and cost-efficiency.
              </p>   
             
            </div>
        </div>
      </div>
      </div>
      {/* content section 3 ends */}

      {/* content section 4*/}
      <div className="section-bg2 border-bottom border-secondary" id="cloudassessments">
        <div className="container py-sm-5 py-5 ">
      <div className="row py-5 px-4 g-5 d-flex justify-content-center" >
          
            <div className="col-sm-4 text">
              <h3 className='fw-bold mb-3'>Cloud Assessments</h3>
              <p>Cloud assessments evaluate an organization’s current infrastructure, identify opportunities for migration, optimize performance, ensure security, and provide a roadmap for cloud adoption and transformation strategies. 
              </p>   
              
            </div>
            <div className="col-sm-4">
              <img src={Service3} alt="jaggulas consulting" className='img-fluid service-img'/>
            </div>
        </div>
      </div>
      </div>
      {/* content section 4 ends */}

         {/* content section 5 */}
         <div className="section-bg1 border-bottom border-secondary" id="cloudcost">
        <div className="container py-sm-5 py-5">
      <div className="row py-5 px-4 g-5 d-flex justify-content-center">
            <div className="col-sm-4">
              <img src={Service6} alt="jaggulas consulting" className='img-fluid service-img'/>
            </div>
            <div className="col-sm-4 text">
              <h3 className='fw-bold mb-3'>Cloud Cost Optimization</h3>
              <p>Cloud cost optimization focuses on reducing unnecessary cloud expenses by right-sizing resources, optimizing usage, selecting cost-effective services, and implementing efficient monitoring and management strategies for savings.
              </p>   
             
            </div>
        </div>
      </div>
      </div>
      {/* content section 5 ends */}

      {/* content section 6*/}
      <div className="section-bg2 border-bottom border-secondary" id="migration">
        <div className="container py-sm-5 py-5 ">
      <div className="row py-5 px-4 g-5 d-flex justify-content-center">
          
            <div className="col-sm-4 text">
              <h3 className='fw-bold mb-3'>Migration & Modernization</h3>
              <p>Our Cloud migration and modernization services help businesses transition to the cloud, optimize existing systems, enhance performance, scalability, and security, while enabling innovation and cost savings.
              </p>   
              
            </div>
            <div className="col-sm-4">
              <img src={Service7} alt="jaggulas consulting" className='img-fluid service-img'/>
            </div>
        </div>
      </div>
      </div>
      {/* content section 6 ends */}

         {/* content section 7 */}
         <div className="section-bg1 border-bottom border-secondary" id="web">
        <div className="container py-sm-5 py-5">
      <div className="row py-5 px-4 g-5 d-flex justify-content-center">
            <div className="col-sm-4">
              <img src={Service8} alt="jaggulas consulting" className='img-fluid service-img'/>
            </div>
            <div className="col-sm-4 text">
              <h3 className='fw-bold mb-3'>Web Application Development</h3>
              <p>At Jaggulas Consulting, we create custom, scalable, and secure web solutions, focusing on user experience, performance, and integration to meet business needs and drive growth.
              </p>   
             
            </div>
        </div>
      </div>
      </div>
      {/* content section 7 ends */}

      {/* content section 8*/}
      <div className="section-bg2 border-bottom border-secondary" id="backend">
        <div className="container py-sm-5 py-5 ">
      <div className="row py-5 px-4 g-5 d-flex justify-content-center">
          
            <div className="col-sm-4 text">
              <h3 className='fw-bold mb-3'>Backend Development</h3>
              <p>We build robust server-side applications, databases, and APIs, ensuring scalability, security, and seamless integration to support frontend functionality and optimize user experiences and business functionality.
              </p>   
              
            </div>
            <div className="col-sm-4">
              <img src={Service5} alt="jaggulas consulting" className='img-fluid service-img'/>
            </div>
        </div>
      </div>
      </div>
      {/* content section 8 ends */}

         {/* content section 9 */}
         <div className="section-bg1 border-bottom border-secondary" id="api">
        <div className="container py-sm-5 py-5">
      <div className="row py-5 px-4 g-5 d-flex justify-content-center">
            <div className="col-sm-4">
              <img src={Service4} alt="jaggulas consulting" className='img-fluid service-img'/>
            </div>
            <div className="col-sm-4 text">
              <h3 className='fw-bold mb-3'>API Gateways</h3>
              <p>At Jaggulas Consulting, we manage, route, and secure API traffic, providing centralized authentication, load balancing, rate limiting, and monitoring to optimize communication between microservices and applications.
              </p>   
             
            </div>
        </div>
      </div>
      </div>
      {/* content section 9 ends */}


    </div>
  )
}
