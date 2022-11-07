import React from 'react'
import Carousel from 'better-react-carousel'

const Card = () => {
  return (
    <Carousel cols={3} rows={1} gap={10} loop>
      <Carousel.Item>
        <div width="100%" className="h-11/12 bg-white font-thin text-2xl text-black">
        <img width="100%" src="https://picsum.photos/800/600?random=1" />
        MY name is rishabh 
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>
  )
}

export default Card