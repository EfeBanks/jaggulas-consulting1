import React from 'react'
import { HashLink } from 'react-router-hash-link'

export default function Managed() {
  return (
    <div>
       <p className='fs-5'>Remote service handling IT infrastructure, applications, and data via cloud.</p>
       <HashLink to='/Services#managed'>
        <button className="know-more mt-3">Know More</button>
      </HashLink>
    </div>
  )
}
