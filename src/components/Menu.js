import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ handlerHideMenu, showMenu }) => {
  return (
    <>
      <div className={ showMenu ? 'menu menu--show' : 'menu'}>
        <a className="menu__close" onClick={handlerHideMenu}></a>
        <div className="menu__content">
          <Link to="/products" onClick={handlerHideMenu}>Productos</Link>
          <Link to="/#who" onClick={handlerHideMenu}>Quiénes Somos</Link>
          <Link to="/#faqs" onClick={handlerHideMenu}>Preguntas frecuentes</Link>
          <Link to="/login" onClick={handlerHideMenu}>Iniciar sesión</Link>
        </div>
      </div>
    </>
  )
}

export default Menu