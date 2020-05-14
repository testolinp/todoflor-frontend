import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Layout from '../components/Layout'

const ProductView = () => {
  useEffect(() => {
    document.title = 'Todoflor SRL | Productos';
  });

  const products = ['Flores', 'Follajes','Frutas', 'Navidad', 'Recipientes', 'Decoración', 'Sale']

  return (
    <Layout>
      <section className="products">
        <section className="products__herospace">
          <p className="products__herospace__title">Como estamos permanentemente renovando nuestro surtido, contamos con una gran variedad de modelos, tamaños y colores para ofrecerte.</p>
        </section>
        <section className="products__grid">
          {products.map((product, index) => 
            <Link to="/category" className="products__grid__box" key={index}>
              <p className="products__grid__box__title">{product}</p>
            </Link>
          )}
        </section>
        <div className="products__btn">
          <Link to="/category" className="products__btn__link">Ver todos los productos</Link>
        </div>
      </section>
    </Layout>
  )
}

export default ProductView