import React from 'react'
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

  return (
    <section className="home__products">
      <h2 className="home__products__title">Productos</h2>
      <div className="home__products__list">
        <Slider {...settings}>
          <div className="home__products__list__items">
            <div className="home__products__list__items__box home__products__list__items__box--1">
              <h3 className="home__products__list__items__box__title">Novedades</h3>
            </div>
          </div>
          <div className="home__products__list__items">
            <div className="home__products__list__items__box home__products__list__items__box--2">
              <h3 className="home__products__list__items__box__title">Flores</h3>
            </div>
          </div>
          <div className="home__products__list__items">
            <div className="home__products__list__items__box home__products__list__items__box--3">
              <h3 className="home__products__list__items__box__title">Follajes</h3>
            </div>
          </div>
          <div className="home__products__list__items">
            <div className="home__products__list__items__box home__products__list__items__box--4">
              <h3 className="home__products__list__items__box__title">Frutas</h3>
            </div>
          </div>
          <div className="home__products__list__items">
            <div className="home__products__list__items__box home__products__list__items__box--5">
              <h3 className="home__products__list__items__box__title">Navidad</h3>
            </div>
          </div>
          <div className="home__products__list__items">
            <div className="home__products__list__items__box home__products__list__items__box--6">
              <h3 className="home__products__list__items__box__title">Recipientes</h3>
            </div>
          </div>
          <div className="home__products__list__items">
            <div className="home__products__list__items__box home__products__list__items__box--7">
              <h3 className="home__products__list__items__box__title">Sale</h3>
            </div>
          </div>
        </Slider>
      </div>
      <div className="home__products__btn">
        <a href="#" className="home__products__btn__link">Ver todos los productos</a>
      </div>
    </section>
  )
}

export default Products