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
            <div className="product__aside__search">
              <h3 className="product__aside__search__title">Busqueda por articulo/producto</h3>
              <div className="product__aside__search__content">
                <div className="product__aside__search__content__input">
                  <input type="text" placeholder="Buscar ..." />
                </div>
                <a className="product__aside__search__content__btn"><img src="../images/search.svg" alt="search" /></a>
              </div>
            </div>
            <a href="#" className="product__aside__title">Flores</a>
            <a href="#" className="product__aside__group">Ramos</a>
            <a href="#" className="product__aside__link product__aside__link--active">Linea económica</a>
            <a href="#" className="product__aside__link">Linea premium</a>
            <a href="#" className="product__aside__group">Varas</a>
            <a href="#" className="product__aside__link">Linea económica</a>
            <a href="#" className="product__aside__link">Linea premium</a>
            <a href="#" className="product__aside__title">Follaje</a>
            <a href="#" className="product__aside__group">Plantas</a>
            <a href="#" className="product__aside__group">Plantas con maceta</a>
            <a href="#" className="product__aside__group">Matas &amp; jardín vertical</a>
            <a href="#" className="product__aside__group">Complementos</a>
            <a href="#" className="product__aside__title">Frutas</a>
            <a href="#" className="product__aside__title">Navidad</a>
            <a href="#" className="product__aside__group">Pinos</a>
            <a href="#" className="product__aside__group">Decoración</a>
            <a href="#" className="product__aside__group">Flores &amp; follaje</a>
            <a href="#" className="product__aside__group">Adornos para pino</a>
            <a href="#" className="product__aside__title">Recipientes</a>
            <a href="#" className="product__aside__group">Floreros</a>
            <a href="#" className="product__aside__group">Macetas</a>
            <a href="#" className="product__aside__title">Sale</a>
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
              <a href="#" className="product__paginator__number product__paginator__number--active">1</a>
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