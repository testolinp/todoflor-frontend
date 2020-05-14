import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import Herospace from '../components/home/Herospace'
import Products from '../components/home/Products'
import About from '../components/home/About'
import Buy from '../components/home/Buy'
import Newsletter from '../components/home/Newsletter'

const HomeView = () => {
  useEffect(() => {
    document.title = 'Todoflor SRL';
  });

  return (
    <Layout>
      <section className="home">
        <Herospace />
        <Products />
        <About />
        <Buy />
        <Newsletter />
      </section>
    </Layout>
  )
}

export default HomeView