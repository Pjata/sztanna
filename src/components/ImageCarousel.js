import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-responsive-carousel';
import pic01 from '../assets/images/door.png'

const ImageCarousel = ({images}) => {

  const imageDivs = images.map(imageSource =>
    <div className={"szoba"} key={imageSource}>
        <span className="image icon major">
          <img src={imageSource} />
        </span>
    </div>
  )
  return (
    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showIndicators={true} showStatus={false} showArrows={false}  emulateTouch swipeable={true}   >
      {imageDivs}
    </Carousel>
  );
}


export default ImageCarousel
