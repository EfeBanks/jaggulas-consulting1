import React from 'react'
import { IoIosArrowDropupCircle } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
//import { IoLogoWhatsapp } from "react-icons/io";


function ToTop({toTop}) {

    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
  return (
    <div>
        {toTop && (
            <span className='fs-1 to-top' onClick={scrollUp}> <IoIosArrowDropupCircle/> </span>
        )}

    {toTop && (
        <a href="https://wa.me/+27740687900?text=Hello! Jaggulas Consulting" target='_blank' rel="noreferrer">       
            <span className='whatsapp'><span className='fs-1 '><FaWhatsapp/></span><sup className='small'>?</sup></span>
        </a>
    )}
    </div>
  )
}

export default ToTop