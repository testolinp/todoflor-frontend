import React from 'react'
import Layout from '../components/Layout'

const Error404View = () => {
  return (
    <Layout hideFt="true">
      <section className="error404">
        <div className="error404__content">
          <div className="error404__content__img"><img src="/images/404.svg" /></div>
          <h3 className="error404__content__title">¡oops!</h3>
          <p className="error404__content__description">Lo sentimos pero no pudimos encontrar esa página.</p>
          <div className="error404__content__btn">
            <a href="/" className="error404__content__btn__link">volver al inicio</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Error404View