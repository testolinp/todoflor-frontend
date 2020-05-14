import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Layout from '../components/Layout'

const SuccessView = () => {
  useEffect(() => {
    document.title = 'Todoflor SRL | Felicitaciones!';
  })

  return (
    <Layout hideFt="true">
      <section className="success">
        <div className="success__content">
          <div className="success__content__img"><img src="/images/success.svg" /></div>
          <h3 className="success__content__title">¡felicitaciones!</h3>
          <p className="success__content__description">Tu pedido se ha registrado con éxito.</p>
          <div className="success__content__btn">
            <Link to="/" className="success__content__btn__link">volver al inicio</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SuccessView