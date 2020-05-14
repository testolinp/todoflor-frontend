import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Layout from '../components/Layout'

const ProductView = () => {
  useEffect(() => {
    document.title = 'Todoflor SRL | Productos';
  });

  return (
    <Layout>
      <section className="products">
        <section className="products__herospace">
          <p className="products__herospace__title">Como estamos permanentemente renovando nuestro surtido, contamos con una gran variedad de modelos, tamaños y colores para ofrecerte.</p>
        </section>
        <section className="products__grid">
          <Link to="/category" className="products__grid__box">
            <p className="products__grid__box__title">Flores</p>
          </Link>
          <Link to="/category" className="products__grid__box">
            <p className="products__grid__box__title">Follaje</p>
          </Link>
          <Link to="/category" className="products__grid__box">
            <p className="products__grid__box__title">Frutas</p>
          </Link>
          <Link to="/category" className="products__grid__box">
            <p className="products__grid__box__title">Navidad</p>
          </Link>
          <Link to="/category" className="products__grid__box">
            <p className="products__grid__box__title">Recipientes</p>
          </Link>
          <Link to="/category" className="products__grid__box">
            <p className="products__grid__box__title">Decoración</p>
          </Link>
          <Link to="/category" className="products__grid__box">
            <p className="products__grid__box__title">Sale</p>
          </Link>
        </section>
        <div className="products__btn">
          <a href="#" className="products__btn__link">Ver todos los productos</a>
        </div>
      </section>
    </Layout>
  )
}

export default ProductView