import React from 'react'
import Slider from 'react-slick'
const Carousel = ({ images }) => {
  return (
    <div style={{ marginBottom: 25 }}>
        {
            <Slider
                speed={500}
                arrows={false}
                infinite={false}
                focusOnSelect={false}
            >
                {
                    images.map((img) => (
                        <div className='border-none' key={img}>
                            <img src={img} alt="..."/>
                        </div>
                    ))
                }
            </Slider>
        }
    </div>
  )
}
export default Carousel
