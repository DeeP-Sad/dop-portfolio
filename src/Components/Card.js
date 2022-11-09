import React from 'react'

const Card = () => {
  return (
    <div className='bg-[#D9D9D9]'>
    <div className='flex flex-col h-1/4'>
    <div className='basis-1/4 flex-initial '>
    <img src="https://picsum.photos/800/600?random=1" />
    </div>
    <div className='basis-1/8 p-4 bg-[#D9D9D9] text-black'>
    <p className=' text-lg font-bold font-sans'>
    Hydrogen based Power generation demonstration Project
    {/* Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Nunc vulputate libero et velit
    interdum, ac aliquet odio mattis. Class aptent taciti
    sociosqu ad litora torquent per conubia nostra, per inceptos
     himenaeos. Curabitur tempus urna at turpis condimentum lobortis.  */}
    </p>
    </div>
    </div>
    </div>
  )
}

export default Card