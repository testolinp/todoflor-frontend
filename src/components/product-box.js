import React from 'react'

const ProductBox = () => {
  return (
    <a href="/product" className="product__grid__box">
      <div className="product__grid__box__image"></div>
      <div className="product__grid__box__data">
        <h3 className="product__grid__box__data__title">Reloj de pie</h3>
        <p className="product__grid__box__data__code">TF-06234</p>
        <span className="product__grid__box__data__prize">$25</span>
      </div>
    </a>
  )
}

export default ProductBox