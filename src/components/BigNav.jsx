import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import { TimelineMax, TweenMax, Power1, Expo } from 'gsap'
import PropTypes from 'prop-types'
import pink from '../images/pink.jpg'

import {
  BigNavContainer,
  ProjectContainer,
  ImageContainer,
  ImageFixed,
} from '../styles/components/bigNav'

const BigNav = () => {
  const tl = useRef()
  const tlHover = useRef()
  const tm = useRef()
  const refMainImage = useRef(null)
  const refCoverImage = useRef(null)
  let refNavContainer = useRef(null)

  useEffect(() => {
    tl.current = new TimelineMax()
    tlHover.current = new TimelineMax()

    tl.current.from(refNavContainer, 2.5, {
      delay: 0.5,
      yPercent: -100,
      opacity: 1,
      ease: Power1.easeInOut,
    })

    TweenMax.staggerFrom(
      '.ProjectContainer',
      2.7,
      {
        delay: 0,
        opacity: 0,
        rotationY: '-=30',
        ease: Power1.easeInOut,
      },
      -0.3
    )
  }, [])

  const handleMouseEnter = () => {
    tlHover.current.to(refCoverImage.current, 1.4, {
      width: 0,
      ease: Expo.easeInOut,
    })
  }

  const handleMouseLeave = () => {
    TweenMax.to(refCoverImage.current, 0.5, {
      width: '100%',
      ease: Expo.easeInOut,
    })
    // TweenMax.to(refMainImage.current, 0.5, { scale: 1.6 }, '-=0.5')
  }

  return (
    <>
      <ImageFixed>
        <ImageContainer className="image-container">
          <div ref={refCoverImage} className="cover-image"></div>
          <img src={pink} ref={refMainImage} alt="" title="" />
        </ImageContainer>
      </ImageFixed>
      <BigNavContainer ref={el => (refNavContainer = el)}>
        <ul>
          <li
            onMouseLeave={() => handleMouseLeave()}
            onMouseEnter={() => handleMouseEnter()}
          >
            <ProjectContainer className="ProjectContainer">
              <a href="#">Jirong</a>
            </ProjectContainer>
          </li>
          <li>
            <ProjectContainer className="ProjectContainer">
              <a href="#">Agnen</a>
            </ProjectContainer>
          </li>
          <li>
            <ProjectContainer className="ProjectContainer">
              <a href="#">KEVIN</a>
            </ProjectContainer>
          </li>
          <li>
            <ProjectContainer className="ProjectContainer">
              <a href="#">ARTHUR</a>
            </ProjectContainer>
          </li>
          <li>
            <ProjectContainer className="ProjectContainer">
              <a href="#">BOB</a>
            </ProjectContainer>
          </li>
          <li>
            <ProjectContainer className="ProjectContainer">
              <a href="#">Kovsky</a>
            </ProjectContainer>
          </li>
          <li>
            <ProjectContainer className="ProjectContainer">
              <a href="#">Perrine</a>
            </ProjectContainer>
          </li>
          <li>
            <ProjectContainer className="ProjectContainer">
              <a href="#">MeloDY</a>
            </ProjectContainer>
          </li>
          <li>
            <ProjectContainer className="ProjectContainer">
              <a href="#">Didier</a>
            </ProjectContainer>
          </li>
          <li>
            <ProjectContainer className="ProjectContainer">
              <a href="#">Jean Edouard</a>
            </ProjectContainer>
          </li>
        </ul>
      </BigNavContainer>
    </>
  )
}

export default BigNav
