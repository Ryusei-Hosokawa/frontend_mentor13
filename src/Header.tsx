import React, { useState } from "react";
import HeaderItem from "./HeaderItem.tsx";
import CartBox from "./CartBox.tsx";
import useCartBox from "./useCartBox.tsx";
import "./css/Header.css";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "./pathHelpers.ts";
import { CartSvg, logoSvg } from "./Svgs.tsx";

interface NavItem {
    id: string;
    text: string;
    path: string | null;
    isImplemented: boolean;
}

export default function Header() {
    const navItemNames = ["Collections", "Men", "Women", "About", "Contact"];
    const navItems: NavItem[] = [
        {
            id: navItemNames[0],
            text: navItemNames[0],
            path: navItemNames[0],
            isImplemented: true,
        },
        {
            id: navItemNames[1],
            text: navItemNames[1],
            path: null,
            isImplemented: false,
        },
        {
            id: navItemNames[2],
            text: navItemNames[2],
            path: null,
            isImplemented: false,
        },
        {
            id: navItemNames[3],
            text: navItemNames[3],
            path: null,
            isImplemented: false,
        },
        {
            id: navItemNames[4],
            text: navItemNames[4],
            path: null,
            isImplemented: false,
        },
    ];

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
        window.scrollTo(0, 0);
    };
    const cartBox = useCartBox();

    const [active, setActive] = useState(false);
    const classToggle = () => {
        setActive(!active);
    };

    return (
        <header className="header">
            <nav className="global-navigation">
                <h1 className="global-navigation__logo" onClick={handleClick}>
                    {logoSvg("global-navigation__logo--image")}
                </h1>
                <ul className="global-navigation__list">
                    <HeaderItem items={navItems} />
                </ul>
                <div className="global-navigation__contents">
                    <div
                        className="global-navigation__contents--cart"
                        onClick={classToggle}
                    >
                        {CartSvg("global-navigation__contents--cart--image")}
                    </div>
                    <div className="global-navigation__contents--profile">
                        <img
                            className="global-navigation__contents--profile--image"
                            src={getImageUrl("DSC02731-Enhanced")}
                        />
                    </div>
                </div>
            </nav>
            {/* cartBox.isVisibleがtrueの場合のみCartBoxを表示 */}
            <div className={active ? "show" : "hidden"}>
                <CartBox />
            </div>
        </header>
    );
}
