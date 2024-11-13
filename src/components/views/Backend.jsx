import React from 'react'
import { HashLink } from 'react-router-hash-link'

export default function Backend() {
  return (
    <div>
      <p className='fs-5'>Backend services manage databases, APIs, and server-side logic for applications.</p>
      <HashLink to='/Services#backend'>
        <button className="know-more mt-3">Know More</button>
      </HashLink>
    </div>
  )
}
