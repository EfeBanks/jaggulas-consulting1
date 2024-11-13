import React from 'react'
import { HashLink } from 'react-router-hash-link'

export default function Migration() {
  return (
    <div>
       <p className='fs-5'>Cloud Migration & Modernization transitions applications to cloud, enhancing agility and scalability.</p>
       <HashLink to='/Services#migration'>
        <button className="know-more mt-3">Know More</button>
      </HashLink>
    </div>
  )
}
