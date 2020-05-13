import React from 'react'
import Layout from '../components/Layout'

const SuccessView = () => {
  return (
    <Layout hideFt="true">
      <section className="success">
        <div className="success__content">
          <div className="success__content__img"><img src="/images/success.svg" /></div>
          <h3 className="success__content__title">¡felicitaciones!</h3>
          <p className="success__content__description">Tu pedido se ha registrado con éxito.</p>
          <div className="success__content__btn">
            <a href="/" className="success__content__btn__link">volver al inicio</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SuccessView