import React from 'react'
import { HashLink } from 'react-router-hash-link'

export default function Cloudc() {
  return (
    <div>
       <p className='fs-5'>Cloud cost optimization reduces expenses by identifying and eliminating inefficiencies.</p>
       <HashLink to='/Services#cloudcost'>
        <button className="know-more mt-3">Know More</button>
      </HashLink>
    </div>
  )
}
