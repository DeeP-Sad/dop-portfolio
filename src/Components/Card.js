import React from 'react'

const Card = () => {
  return (
    <div className='bg-[#D9D9D9] rounded-lg'>
    <div className='flex flex-col h-1/4'>
    <div className='basis-1/4 flex-initial '>
    <img className='rounded-t-lg' src="https://picsum.photos/800/600?random=1" />
    </div>
    <div className='flex-auto px-4 py-2 bg-[#D9D9D9] text-black'>
    <p className=' text-lg font-bold font-sans'>
    Hydrogen based Power generation demonstration Project
    {/* Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Nunc vulputate libero et velit
    interdum, ac aliquet odio mattis. Class aptent taciti
    sociosqu ad litora torquent per conubia nostra, per inceptos
     himenaeos. Curabitur tempus urna at turpis condimentum lobortis.  */}
    </p>
    </div>
    <div className='flex-auto shrink h-36 mb-3 px-4 overflow-hidden text-black'>
    <p className=' text-sm font-normal font-sans'>
    Hydrogen based Power generation demonstration Project
    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Nunc vulputate libero et velit
    interdum, ac aliquet odio mattis. Class aptent taciti
    sociosqu ad litora torquent per conubia nostra, per inceptos
     himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
     Hydrogen based Power generation demonstration Project
    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Nunc vulputate libero et velit
    interdum, ac aliquet odio mattis. Class aptent taciti
    sociosqu ad litora torquent per conubia nostra, per inceptos
     himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
    </p>
    </div>
    <div className='flex-auto rounded-lg shrink h-10 w-2/3 mx-auto my-auto mt-2 mb-3 px-4 bg-[#828282] text-white'>
    <button className='h-full w-full text-center text-sm font-semibold font-sans'>
      Read more
      </button>
    </div>
    </div>
    </div>
  )
}

export default Card