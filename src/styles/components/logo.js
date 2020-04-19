import styled from '@emotion/styled'
import theme from '../theme'

const Logo = styled('div')`
  position: fixed;
  bottom: 45px;
  color: white;
  font-size: 55px;
  z-index: 180;

  font-family: ${theme.fonts.primary};
  left: 5vh;
  letter-spacing: 0px;
  line-height: 0.85;
`

export { Logo }
