import React from 'react'
import { HashLink } from 'react-router-hash-link'

export default function Professional() {
  return (
    <div>
      <p className='fs-5'>Cloud professional services expert support for cloud strategy, deployment, and management.</p>
      <HashLink to='/Services#professional'>
        <button className="know-more mt-3">Know More</button>
      </HashLink>
    </div>
  )
}
