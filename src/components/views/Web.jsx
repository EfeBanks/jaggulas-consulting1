import React from 'react'
import { HashLink } from 'react-router-hash-link'

export default function Web() {
  return (
    <div>
       <p className='fs-5'>Web application development creates responsive, scalable, and user-friendly online solutions.</p>
       <HashLink to='/Services#web'>
        <button className="know-more mt-3">Know More</button>
      </HashLink>
    </div>
  )
}
