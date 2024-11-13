import React from 'react';
import { HashLink } from 'react-router-hash-link';


export default function Consulting() {
  return (
    <div>
        <p className='fs-5'>Expert cloud consulting services for optimized solutions, scalability, and efficiency.</p>
        <HashLink to='/Services#consulting'>
        <button className="know-more mt-3">Know More</button>
        </HashLink>
        

    </div>
  )
}
