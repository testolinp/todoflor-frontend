import React from 'react'

const Buy = () => {
  return (
    <section className="home__buy">
      <h2 className="home__buy__title">Cómo comprar</h2>
      <div className="home__buy__list">
        <div className="home__buy__list__item">
          <div className="home__buy__list__item__image"><img src="../images/buy1.svg" alt="icon" /></div>
          <p className="home__buy__list__item__description">Para poder realizar un pedido, es necesario que primero te registres en nuestra página completando un formulario.</p>
        </div>
        <div className="home__buy__list__item">
        <div className="home__buy__list__item__image"><img src="../images/buy2.svg" alt="icon" /></div>
          <p className="home__buy__list__item__description">Tus datos serán validados via mail para que puedas ver nuestros precios y empezar a comprar.</p>
        </div>
        <div className="home__buy__list__item">
        <div className="home__buy__list__item__image"><img src="../images/buy3.svg" alt="icon" /></div>
          <p className="home__buy__list__item__description">Una vez realizado tu pedido, será confirmado por mail junto con los datos de nuestra cuenta para que puedas realizar el pago.</p>
        </div>
        <div className="home__buy__list__item">
        <div className="home__buy__list__item__image"><img src="../images/buy4.svg" alt="icon" /></div>
          <p className="home__buy__list__item__description">Una vez confirmado el pago, enviaremos tu pedido a donde nos indiques por el medio que elijas.</p>
        </div>
      </div>
    </section>
  )
}

export default Buy