import React from 'react'

import Hd from './Hd'
import Ft from './Ft'

import '../App.scss'

const Layout = ({ children, hideFt }) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Hd />
      <section className="layout">
        { children }
      </section>
      { !hideFt && 
        <Ft currentYear={ currentYear } />
      }
    </>
  )
}

export default Layout