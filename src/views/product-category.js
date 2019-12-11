import React from 'react'
import Layout from '../components/Layout'
import ProductBox from '../components/product-box'

const ProductCategoryView = () => {
  return (
    <Layout>
      <section className="product">
        <section className="product__herospace">
          <h2 className="product__herospace__title">Flores</h2>
        </section>
        <div className="product__content">
          <section className="product__aside">
            <h2 className="product__aside__title">Flores</h2>
            <a href="#" className="product__aside__group">Ramos</a>
            <a href="#" className="product__aside__link">Linea económica</a>
            <a href="#" className="product__aside__link">Linea premium</a>
            <a href="#" className="product__aside__group">Varas</a>
            <a href="#" className="product__aside__link">Linea económica</a>
            <a href="#" className="product__aside__link">Linea premium</a>
            <h2 className="product__aside__title">Follaje</h2>
            <a href="#" className="product__aside__group">Plantas</a>
            <a href="#" className="product__aside__group">Plantas con maceta</a>
            <a href="#" className="product__aside__group">Matas &amp; jardín vertical</a>
            <a href="#" className="product__aside__group">Complementos</a>
            <h2 className="product__aside__title">Frutas</h2>
            <h2 className="product__aside__title">Navidad</h2>
            <a href="#" className="product__aside__group">Pinos</a>
            <a href="#" className="product__aside__group">Decoración</a>
            <a href="#" className="product__aside__group">Flores &amp; follaje</a>
            <a href="#" className="product__aside__group">Adornos para pino</a>
            <h2 className="product__aside__title">Recipientes</h2>
            <a href="#" className="product__aside__group">Floreros</a>
            <a href="#" className="product__aside__group">Macetas</a>
            <h2 className="product__aside__title">Sale</h2>
          </section>
          <section className="product__grid">
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
          </section>
          <div className="product__paginator">
            <div className="product__paginator__content">
              <a href="#" className="product__paginator__arrow"><img src="/images/paginator-l.svg" /></a>
              <a href="#" className="product__paginator__number">1</a>
              <a href="#" className="product__paginator__number">2</a>
              <a href="#" className="product__paginator__number">3</a>
              <a href="#" className="product__paginator__number">4</a>
              <a href="#" className="product__paginator__arrow"><img src="/images/paginator-r.svg" /></a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ProductCategoryView