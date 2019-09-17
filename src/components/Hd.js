import React from 'react'
import { Link } from 'react-router-dom'

const Hd = () => (
  <header className="hd">
    <div className="hd__list">
      <a href="#" className="hd__list__item">Productos</a>
      <a href="#" className="hd__list__item">Quienes somos</a>
      <a href="#" className="hd__list__item">Preguntas frecuentes</a>
    </div>
    <a href="#" className="hd__hamb"><img src="../images/hamb.svg" /></a>
    <Link to="/" className="hd__lg"><img src="../images/lg.png" /></Link>
    <div className="hd__checkout">
      <Link to="/login" className="hd__checkout__login"><a>Ingresar</a></Link>
      <a href="#" className="hd__checkout__cart"><img src="../images/cart.svg" /></a>
      <a href="#" className="hd__checkout__search"><img src="../images/search.svg" /></a>
    </div>
  </header>
)

export default Hd