import React, { useState } from "react";
import "./css/DescriptionArea.css";
import { CartSvg } from "./Svgs.tsx";

export default function DescriptionArea() {
    //商品数のカウントを管理するstate
    const [count, setCount] = useState(1);

    // 商品の価格情報を管理するオブジェクト
    const priceData = {
        base: 250.0,
        saleOff: 50,
        saleOffValueType: "%", // "%" もしくは "$" を設定
    };
    // 現在の価格を計算する関数
    const calculateCurrentPrice = (priceData: {
        base: number;
        saleOff: number;
        saleOffValueType: string;
    }) => {
        if (priceData.saleOffValueType === "%") {
            return (priceData.base - (priceData.base * priceData.saleOff) / 100).toFixed(2);
        } else if (priceData.saleOffValueType === "$") {
            return (priceData.base - priceData.saleOff).toFixed(2);
        } else {
            console.error("priceData内の設定に誤りがあります🐤");
            return priceData.base.toFixed(2);
        }
    };
    const currentPrice: string = calculateCurrentPrice(priceData);

    return (
        <div id="DescriptionArea">
            <p className="company__name">Sneaker Company</p>
            <h2 className="product__name">Fall Limited Edition Sneakers</h2>
            <p className="product__description--text">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they’ll
                withstand everything the weather can offer.
            </p>
            <div className="product__price--wrap">
                <p className="product__price--current">${currentPrice}</p>
                <span className="product__price--sale-off">
                    {priceData.saleOff}
                    {priceData.saleOffValueType}
                </span>
            </div>
            <span className="product__price--base-price">
                ${priceData.base.toFixed(2)}
            </span>
            <div className="product__actions">
                <div className="quantity-adjuster">
                    <button
                        className="quantity-adjuster__button--minus"
                        onClick={() => count > 1 && setCount(count - 1)}
                    ></button>
                    <div className="quantity-adjuster__input">{count}</div>
                    <button
                        className="quantity-adjuster__button--plus"
                        onClick={() => setCount(count + 1)}
                    ></button>
                </div>
                <button className="button__add-to-cart">
                    {CartSvg("button__add-to-cart--icon", "#1D2026")}
                    <p className="button__add-to-cart--text">Add to cart</p>
                </button>
            </div>
        </div>
    );
}
