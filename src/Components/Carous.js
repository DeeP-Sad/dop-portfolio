import React from 'react'
import Carousel from 'better-react-carousel'
import Card from './Card'

const Carous = () => {
  return (
    <Carousel cols={3} rows={1} gap={100} loop>
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
    </Carousel>
  )
}

export default Carous