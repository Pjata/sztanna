import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-responsive-carousel';
import pic01 from '../assets/images/door.png'

const CommentCarousel = ({comments}) => {

  const commentElements = comments.map(({comment,userName}) =>
    <div style={{
      height: "170px",
      display: "flex",
      justifyContent: "center"
    }}  key={comment}>
      <div style={{
        width: "300px"
      }}>
      <h3>
          {comment}
      </h3>
      <h4 style={{
        textAlign: "right"
      }}>

        <i>-{userName}</i>
      </h4>
      </div>
    </div>
  )
  return (
    <Carousel showThumbs={false} showIndicators={true} showStatus={false} showArrows={false}  emulateTouch swipeable={true}   >
      {commentElements}
    </Carousel>
  );
}


export default CommentCarousel
