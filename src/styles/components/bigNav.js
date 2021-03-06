import styled from '@emotion/styled'
import theme from '../theme'

const Stage = styled('div')`
  transform-style: preserve-3d;
`

const BigNavContainer = styled('nav')`
  margin-top: 0;
  padding: 5vh;
  perspective: 1500px;
  ul {
    text-align: right;
    li {
      cursor: pointer;
      transform-style: preserve-3d;
      &:hover {
        .ProjectContainer {
          transform: rotateY(-35deg) translateZ(0) scale(1) !important;
          a {
            color: transparent;
          }
        }
      }
      a {
        position: relative;
        display: inline-block;
        max-width: 1080px;
        color: ${theme.colors.primary};
        -webkit-text-stroke: 2px ${theme.colors.primary};
        text-decoration: none;
        text-transform: uppercase;
        font-family: ${theme.fonts.title};
        font-weight: 900;
        font-style: normal;
        font-stretch: normal;
        font-size: 7.7vw;
        letter-spacing: 0.02em;
        line-height: 0.9em;
        transition: color 0.5s, opacity 0.5s;
      }
    }
  }
`
const ProjectContainer = styled('div')`
  transform: rotateY(-45deg) translateZ(0) scale(1);
  transform-origin: right center;
  transform-style: preserve-3d;
  will-change: transform;
  transition: transform 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
`
const ImageFixed = styled('div')`
  position: fixed;
  max-width: 50vh;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const ImageContainer = styled('div')`
  overflow: hidden;
  position: relative;
  font-size: 0;
  line-height: 1;
  .cover-image {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: ${theme.bg.main};
  }
`

export { BigNavContainer, ProjectContainer, ImageContainer, ImageFixed }
