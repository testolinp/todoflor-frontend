import React, { useEffect } from 'react'
import Layout from '../components/Layout'

const RegisterView = () => {
  useEffect(() => {
    document.title = 'Todoflor SRL | Registrate';
  });

  return (
    <Layout hideFt="true">
      <section className="register">
        <div className="register__content">
          <div className="register__content__top"></div>
          <div className="register__content__bottom"></div>
          <h2 className="register__content__title">Registrate</h2>
          <p className="register__content__description">Luego de completar el formulario, esperá a <span>que se confirme tu solicitud por mail.</span></p>
          <div className="register__content__form">
            <div className="register__content__form__sep">
              <input type="text" placeholder="Razón social" />
            </div>
            <div className="register__content__form__sep">
              <input type="text" placeholder="Nombre y apellido" />
            </div>
            <div className="register__content__form__col">
              <div className="register__content__form__sep">
                <input type="text" placeholder="CUIT" />
              </div>
              <div className="register__content__form__sep">
                <select>
                  <option disabled selected hidden>Condición IVA</option>
                  <option>Iva exento</option>
                  <option>Responsable inscripto</option>
                </select>
              </div>
            </div>
            <div className="register__content__form__sep">
              <input type="text" placeholder="Email" />
            </div>
            <div className="register__content__form__sep">
              <input type="text" placeholder="Teléfono" />
            </div>
            <div className="register__content__form__sep">
              <input type="text" placeholder="Dirección" />
            </div>
            <div className="register__content__form__col">
              <div className="register__content__form__sep">
                <input type="text" placeholder="Localidad" />
              </div>
              <div className="register__content__form__sep">
                <input type="text" placeholder="Código postal" />
              </div>
            </div>
            <div className="register__content__form__sep">
              <input type="text" placeholder="Nombre del transporte" />
            </div>
            <div className="register__content__form__important">
              <h3 className="register__content__form__important__title">Importante</h3>
              <p className="register__content__form__important__description">Tu clave va a ser tu número de CUIT</p>
            </div>
            <div className="register__content__form__button">
              <button>Registrarse</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default RegisterView