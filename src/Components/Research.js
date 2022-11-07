import React from 'react'
import search from "../Assets/Research.png"
import Card from './Card'

const Research = () => {
  return (
    <div className='text-white font-medium text-2xl'>
      {/* block div to keep a fixed distance from the fixed navbar */}
      <div className="block h-10 bg-black">
      </div>
      <div className=' relative block h-1/3 py-5 font-semibold text-4xl sm:text-5xl '>
        <img className='static inline-block w-8 mr-2 ml-1' src={search} />
        <div className='static inline-block align-bottom'>
        Research
        </div>
      </div>
      <Card/>
      </div>
  )
}

export default Research