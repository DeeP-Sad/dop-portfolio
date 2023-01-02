import React from 'react'
import Carousel from 'better-react-carousel'
import OpenCard from './OpenCard'
import leftArrow from '../Assets/Arrowleft.png'
import rightArrow from '../Assets/Arrowright.png'

const LArrow= ()=>{
    return(
      <button className='w-20 h-20 top-1/2 right-full -translate-y-1/2 absolute inline-block'>
        <img width='100%' src={leftArrow} />
        </button>
        )
  }
  
  const RArrow= ()=>{
    return(
      <button className='w-20 h-20 top-1/2 left-full -translate-y-1/2 absolute inline-block'>
    <img width='100%' src={rightArrow} />
    </button>
    )
  }

const OpenCarousal = () => {
  return (
    <Carousel cols={1} rows={1} gap={10} showDots={true} arrowLeft={LArrow} arrowRight={RArrow} loop>
      <Carousel.Item>
        {/* <div width="85%" className="bg-white font-thin text-2xl text-black">
        <div>
        <img src="https://picsum.photos/800/600?random=1" />
        MY name is rishabh 
        </div>
        </div> */}
        <OpenCard/>
      </Carousel.Item>
      <Carousel.Item>
      <OpenCard/>
      </Carousel.Item>
      <Carousel.Item>
      <OpenCard/>
      </Carousel.Item>
      <Carousel.Item>
      <OpenCard/>
      </Carousel.Item>
      <Carousel.Item>
      <OpenCard/>
      </Carousel.Item>
    </Carousel>
  )
}

export default OpenCarousal