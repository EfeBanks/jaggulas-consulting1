import React from 'react'
import { IoIosArrowDropupCircle } from "react-icons/io";

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
    </div>
  )
}

export default ToTop