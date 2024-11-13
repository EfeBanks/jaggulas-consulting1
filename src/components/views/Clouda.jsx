import React from 'react';
import { HashLink } from 'react-router-hash-link';

export default function Clouda() {
  return (
    <div>
      <p className='fs-5'>Cloud Assessment evaluates infrastructure, security, performance, and cost optimization opportunities.</p>
      <HashLink to='/Services#cloudassessments'>
        <button className="know-more mt-3">Know More</button>
      </HashLink>
    </div>
  )
}
