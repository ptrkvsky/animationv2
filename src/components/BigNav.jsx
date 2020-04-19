import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import { TimelineMax, TweenMax, Power1, Expo } from 'gsap'
import PropTypes from 'prop-types'

import { BigNavContainer, ProjectContainer } from '../styles/components/bigNav'

const BigNav = () => {
  const tl = useRef()
  const tm = useRef()
  let refNavContainer = useRef(null)

  useEffect(() => {
    tl.current = new TimelineMax()

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

  return (
    <BigNavContainer ref={el => (refNavContainer = el)}>
      <ul>
        <li>
          <ProjectContainer className="ProjectContainer">
            <a href="#">Dixon</a>
          </ProjectContainer>
        </li>
        <li>
          <ProjectContainer className="ProjectContainer">
            <a href="#">Didou</a>
          </ProjectContainer>
        </li>
        <li>
          <ProjectContainer className="ProjectContainer">
            <a href="#">Dampien</a>
          </ProjectContainer>
        </li>
        <li>
          <ProjectContainer className="ProjectContainer">
            <a href="#"> Vener Woofer</a>
          </ProjectContainer>
        </li>
        <li>
          <ProjectContainer className="ProjectContainer">
            <a href="#">Theodore</a>
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
  )
}

export default BigNav
