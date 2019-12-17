import React from 'react'
import Layout from '../components/Layout'

const ProductView = () => {
  return (
    <Layout>
      <section className="products">
        <section className="products__herospace">
          <p className="products__herospace__title">Como estamos permanentemente renovando nuestro surtido, contamos con una gran variedad de modelos, tamaños y colores para ofrecerte.</p>
        </section>
        <section className="products__grid">
          <a href="/category" className="products__grid__box">
            <p className="products__grid__box__title">Flores</p>
          </a>
          <a href="/category" className="products__grid__box">
            <p className="products__grid__box__title">Follaje</p>
          </a>
          <a href="/category" className="products__grid__box">
            <p className="products__grid__box__title">Frutas</p>
          </a>
          <a href="/category" className="products__grid__box">
            <p className="products__grid__box__title">Navidad</p>
          </a>
          <a href="/category" className="products__grid__box">
            <p className="products__grid__box__title">Recipientes</p>
          </a>
          <a href="/category" className="products__grid__box">
            <p className="products__grid__box__title">Decoración</p>
          </a>
          <a href="/category" className="products__grid__box">
            <p className="products__grid__box__title">Sale</p>
          </a>
        </section>
        <div className="products__btn">
          <a href="#" className="products__btn__link">Ver todos los productos</a>
        </div>
      </section>
    </Layout>
  )
}

export default ProductView