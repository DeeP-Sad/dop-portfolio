import React from 'react'
import search from "../Assets/Research.png"
import Carous from "./Carous"

const Research = () => {
  return (
    <div className='text-white font-medium w-full text-2xl'>
      {/* block div to keep a fixed distance from the fixed navbar */}
      <div className="block h-10 bg-black">
      </div>
      <div className='h-1/3 py-5 mt-5 w-fit font-semibold ml-20 text-4xl sm:text-5xl '>
        <img className='inline-block w-8 mr-2 ml-1' src={search} />
        <div className='inline-block align-bottom '>
        Research
        </div>
      </div>
      <div className='w-5/6 relative mx-auto'>
      <Carous/>
      </div>
      </div>
  )
}

export default Research