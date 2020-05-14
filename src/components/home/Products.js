import React from 'react'
import { Link } from 'react-router-dom'

import Slider from "react-slick"

const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 2100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: false,
          arrows: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const sliderItems = ['Novedades', 'Flores', 'Follajes','Frutas', 'Navidad', 'Recipientes', 'Sale']

  return (
    <section className="home__products">
      <h2 className="home__products__title">Productos</h2>
      <div className="home__products__list">
        <Slider {...settings}>
          {sliderItems.map((item, index) => 
            <div className="home__products__list__items">
              <Link to="/category" className={`home__products__list__items__box home__products__list__items__box--${index + 1}`}>
                <h3 className="home__products__list__items__box__title">{item}</h3>
              </Link>
            </div>
          )}
        </Slider>
      </div>
      <div className="home__products__btn">
        <Link to="/products" className="home__products__btn__link">Ver todos los productos</Link>
      </div>
    </section>
  )
}

export default Products