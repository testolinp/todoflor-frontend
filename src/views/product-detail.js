import React from 'react'
import Layout from '../components/Layout'

const ProductDetailView = () => {
  return (
    <Layout>
      <section className="product-detail">
        <div className="product-detail__path">productos > flores > varas > <span>linea premium</span></div>
        <div className="product-detail__image">
          <div className="product-detail__image__wrapper"></div>
        </div>
        <div className="product-detail__data">
          <span className="product-detail__data__code">TF-06234</span>
          <h3 className="product-detail__data__title">RAMO DE GYPSOPHILIA <span>x3</span></h3>
          <p className="product-detail__data__prize">$25</p>
          <div className="product-detail__data__btn">
            <a href="" className="product-detail__data__btn__link">Agregar al carrito</a>
          </div>
        </div>
        <div className="product-detail__extra">
          <p className="product-detail__extra__description">Packaging: <span>30x25</span></p>
          <p className="product-detail__extra__description">Medidas: <span>30cm x 25cm</span></p>
          <p className="product-detail__extra__description">Cantidad minima: <span>3 unidades</span></p>
        </div>
      </section>
    </Layout>
  )
}

export default ProductDetailView