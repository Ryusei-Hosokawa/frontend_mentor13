import React from 'react'
import './css/DescriptionArea.css'
import { getImageUrl } from './pathHelpers.ts'

export default function DescriptionArea() {
  return (
    <div id='DescriptionArea'>
        <p className="company__name">Sneaker Company</p>
        <h2 className="product__name">Fall Limited Edition Sneakers</h2>
        <p className="product__description--text">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div className="product__price--wrap">
        <p className="product__price--current">$125.00</p><span className="product__price--sale-off">50%</span>
        </div>
        <span className="product__price--base-price">$250.00</span>
        <div className="product__actions">
            <div className="quantity-adjuster">
                <button className="quantity-adjuster__button--minus"></button>
                <input className="quantity-adjuster__input" type="text" value="1" />
                <button className="quantity-adjuster__button--plus"></button>
            </div>
            <button className="button__add-to-cart">
                <img className='button__add-to-cart--icon' src={getImageUrl('Group_14','svg')} alt="カートのアイコン" />
                <p className="button__add-to-cart--text">Add to cart</p>
            </button>
        </div>
    </div>
  )
}
