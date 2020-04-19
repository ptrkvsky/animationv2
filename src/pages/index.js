import React, { useRef, useEffect } from 'react'
import { Expo, Power2, TimelineMax, TweenMax } from 'gsap'
import Scrollbar from 'smooth-scrollbar'
import BigNav from '../components/BigNav'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Logo } from '../styles/components/logo'

const IndexPage = () => {
  const refContainer = useRef(null)
  const refDraw = useRef(null)
  const refMe = useRef(null)
  const refDick = useRef(null)

  const tl = useRef(null)
  tl.current = new TimelineMax()
  useEffect(() => {
    Scrollbar.init(document.body, {
      damping: 0.2,
    })

    tl.current
      .to(refContainer.current, 0.5, { visibility: 'visible' })
      .from(refDraw.current, 0.5, {
        delay: 3.0,
        yPercent: 110,
        opacity: 0,
        ease: Power2.easeInOut,
      })
      .from(
        refMe.current,
        0.5,
        {
          yPercent: 110,
          opacity: 0,
          ease: Power2.easeInOut,
        },
        '-=0.2'
      )
      .from(
        refDick.current,
        0.5,
        {
          yPercent: 110,
          opacity: 0,
          ease: Power2.easeInOut,
        },
        '-=0.2'
      )
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <div ref={refContainer} className="v-hidden">
        <BigNav />
        <Logo className="logoContainer">
          <span className="hide-text">
            <span className="test d-block" ref={refDraw}>
              DRAW
            </span>
          </span>
          <span className="hide-text">
            <span className="d-block" ref={refMe}>
              ME A
            </span>
          </span>
          <span className="hide-text">
            <span className="d-block" ref={refDick}>
              DICK
            </span>
          </span>
        </Logo>
      </div>
    </Layout>
  )
}

export default IndexPage
