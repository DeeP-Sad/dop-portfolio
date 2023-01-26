import React from 'react'
import Carousel from 'better-react-carousel'
import leftArrow from '../Assets/Arrowleft.png'
import rightArrow from '../Assets/Arrowright.png'
import play from "../Assets/Play.png"

const LArrow= ()=>{
    return(
      <button className='w-10 h-10 top-1/2 right-full -translate-y-1/2 absolute inline-block'>
        <img width='100%' src={leftArrow} />
        </button>
        )
  }
  
  const RArrow= ()=>{
    return(
      <button className='w-10 h-10 top-1/2 left-full -translate-y-1/2 absolute inline-block'>
    <img width='100%' src={rightArrow} />
    </button>
    )
  }

const AboutCarous = () => {
  return (
    <Carousel cols={3} rows={1} gap={20} showDots={false} arrowLeft={LArrow} arrowRight={RArrow} loop>
      <Carousel.Item>
        <div width="100%" className="bg-white md:m-2 relative rounded-2xl font-thin text-2xl text-black">
        <img className=' rounded-2xl relative z-0 aspect-video' src="https://picsum.photos/800/600?random=1"/>
        <a href='https://www.bits-pilani.ac.in/goa/paramitah/profile' target="_blank">
        <button className='w-full h-full opacity-25 rounded-2xl top-0 z-10 absolute bg-white'>
            <img className='w-2/5 mx-auto' src={play}/>
        </button>
        </a>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div width="100%" className="bg-white md:m-2 relative rounded-2xl font-thin text-2xl text-black">
        <img className=' rounded-2xl relative z-0 aspect-video' src="https://picsum.photos/800/600?random=1"/>
        <a href='https://www.bits-pilani.ac.in/goa/paramitah/profile' target="_blank">
        <button className='w-full h-full opacity-25 rounded-2xl top-0 z-10 absolute bg-white'>
            <img className='w-2/5 mx-auto' src={play}/>
        </button>
        </a>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div width="100%" className="bg-white md:m-2 relative rounded-2xl font-thin text-2xl text-black">
        <img className=' rounded-2xl relative z-0 aspect-video' src="https://picsum.photos/800/600?random=1"/>
        <a href='https://www.bits-pilani.ac.in/goa/paramitah/profile' target="_blank">
        <button className='w-full h-full opacity-25 rounded-2xl top-0 z-10 absolute bg-white'>
            <img className='w-2/5 mx-auto' src={play}/>
        </button>
        </a>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div width="100%" className="bg-white md:m-2 relative rounded-2xl font-thin text-2xl text-black">
        <img className=' rounded-2xl relative z-0 aspect-video' src="https://picsum.photos/800/600?random=1"/>
        <a href='https://www.bits-pilani.ac.in/goa/paramitah/profile' target="_blank">
        <button className='w-full h-full opacity-25 rounded-2xl top-0 z-10 absolute bg-white'>
            <img className='w-2/5 mx-auto' src={play}/>
        </button>
        </a>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div width="100%" className="bg-white md:m-2 relative rounded-2xl font-thin text-2xl text-black">
        <img className=' rounded-2xl relative z-0 aspect-video' src="https://picsum.photos/800/600?random=1"/>
        <a href='https://www.bits-pilani.ac.in/goa/paramitah/profile' target="_blank">
        <button className='w-full h-full opacity-25 rounded-2xl top-0 z-10 absolute bg-white'>
            <img className='w-2/5 mx-auto' src={play}/>
        </button>
        </a>
        </div>
      </Carousel.Item>
    </Carousel>
  )
}

export default AboutCarous