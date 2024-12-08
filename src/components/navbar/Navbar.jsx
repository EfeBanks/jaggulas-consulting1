import React, {useState} from 'react'
import './Navbar.css';
import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import BrandLogo from '../../assets/images/logo2.png';
import { FaArrowRightLong } from "react-icons/fa6";
//
import Consulting from '../views/Consulting';
import Managed from '../views/Managed';
import CloudAss from '../views/Clouda';
import CloudCost from '../views/Cloudc';
import Migration from '../views/Migration';
import Professional from '../views/Professional';
import Web from '../views/Web';
import Apig from '../views/Apig';
import Backend from '../views/Backend';



export default function NavigationBar({menuOpen, setMenuOpen}) {

    // Making the links close Navbar on click
    const [megaShow, setMegaShow] = useState(false);
    const [active, setActive] = React.useState(1);
    const SetView = (active) => {
      setActive(active);
    };
  
    const ActiveView = () => {
      switch (active) {
        case 1:
          return <Consulting/>;
        case 2:
          return <Managed />;
        case 3:
          return <Professional />;
        case 4:
          return <CloudAss />;
        case 5:
            return <CloudCost />;
        case 6:
            return <Migration />;
        case 7:
            return <Web />;
        case 8:
          return <Backend />;
        case 9:
          return <Apig />;

            
        default:
          return <Consulting />;
      }
    };
    
    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();
  
    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  


   
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
                     <Link to='/Services ' className="nav-link desktop-item"> Services  
                <span className='icon-rotate ms-2'> <IoIosArrowDown /> </span></Link>

                    {/* For mobile view */}
                        <div className='mobile-separate mobile-item'>
                        <div className='separate1' > 
                            <Link to='/Services' className="nav-link" onClick={() => setMenuOpen (false)}> Services </Link>
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
                                    <li onClick={() => setMenuOpen (false)} onMouseOver={()=> SetView(1)}><HashLink to='/Services#consulting' className='mega-link' >Consulting Services
                                    <span className=''> <FaArrowRightLong /> </span>
                                    </HashLink></li>

                                    <li onClick={() => setMenuOpen (false)} onMouseOver={()=> SetView(2)}><HashLink to='/Services#managed' className='mega-link' >Managed Services
                                    <span className=''> <FaArrowRightLong /> </span>
                                    </HashLink></li>

                                    <li onClick={() => setMenuOpen (false)} onMouseOver={()=> SetView(3)} ><HashLink to='/Services#professional' className='mega-link'>Professional Services
                                    <span className=''> <FaArrowRightLong /> </span>
                                    </HashLink></li>

                                    <li onClick={() => setMenuOpen (false)} onMouseOver={()=> SetView(4)}>
                                      <HashLink to='/Services#cloudassessments' className='mega-link' >Cloud Assessments
                                    <span className=''> <FaArrowRightLong /> </span>
                                    </HashLink>
                                    </li>

                                    <li onClick={() => setMenuOpen (false)} onMouseOver={()=> SetView(5)}>
                                      <HashLink to='/Services#cloudcost' className='mega-link' >Cloud Cost Optimization
                                    <span className=''> <FaArrowRightLong /> </span>
                                    </HashLink>
                                    </li>

                                    <li onClick={() => setMenuOpen (false)} onMouseOver={()=> SetView(6)} >
                                      <HashLink to='/Services#migration' className='mega-link' >Migration & Modernization
                                    <span className=''> <FaArrowRightLong /> </span>
                                    </HashLink>
                                    </li>

                                    <li onClick={() => setMenuOpen (false)} onMouseOver={()=> SetView(7)}  >
                                      <HashLink smooth to='/Services#web' className='mega-link' >Web Application Development
                                    <span className=''> <FaArrowRightLong /> </span>
                                    </HashLink>
                                    </li>

                                    <li onClick={() => setMenuOpen (false)} onMouseOver={()=> SetView(8)} >
                                      <HashLink to='/Services#backend' className='mega-link' >Backend Development 
                                    <span className=''> <FaArrowRightLong /> </span>
                                    </HashLink>
                                    </li>

                                    <li onClick={() => setMenuOpen (false)} onMouseOver={()=> SetView(9)} >
                                      <HashLink to='/Services#api' className='mega-link' >API Gateways
                                    <span className=''> <FaArrowRightLong /> </span>
                                    </HashLink>
                                    </li>
                                </ul> 
                        </div>

                        <div className="row mega-right">
                                <div className="mega-links mega-special-container">
                                {ActiveView()}
                                   
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
