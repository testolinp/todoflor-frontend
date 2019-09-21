import React from 'react'
import Layout from '../components/Layout'
import Herospace from '../components/home/Herospace'
import Products from '../components/home/Products'
import About from '../components/home/About'
import Buy from '../components/home/Buy'

const HomeView = () => {
  return (
    <Layout>
      <section className="home">
        <Herospace />
        <Products />
        <About />
        <Buy />
        <section className="home__newsletter">
          {/* <p className="home__newsletter__description">suscribite a nuestro newsletter</p> */}
        </section>
      </section>
    </Layout>
  )
}

export default HomeView