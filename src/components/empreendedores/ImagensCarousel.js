import React, { Component } from 'react'
import Carousel from 'nuka-carousel'
import {Button, Icon} from 'semantic-ui-react'

const ImagensCarousel = () => (
<Carousel
  renderCenterLeftControls={({ previousSlide }) => (
    <Button size='mini' onClick={previousSlide}><Icon name='angle left'/></Button>
  )}
  renderCenterRightControls={({ nextSlide }) => (
    <Button size='mini' onClick={nextSlide}><Icon name='angle right'/></Button>
  )}>
  <img src='https://cdn2.thecatapi.com/images/fWfGwt24O.jpg'/>
  <img src='https://cdn2.thecatapi.com/images/fWfGwt24O.jpg'/>
  <img src='https://cdn2.thecatapi.com/images/fWfGwt24O.jpg'/>
  <img src='https://cdn2.thecatapi.com/images/fWfGwt24O.jpg'/>
  <img src='https://cdn2.thecatapi.com/images/fWfGwt24O.jpg'/>
  <img src='https://cdn2.thecatapi.com/images/fWfGwt24O.jpg'/>
</Carousel>
);

export default ImagensCarousel