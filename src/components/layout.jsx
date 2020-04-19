import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import './layout.css'
import GlobalStyle from '../styles/Global'

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <main>{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
