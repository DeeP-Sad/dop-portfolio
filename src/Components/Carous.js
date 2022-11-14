import React from 'react'
import Carousel from 'better-react-carousel'
import Card from './Card'
import leftArrow from '../Assets/Arrowleft.png'
import rightArrow from '../Assets/Arrowright.png'
import { LanguageIcon } from '@heroicons/react/24/outline'

const LArrow= ()=>{
  return(
    <span className='h-8 w-8 inline-block '>
      <img width='100%' src={leftArrow} />
      </span>
      )
}

const RArrow= ()=>{
  return(
  <span className='w-8 h-8 inline-block' >
  <img width='100%' src={rightArrow} />
  </span>
  )
}

const Carous = () => {
  return (
    <Carousel cols={3} rows={1} gap={75} showDots={true} arrowLeft={LArrow} arrowRight={RArrow} loop>
      <Carousel.Item>
        {/* <div width="85%" className="bg-white font-thin text-2xl text-black">
        <div>
        <img src="https://picsum.photos/800/600?random=1" />
        MY name is rishabh 
        </div>
        </div> */}
        <Card/>
      </Carousel.Item>
      <Carousel.Item>
      <Card/>
      </Carousel.Item>
      <Carousel.Item>
      <Card/>
      </Carousel.Item>
      <Carousel.Item>
      <Card/>
      </Carousel.Item>
      <Carousel.Item>
      <Card/>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carous