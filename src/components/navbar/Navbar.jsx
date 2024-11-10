import React, {useState} from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import BrandLogo from '../../assets/images/logo2.png';
import { FaArrowRightLong } from "react-icons/fa6";


export default function NavigationBar({menuOpen, setMenuOpen}) {

    // Making the links close Navbar on click
    const [megaShow, setMegaShow] = useState(false);


   
  return (
    <nav>
        <div className='navbar'>
            <div className="logo fw-bold">
                <Link to='/' className='brand-logo mb-5'><img src={BrandLogo} alt="Cloudknod logo" className='mb-2'/></Link>
            </div>

            <ul className= {"nav-links " + (menuOpen && "show")}>               
                <div className='btn cancel-btn ms-2'>
                    <FaTimes  onClick={() => setMenuOpen (false)}/>
                </div> 

                <li>
                     {/* For Desktop view */}
                     <Link to='/Industries ' className="nav-link desktop-item"> Services  
                <span className='icon-rotate ms-2'> <IoIosArrowDown /> </span></Link>

                    {/* For mobile view */}
                        <div className='mobile-separate mobile-item'>
                        <div className='separate1' > 
                            <Link to='/Industries' className="nav-link" onClick={() => setMenuOpen (false)}> Services </Link>
                        </div>

                        <div className='separate2' > 
                           <div className=" ms-2 nav-link"><span className=' ms-2' onClick={() => setMegaShow (!megaShow)}> <IoIosArrowDown /> </span></div>
                        </div>

                        </div>

                        {/* For mobile view ends */}
                    <div className={"mega-container " + (megaShow && "open")}>
                        <div className="mega-content">
                        <div className="row mega-left">      
                                <ul className="mega-links">
                                    <li onClick={() => setMenuOpen (false)}><Link to='/Finance' className='mega-link'>Financial Services
                                    <span className=''> <FaArrowRightLong /> </span>
                                    </Link></li>
                                    <li onClick={() => setMenuOpen (false)}><Link to='/Media' className='mega-link'>Media & Entertainment
                                    <span className=''> <FaArrowRightLong /> </span>
                                    </Link></li>
                                    <li onClick={() => setMenuOpen (false)}><Link to='/Finance' className='mega-link'>Financial Services
                                    <span className=''> <FaArrowRightLong /> </span>
                                    </Link></li>
                                    <li onClick={() => setMenuOpen (false)}><Link to='/Media' className='mega-link'>Media & Entertainment
                                    <span className=''> <FaArrowRightLong /> </span>
                                    </Link></li>
                                    <li onClick={() => setMenuOpen (false)}><Link to='/Finance' className='mega-link'>Financial Services
                                    <span className=''> <FaArrowRightLong /> </span>
                                    </Link></li>
                                    <li onClick={() => setMenuOpen (false)}><Link to='/Media' className='mega-link'>Media & Entertainment
                                    <span className=''> <FaArrowRightLong /> </span>
                                    </Link></li>
                                </ul> 
                        </div>

                        <div className="row mega-right">
                                <div className="mega-links mega-special-container">
                                <header className='header-special'>Service 1</header>
                                    <p>Obtain top-class and standard-compliant custom software tailored specifically to your business needs with us.</p>
                                   
                                </div>  
                                
                        </div>
    
                        </div>
                    </div>
                </li>
               
                <li><Link to='/About' className="nav-link" onClick={() => setMenuOpen (false)}>Who We Are</Link></li>
                <li><Link to='/Careers' className="nav-link" onClick={() => setMenuOpen (false)}>Careers</Link></li>
                <li><Link to='/Contact' className="nav-link" onClick={() => setMenuOpen (false)}>Contact Us</Link> </li>
                
                
            </ul>
          
            <div className='btn menu-btn ms-2 mb-2'>
            <FaBars  onClick={() => setMenuOpen (!menuOpen)} />
            </div>
        </div>
    </nav>
  )
}
