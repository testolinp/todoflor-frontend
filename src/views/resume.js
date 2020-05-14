import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Layout from '../components/Layout'

const ResumeView = () => {
  useEffect(() => {
    document.title = 'Todoflor SRL | Resumen de compra';
  });

  return (
    <Layout>
      <section className="resume">
        <h2 className="resume__title">resumen de compra</h2>
        <div className="resume__wrapper">
          <div className="resume__wrapper__content">
            <div className="resume__wrapper__content__row"><p>ramo de gysophilia</p><p>TF-08237182</p><p>x25</p><p>$2680</p></div>
            <div className="resume__wrapper__content__row"><p>ramo de gysophilia</p><p>TF-08237182</p><p>x25</p><p>$2680</p></div>
            <div className="resume__wrapper__content__row"><p>ramo de gysophilia</p><p>TF-08237182</p><p>x25</p><p>$2680</p></div>
            <div className="resume__wrapper__content__row"><p>ramo de gysophilia</p><p>TF-08237182</p><p>x25</p><p>$2680</p></div>
            <div className="resume__wrapper__content__row"><p>ramo de gysophilia</p><p>TF-08237182</p><p>x25</p><p>$2680</p></div>
            <div className="resume__wrapper__content__row"><p>ramo de gysophilia</p><p>TF-08237182</p><p>x25</p><p>$2680</p></div>
            <div className="resume__wrapper__content__row"><p>ramo de gysophilia</p><p>TF-08237182</p><p>x25</p><p>$2680</p></div>
            <div className="resume__wrapper__content__row"><p>ramo de gysophilia</p><p>TF-08237182</p><p>x25</p><p>$2680</p></div>
            <div className="resume__wrapper__content__total"><p>total (sin iva)</p><p>$14350</p></div>
          </div>
          <div className="resume__wrapper__sidebar">
            <p>Una vez registrado el pedido, nos estaremos comunicando vía mail para confirmar su costo y luego coordinar el pago y la entrega.</p>
            <div className="resume__wrapper__sidebar__btns">
              <Link to="/success" className="resume__wrapper__sidebar__btns__link">Enviar pedido</Link>
              <Link to="/product" className="resume__wrapper__sidebar__btns__link">Modificar pedido</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ResumeView