import React from 'react'
import CareersBg from '../assets/images/careers-bg.jpg'
import CareerImg from '../assets/images/nperson2.jpg'
import { BsBuildingsFill } from "react-icons/bs";
import { GiTeamIdea } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";
import { HashLink } from 'react-router-hash-link';

export default function Jobs() {
  return (
    <div>
       {/* Hero section */}
       <div className="row ">
        <div className='col banner-bg'>
          <img src={CareersBg} alt="Jaggulas Consulting" />
            <div className="container bg-content">
              <div className="banner-bg-content p-5">
                <h1 className="container">Join Jaggulas Consulting</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Hero section ends*/}

       {/* Career section 1 */}
       <div className="second-section border-bottom border-secondary">
        <div className="container py-5">
      <div className="row px-4 g-4 d-flex justify-content-center">
            <div className="col-md-6">
              <img src={CareerImg} alt="jaggulas consulting" className='img-fluid about-img rounded'/>
            </div>
            <div className="col-md-6 text">
              <h4 className='fw-bold mb-1 about-heading'>Unlock Your Potential,</h4>
              <h5 className='fw-bold mb-3'>Join Jaggulas Consulting Family</h5>
              <p>At Jaggulas Consulting, we are committed to creating a work environment that is both positive and inclusive, believing it is essential for success. Our goal is to cultivate a culture where values like joy, respect, empathy, and opportunities for learning and growth go beyond mere words and are central to everything we do. We promote a joyful atmosphere by encouraging collaboration, recognizing achievements, and supporting a balanced work-life dynamic. </p>
              
              <p>Diversity is valued and celebrated, as we understand that different viewpoints drive innovation and progress. Respect and empathy form the foundation of our relationships, fostering a supportive and welcoming environment. Moreover, we offer extensive opportunities for professional growth, empowering our team members to achieve their full potential.
              </p> 
              
            </div>

            <div className="row text-center mt-4">
            <p><b>Come be a part of our team </b> and discover the ideal workplace, where your happiness and personal development are our top priorities.</p>  
            </div>
        </div>

      </div>
      </div>
      {/* Career section 1 ends */}

       {/* Career section 2*/}
       <div className="location-section p-5 border-bottom border-secondary ">
        <div className="container">
          <div className="row pt-5 pb-3 px-sm-4 px-0 mx-sm-5 mx-1 text-center text-light">

            <h4 className="col-12 fw-bold">BENEFITS OF JOINING JAGGULAS CONSULTING</h4>

          </div>

          {/* <div className="row px-sm-4 px-0 mx-sm-5 mx-1 flip-cont text-light">   */}
          <div className="row px-sm-4 px-0 flip-cont text-light">  
          <div className="col-md py-2">
            <div className="flip-card">
                <div class="flip-card-front p-2">
                <div className="vision-icon py-2"><BsBuildingsFill/></div>
                  <h5 className="py-2 mx-2 fw-bold">Work with the Latest Tech and the Best</h5>
                </div>
                <div class="flip-card-back p-2">
                <div className="vision-icon py-2"><BsBuildingsFill/></div>
                <h5>Work with the Latest Tech and the Best</h5>
                  <p className='small'>Work with cutting-edge technology alongside the best in the industry. </p>
                </div> 
              </div>     
            </div>

            <div className="col-md py-2">
            <div className="flip-card">
                <div class="flip-card-front p-2">
                <div className="vision-icon py-2"><GiTeamIdea/></div>
                  <h5 className="py-2 mx-2 fw-bold">Talent Development</h5>
                </div>
                <div class="flip-card-back p-2">
                <div className="vision-icon py-2"><GiTeamIdea/></div>
                <h5>Talent Development</h5>
                  <p className='small'>Fostering talent and career growth to expand your expertise in technology.</p>
                </div> 
              </div>     
            </div>

            <div className="col-md py-2">
            <div className="flip-card">
                <div class="flip-card-front p-2">
                <div className="vision-icon py-2"><GiBrain/></div>
                  <h5 className="py-2 mx-2 fw-bold">Soft skills development</h5>
                </div>
                <div class="flip-card-back p-2">
                <div className="vision-icon py-2"><GiBrain/></div>
                <h5>Soft skills development</h5>
                  <p className='small'>We prioritize soft skills to improve communication, collaboration, leadership.</p>
                </div> 
              </div>     
            </div>

            </div>

          </div>
        </div>
        

      {/* Career section 2 ends */}

     
      {/* Career section 3 */}
      <div className="second-section border-bottom border-secondary">
        <div className="container">
        <div className="row pt-5 pb-3 px-sm-4 px-0 mx-sm-5 mx-1 text-center text-light">
            <h4 className="col-12 fw-bold about-heading">Open Positions</h4>
        </div>
            <div className="row px-sm-4 px-0 mx-sm-5 mx-1 g-4 d-flex justify-content-center my-2">
                <div className="col-md py-2 mx-2">
                <div className="row p-sm-3 p-2 text-center border border-secondary rounded-3 my-3">                  
                        <div className="col-sm-4">
                            <h5 className='fw-bold'>Intern</h5>
                        </div>
                        <div className="col-sm-4">
                            <p><b>Job Type:</b> Hybrid</p>
                            <p><b>Location:</b> Capetown, South Africa</p>
                        </div>
                        <div className="col-sm-4">
                        <HashLink to='/Careers#apply'> <button className='know-more p-2'>Apply</button> </HashLink>
           
                        </div> 
                </div>

                <div className="row p-sm-3 p-2 text-center border border-secondary rounded-3 my-3">                  
                        <div className="col-sm-4">
                            <h5 className='fw-bold'>Testing</h5>
                        </div>
                        <div className="col-sm-4">
                            <p><b>Job Type:</b> Hybrid</p>
                            <p><b>Location:</b> Capetown, South Africa</p>
                        </div>
                        <div className="col-sm-4">
                        <button className='apply p-2'>Apply</button> 
           
                        </div> 
                </div>

                <div className="row p-sm-3 p-2 text-center border border-secondary rounded-3 my-3">                  
                        <div className="col-sm-4">
                            <h5 className='fw-bold'>Development</h5>
                        </div>
                        <div className="col-sm-4">
                            <p><b>Job Type:</b> Hybrid</p>
                            <p><b>Location:</b> Capetown, South Africa</p>
                        </div>
                        <div className="col-sm-4">
                        <button className='apply p-2'>Apply</button> 
           
                        </div> 
                </div>

                <div className="row p-sm-3 p-2 text-center border border-secondary rounded-3 my-3">                  
                        <div className="col-sm-4">
                            <h5 className='fw-bold'>Web design</h5>
                        </div>
                        <div className="col-sm-4">
                            <p><b>Job Type:</b> Hybrid</p>
                            <p><b>Location:</b> Capetown, South Africa</p>
                        </div>
                        <div className="col-sm-4">
                        <button className='apply p-2'>Apply</button> 
           
                        </div> 
                </div>

                </div>

            </div>
        </div>
       </div>

      {/* Career section 3 ends */}

      {/* Career section 4 */}
      <div className='second-section border-bottom border-secondary' id='apply'>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-8 p-5">
            <h5 className='pb-2 fw-bold'>Job Application</h5>
            <p className='small'>Share us your Resume and will reach out to you once we have available positions  if the opportunity suits your Role/Position </p>

            <form id="contact-form" method="POST" className='small py-4'>
              <div className="row">
                <div className='col-sm-6 py-2'>
                  <input name= "fName" type="text" placeholder="First Name*"  className='input-full' required/>
                </div>
                <div className="col-sm-6 py-2">
                  <input name= "lName" type="text" placeholder="Last Name* " className='input-full' required />
                </div>
              

              <div className='col-sm-6 py-2'>
                <input name= "email" type="email" placeholder="Email*" className='input-full' required/>
              </div>
              <div className='col-sm-6 py-2'> <input name= "Mobile No." type="text" placeholder='Organization*' className='input-full' required />
              </div>
              </div>

              <div className='py-2'>
                <input type="text" placeholder='Profile link' className='input-full' />
              </div>

              <div className='py-2'>
              <label htmlFor="">Upload your Cover letter*</label>
                <input type="file" className='input-full' required/>
              </div>

              <div className='py-2'>
                <label htmlFor="">Upload your CV*</label>
                <input type="file" placeholder='Upload your CV*' className='input-full' required/>
              </div>
              <div>
              <button type="submit" className='know-more mt-3 py-2 px-3'>Submit</button> 
              </div>

              
          </form>


          </div>
        </div>
      </div>
      </div>




       {/* Career section 4 ends */}



      


    </div>
  )
}
