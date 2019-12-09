import React from 'react'

const Newsletter = () => {
  return (
    <section className="home__newsletter">
      <p className="home__newsletter__description">suscribite a nuestro newsletter</p>
      <div className="home__newsletter__input">
        <input type="text" placeholder="tunombre@mail.com" className="home__newsletter__input__text" />
        <a href="#" className="home__newsletter__input__btn"><img src="/images/newsletter-check.png" /></a>
      </div>
    </section>
  )
}

export default Newsletter