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
          <div className="products__grid__box">
            <p className="products__grid__box__title">Flores</p>
          </div>
          <div className="products__grid__box">
            <p className="products__grid__box__title">Follaje</p>
          </div>
          <div className="products__grid__box">
            <p className="products__grid__box__title">Frutas</p>
          </div>
          <div className="products__grid__box">
            <p className="products__grid__box__title">Navidad</p>
          </div>
          <div className="products__grid__box">
            <p className="products__grid__box__title">Recipientes</p>
          </div>
          <div className="products__grid__box">
            <p className="products__grid__box__title">Decoración</p>
          </div>
          <div className="products__grid__box">
            <p className="products__grid__box__title">Sale</p>
          </div>
        </section>
        <div className="products__btn">
          <a href="#" className="products__btn__link">Ver todos los productos</a>
        </div>
      </section>
    </Layout>
  )
}

export default ProductView