import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import Cart from './Cart'
import Menu from './Menu'

const Hd = () => {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="hd">
        <div className="hd__list">
          <Link to="/products" className="hd__list__item">Productos</Link>
          <a href="/#who" className="hd__list__item">Quiénes somos</a>
          <a href="/#faqs" className="hd__list__item">Preguntas frecuentes</a>
        </div>
        <a href="#" className="hd__hamb" onClick={ () => setShowMenu(true)}><img src="../images/hamb.svg" alt="hamb" /></a>
        <Link to="/" className="hd__lg">TodoFlor SRL</Link>
        <div className="hd__checkout">
          <Link to="/login" className="hd__checkout__login">Ingresar</Link>
          <a className="hd__checkout__cart" onClick={() => setShowCart(true)}><img src="../images/cart.svg" alt="cart" /></a>
        </div>
      </header>

      <Cart handlerHideCart={() => setShowCart(false)} showCart={ showCart } />
      <Menu handlerHideMenu={() => setShowMenu(false)} showMenu= { showMenu } />
    </>
  )
}

export default Hd