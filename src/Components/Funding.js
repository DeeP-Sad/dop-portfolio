import React from 'react'

const Funding = () => {
  return (
    <div className='text-white p-10 font-medium text-2xl'>
      {/* block div to keep a fixed distance from the fixed navbar */}
      <div className="block h-10 bg-black">
      </div>
        <div className=' w-full'>
          <div className=''>
            <div className=' relative md:-top-32 -left-9 md:-left-6 text-5xl md:text-8xl font-bold inline-block'>
              1. 
            </div>
            <div className='relative -right-7 -top-7 md:top-16 md:left-6 md:w-3/4 inline-block'>
              <div className='inline-block text-lg md:text-2xl text-left font-normal'>
              Computational investigations and atomistic modeling on designing new two-dimensional Vander Waals 
              heterostructured materials – A 
              new direction of electrode materials 
              towards next-generation energy storage devices
              </div>
              <div className='relative mt-5 text-left md:mt-10 text-base md:text-xl font-light from-neutral-200'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
              urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper
              iaculis condimentum ac, vestibulum eu nisl.
              </div>
          </div>
          </div>

        </div>
    </div>
  )
}

export default Funding