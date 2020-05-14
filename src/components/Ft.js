import React from 'react'
import { Link } from 'react-router-dom'

const Ft = ({ currentYear }) => {
  return (
    <footer className="ft">
      <section className="ft__top">
        <div className="ft__top__map"></div>
        <div className="ft__top__data">
          <p className="ft__top__data__dir">General Manuel A. Rodríguez 2856, <span>Chacarita, CABA.</span> <span>(entre Trelles y Juan Agustín García)</span></p>
          <div className="ft__top__data__dots"><img src="/images/dot.svg" /><img src="/images/dot.svg" /><img src="/images/dot.svg" /></div>
          <p className="ft__top__data__time">Horario de atención:<br />Lunes a viernes, de 9 a 18hs.</p>
        </div>
      </section>
      <section className="ft__aside">
        <h2 className="ft__aside__title">TodoFlor SRL</h2>
        <Link to="/products" className="ft__aside__link">Novedades</Link>
        <Link to="/products" className="ft__aside__link">Productos</Link>
        <Link to="/#who" className="ft__aside__link">Quiénes somos</Link>
        <Link to="/#faqs" className="ft__aside__link">Preguntas frecuentes</Link>
        <a href="mailto:todoflor@gmail.com" className="ft__aside__link ft__aside__link--mail">Contacto</a>
        <div className="ft__aside__social">
          <p className="ft__aside__social__text">Seguinos en las redes</p>
          <a href="#" className="ft__aside__social__icon"><img src="/images/inst-icon.svg" /></a>
          <a href="#" className="ft__aside__social__icon"><img src="/images/fb-icon.svg" /></a>
        </div>
      </section>
      <section className="ft__bottom">
        <small className="ft__bottom__legal">Todos los derechos reservados. { currentYear }.</small>
        <Link to="/terms" className="ft__bottom__terms">Términos y condiciones</Link>
      </section>
    </footer>
  )
}

export default Ft