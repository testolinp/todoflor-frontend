import React from 'react'
import Hd from './Hd'

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
        <footer className="ft">
          <section className="ft__top">
            <div className="ft__top__map"></div>
            <div className="ft__top__data">
              <p className="ft__top__data__dir">General Manuel A. Rodríguez 2856, Chacarita, CABA. (entre Trelles y Juan Agustín García)</p>
              <p className="ft__top__data__time">Horario de atención:<br />Lunes a viernes, de 9 a 18hs.</p>
            </div>
          </section>
          <section className="ft__bottom">
            <small className="ft__bottom__legal">Todos los derechos reservados. { currentYear }.</small>
            <a href="#" className="ft__bottom__terms">Términos y condiciones</a>
          </section>
        </footer>
      }
    </>
  )
}

export default Layout