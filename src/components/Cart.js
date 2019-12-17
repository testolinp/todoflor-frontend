import React from 'react'

const Cart = () => {
  return (
    <section className="cart">
      <div className="cart__wrapper">
        <div className="cart__content">
          <div className="cart__content__top">
            <a href="#" className="cart__content__close"><img src="/images/close.svg" /></a>
            <h2 className="cart__content__title">Carrito</h2>
            <p className="cart__content__description">Recordá que el mínimo de compra para registrar el pedido es de $8300</p>
          </div>
          <div className="cart__content__boxes">
            <div className="cart__content__box">
              <div className="cart__content__box__image"></div>
              <div className="cart__content__box__data">
                <h4 className="cart__content__box__data__title">Ramo de gysophilia</h4>
                <span className="cart__content__box__data__prize">$25</span>
                <p className="cart__content__box__data__code">tf-054643</p>
                <div className="cart__content__box__data__ft">
                  <a href="#" className="cart__content__box__data__ft__delete"><img src="/images/delete.svg" /></a>
                </div>
              </div>
            </div>
            <div className="cart__content__box">
              <div className="cart__content__box__image"></div>
              <div className="cart__content__box__data">
                <h4 className="cart__content__box__data__title">Ramo de gysophilia</h4>
                <span className="cart__content__box__data__prize">$25</span>
                <p className="cart__content__box__data__code">tf-054643</p>
                <div className="cart__content__box__data__ft">
                  <a href="#" className="cart__content__box__data__ft__delete"><img src="/images/delete.svg" /></a>
                </div>
              </div>
            </div>
            <div className="cart__content__box">
              <div className="cart__content__box__image"></div>
              <div className="cart__content__box__data">
                <h4 className="cart__content__box__data__title">Ramo de gysophilia</h4>
                <span className="cart__content__box__data__prize">$25</span>
                <p className="cart__content__box__data__code">tf-054643</p>
                <div className="cart__content__box__data__ft">
                  <a href="#" className="cart__content__box__data__ft__delete"><img src="/images/delete.svg" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="cart__content__bottom">
            <div className="cart__content__bottom__total">
              <p className="cart__content__bottom__total__text">Total</p>
              <span className="cart__content__bottom__total__number">$25.000</span>
            </div>
            <div className="cart__content__bottom__btns">
              <a href="#" className="cart__content__bottom__btns__finish">Finalizar compra</a>
              <a href="#" className="cart__content__bottom__btns__link">vaciar el carrito</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart