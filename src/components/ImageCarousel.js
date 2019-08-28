import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-responsive-carousel'
import pic01 from '../assets/images/door.png'
import { useStaticQuery, Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import useApartmantFentImages from '../assets/images/apartman_kulon'

const ImageCarousel = ({ data }) => {
  if (!data) {
    return <div />
  }
  const imageDivs = data.map(node => (
    <div className={'szoba'} key={node.name}>
      <span className="image icon major">
        <Img fixed={node.childImageSharp.fixed} />
      </span>
    </div>
  ))
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={true}
      showStatus={false}
      showArrows={false}
      emulateTouch
      swipeable={true}
    >
      {imageDivs}
    </Carousel>
  )
}

export default ImageCarousel
