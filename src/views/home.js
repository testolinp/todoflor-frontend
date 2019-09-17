import React from 'react'
import Layout from '../components/Layout'

const HomeView = () => {
  return (
    <Layout>
      <section className="home">
        <section className="home__herospace"></section>

        <section className="home__about">
          <div className="home__about__image"></div>
          <div className="home__about__data">
            <h3 className="home__about__data__title">¿Quiénes somos?</h3>
            <p className="home__about__data__description">Desde 1991, Todoflor S.R.L. es una empresa dedicada a la importación de flores y plantas artificiales, floreros y artículos de Navidad. No obstante, nuestra permanencia en el rubro data de 1973 , cuando comenzamos con la fabricación de flores artificiales, en los tiempos en que las posibilidades de importación eran muy limitadas. A lo largo de estos años, hemos tratado de acompañar la evolución de la moda, en lo que se refiere a colores, texturas y materiales.</p>
          </div>
        </section>

        <section className="home__buy">
          <h2 className="home__buy__title">Como comprar</h2>
          <div className="home__buy__list">
            <div className="home__buy__list__item">
              <div className="home__buy__list__item__image"><img src="../images/buy1.svg" /></div>
              <p className="home__buy__list__item__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas sed mi sit amet tincidunt. Maecenas ante tortor, vulputate quis blandit sed, malesuada ut tortor.</p>
            </div>
            <div className="home__buy__list__item">
            <div className="home__buy__list__item__image"><img src="../images/buy2.svg" /></div>
              <p className="home__buy__list__item__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas sed mi sit amet tincidunt. Maecenas ante tortor, vulputate quis blandit sed, malesuada ut tortor.</p>
            </div>
            <div className="home__buy__list__item">
            <div className="home__buy__list__item__image"><img src="../images/buy3.svg" /></div>
              <p className="home__buy__list__item__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas sed mi sit amet tincidunt. Maecenas ante tortor, vulputate quis blandit sed, malesuada ut tortor.</p>
            </div>
            <div className="home__buy__list__item">
            <div className="home__buy__list__item__image"><img src="../images/buy4.svg" /></div>
              <p className="home__buy__list__item__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas sed mi sit amet tincidunt. Maecenas ante tortor, vulputate quis blandit sed, malesuada ut tortor.</p>
            </div>
          </div>
        </section>

        <section className="home__newsletter">
          {/* <p className="home__newsletter__description">suscribite a nuestro newsletter</p> */}
        </section>
      </section>
    </Layout>
  )
}

export default HomeView