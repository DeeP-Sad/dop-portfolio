import React from 'react'
import OpenCarousal from './OpenCarousal'

const Openings = () => {
  return (
    <div className="text-white p-10 font-medium text-2xl">
    {/* block div to keep a fixed distance from the fixed navbar */}
    <div className="block h-10 bg-black">
    </div>
      Openings
      <div className=' md:w-11/12 relative mx-auto mt-10'>
      <OpenCarousal/>
      </div>
  </div>
  )
}

export default Openings