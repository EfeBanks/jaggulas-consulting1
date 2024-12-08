import React, {useState} from 'react'
import ContactBg from '../assets/images/contact-bg.jpg'
import JCLocation from '../components/JCLocation';
import Man from '../assets/images/nperson.1.jpg';
import ToTop from '../components/ToTop';

export default function Contact() {
  const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  const [values, setValues] = useState({email: ''});
  const [errors, setErrors] = useState({});

  const ValidateForm = (e) => {
    e.preventDefault();
    const errors ={};

    if(!isEmail(values.email)){
      errors.email = 'Wrong email format';
    }

    setErrors(errors);

    if(!Object.keys(errors).length){
      // alert(JSON.stringify(values, null, 2));
      alert("Correct email format")
    }
  }

  const setEmail = (e) =>{
    setValues((values) => ({...values, email: e.target.value}));
  }

  return (
    <div style={{overflowX:'hidden'}}>
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
      

      {/* Contact form section */}
      <div className='section-bg1 border-bottom border-secondary'>
      <div className="container">
        <div className="row g-5 d-flex justify-content-center">
          <div className="col-sm-8 p-5">
            <h5 className='pt-5 pb-2 fw-bold'>REQUEST FOR SERVICE</h5>
            <p className='small'>We have fostered growth and meaningful transformation in every industry and are eager to build on your trust. Share a bit more about yourself so we can get started!</p>

            <form id="contact-form" onSubmit={ValidateForm} action="https://formspree.io/f/movqzqzj" method="POST" className='small py-4'> 
              <div className="row">
                <div className='col-sm-6 py-2'>
                  <input name= "firstName" type="text" placeholder="First Name*"  className='input-full' required/>
                </div>
                <div className="col-sm-6 py-2">
                  <input name= "lastName" type="text" placeholder="Last Name* " className='input-full' required />
                </div>
              

              <div className='col-sm-6 py-2'>
                <input name= "email" id="userEmail" value={values.email} onChange={setEmail} type="email" placeholder="Email*" className='input-full'/>
              </div>

              {Object.entries(errors).map(([key, error]) => (
              <span
              key={`${key}: ${error}`}
              style={{color:'red'}}>
                {key} : {error}
              </span>
            ))} 

              <div className='col-sm-6 py-2'> <input name= "organization" type="text" placeholder='Organization' className='input-full' />
              </div>
              </div>

              <div className='py-2'>
                <input type="text" name='region' placeholder='Region*' className='input-full' required/>
              </div>

              <div className='py-2'>
                <input type="text" name='industry' placeholder='Industry' className='input-full'/>
              </div>
              <textarea name="message" rows="2" placeholder='How can we help you?*' required></textarea>
              <div>
                <div className='mt-3 mb-5'>
                  <input type="checkbox" name='consent1'/> <span>I consent to the processing of my personal data entered above for Jaggulas consulting to contact me.</span> <br/>
                  <input type="checkbox" name='consent2' /> <span>I would like to receive details about products, services and events from Jaggulas consulting.</span>
              </div>
              <button type="submit" className='know-more mt-3 py-2 px-3'>Submit</button> 
              </div>

           
          </form>


          </div>

          <div className="col-sm-4">
            <img src={Man} alt="man" />
          </div>
        </div>
      </div>
      </div>


      {/* Contact form section ends */}

       {/* Location */}
        <JCLocation />
      {/* Location ends*/}

      {/* To top icon */}
        <ToTop />
      {/* To top icon */}





    </div>
  )
}
