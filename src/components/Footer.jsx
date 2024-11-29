import React from 'react'
import BrandLogo from '../assets/images/logo2.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


export default function Footer() {
  return (
    <div className='FooterBg p-5 border-top border-secondary'>
      <div className="container">
        <div className="row py-3 d-flex justify-content-center g-4 ">
          <div className="col-sm px-sm-3 px-1">
            <h5 className='about-heading'>Who We Are</h5>
            <p className='small'>At Jaggulas Consulting, our business is about providing to our Clients, Software Development and Cloud Services. Our commitment to excellence and integrity sets us apart from other IT service providers <Link to="/About" className='read-more'>read more...</Link></p>
          </div>
          <div className="col-sm px-sm-3 px-1">
          <h5 className='about-heading'>Quick Links</h5>
            <p> <Link to="/" className='link-text small'>Home</Link> </p>
            <p> <Link to="/Services" className='link-text small'>Services</Link> </p>
            <p> <Link to="/About" className='link-text small'>Who We Are</Link> </p>
            <p> <Link to="/Careers" className='link-text small'>Careers</Link> </p>
            <p> <Link to="/Contact" className='link-text small'>Contact</Link> </p>
          </div>
          <div className="col-sm px-sm-3 px-1">
          <h5 className='about-heading'>Services</h5>
          <p> <HashLink to="/Services#consulting" className='link-text small'>Consulting Services</HashLink> </p>
          <p> <HashLink to='/Services#managed' className='link-text small'>Managed Services</HashLink> </p>
          <p> <HashLink to='/Services#professional' className='link-text small'>Professional Services</HashLink> </p>
          <p> <HashLink to='/Services#web' className='link-text small'>Web Application Development</HashLink> </p>
         
          </div>

          <div className="col-sm px-sm-3 px-1">
          <h5 className='about-heading'>Services</h5>
          <p> <HashLink to='/Services#cloudassessments' className='link-text small'>Cloud Assessments</HashLink> </p>
          <p> <HashLink to='/Services#cloudcost' className='link-text small'>Cloud Cost Optimization</HashLink> </p>
          <p> <HashLink to='/Services#migration' className='link-text small'>Migration & Modernization</HashLink> </p>
          <p> <HashLink to='/Services#backend' className='link-text small'>Backend Development </HashLink> </p>
          <p> <HashLink to='/Services#api' className='link-text small'>API Gateways </HashLink> </p>

          </div>

          <div className="col-sm px-sm-3 px-1">
          <h5 className='about-heading'>Contact Us</h5>
            <p className='small'> business@jaggulasconsulting.com</p>
            <p className='small'>+91 9490790767</p>
            <p className='small'>+27 740687900</p>

          </div>
        </div>

        <div className="row text-center d-flex justify-content-center">
          <img src={BrandLogo} alt="Jaggulas Consulting Logo" className='FooterLogo py-sm-3 py-2' />
          <div className='small'> &copy; 2024 Jaggulas Consulting </div>
        </div>
      </div>

      
    </div>
  )
}
