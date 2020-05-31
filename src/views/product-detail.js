import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Layout from '../components/Layout'

const ProductDetailView = () => {
  useEffect(() => {
    document.title = 'Todoflor SRL | Ramo de Gypsophilia';
  });

  return (
    <Layout>
      <section className="product-detail">
        <div className="product-detail__path"><Link to="/products">productos</Link> > <Link to="/category">flores</Link> > <Link to="/category">varas</Link> > <span>linea premium</span></div>
        <div className="product-detail__image">
          <div className="product-detail__image__wrapper"></div>
        </div>
        <div className="product-detail__data">
          <span className="product-detail__data__code">TF-06234</span>
          <h3 className="product-detail__data__title">RAMO DE GYPSOPHILIA <span>x3</span></h3>
          <p className="product-detail__data__prize">$25</p>
          <div className="product-detail__data__extra">
            <div className="product-detail__data__extra__quantity">
              <input type="text" placeholder="1" />
              <a href="#">-</a>
              <a href="#">+</a>
            </div>
            <select>
              <option disabled selected>Color</option>
              <option>Red</option>
              <option>Blue</option>
            </select>
          </div>
          <div className="product-detail__data__btn">
            <Link to="/resume" className="product-detail__data__btn__link">Agregar al carrito</Link>
          </div>
        </div>
        <div className="product-detail__extra">
          <p className="product-detail__extra__description">Packaging: <span>30x25</span></p>
          <p className="product-detail__extra__description">Medidas: <span>30cm x 25cm</span></p>
          <p className="product-detail__extra__description">Cantidad minima: <span>3 unidades</span></p>
          <p className="product-detail__extra__description">Stock disponible: <span>3 unidades</span></p>
        </div>
      </section>
    </Layout>
  )
}

export default ProductDetailView