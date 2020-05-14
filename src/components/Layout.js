import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";

import Hd from './Hd'
import Ft from './Ft'

import '../App.scss'

const Layout = ({ children, hideFt, }) => {
  const currentYear = new Date().getFullYear();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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