import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

const LoginView = () => {
  useEffect(() => {
    document.title = 'Todoflor SRL | Ingresar';
  });

  return (
    <Layout hideFt="true">
      <section className="login">
        <div className="login__content">
          <div className="login__content__top"></div>
          <div className="login__content__bottom"></div>
          <h2 className="login__content__title">Hola!</h2>
          <p className="login__content__description">Ingresá tus datos para <span>iniciar sesión</span></p>
          <div className="login__content__form">
            <div className="login__content__form__sep">
              <input type="text" placeholder="Email o usuario" />
            </div>
            <div className="login__content__form__sep">
              <input type="text" placeholder="Clave (CUIT)" />
            </div>
            <div className="login__content__form__button">
              <button>Ingresar</button>
            </div>
          </div>
          <div className="login__content__register">
            <p className="login__content__register__text">¿Sos nuevo? Registrate <Link to="/register">acá</Link></p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default LoginView