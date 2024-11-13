import React from 'react'
import { HashLink } from 'react-router-hash-link'

export default function Apig() {
  return (
    <div>
      <p className='fs-5'>API Gateway central access point managing, routing, and securing service requests.</p>
      <HashLink to='/Services#api'>
        <button className="know-more mt-3">Know More</button>
      </HashLink>
    </div>
  )
}
