import React from "react";
import { useState } from "react";
import "./css/CartBox.css";

// 商品の型定義
interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export default function CartBox() {
    const [quantity, setQuantity] = useState(1); //選択した商品数を管理するためのState
    const [cartItems, setCartItems] = useState<CartItem[]>([]); //カート内商品を管理するためのState

    //商品をカートに追加する処理
    const addToCart = () => {
        const newItem: CartItem = {
            id: 1, //商品ID
            name: "Fall Limited Edition Sneakers", //商品名
            price: 125.0, //価格
            quantity: quantity, //数量
        };
        //カートに新しい商品を追加（同じ商品の場合は数量を更新）する処理
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(
                (item) => item.id === newItem.id
            );
            if (existingItem) {
                //     //すでにカート内に同じ商品がある場合は数量を更新
                return prevItems.map((item) =>
                    item.id === newItem.id
                        ? {
                              ...item,
                              quantity: item.quantity + newItem.quantity,
                          }
                        : item
                );
            } else {
                return [...prevItems, newItem];
            }
        });
    };

    return (
        <>
            <div className="CartBox">
                <div className="name__box">
                    <h2 className="name-text">Cart</h2>
                </div>
                <div className="product__box">
                    {cartItems.length === 0 ? (
                        <div className="no-items__text">Your cart is empty.</div>
                    ) : (
                        cartItems.map((item: CartItem) => (
                            <div key={item.id} className="cart-item">
                                <div className="cart-item__name">{item.name}</div>
                                <div className="cart-item__quantity">Quantity: {item.quantity}</div>
                                <div className="cart-item__price">Total: ${(item.price * item.quantity).toFixed(2)}</div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}
