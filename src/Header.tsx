import React from "react";
import HeaderItem from "./HeaderItem.tsx";
import "./css/Header.css";

export default function Header() {
    const navItems = ["Collections", "Men", "Women", "About", "Contact"];
    const nacText = navItems.map((navItem) => ({ id: navItem, text: navItem, path: `/${navItem}` }));

    return (
        <header className="header">
            <nav className="global-navigation">
                <h1 className="global-navigation__logo">
                    <img className="global-navigation__logo--image" src="src/assets/images/logo.svg"/>
                </h1>
                <ul className="global-navigation__list">
                    <HeaderItem items={nacText} />
                </ul>
                <div className="global-navigation__contents">
                    <div className="global-navigation__contents--cart">
                        <img className="global-navigation__contents--cart--image" src="src/assets/images/Group 14.svg"/>
                    </div>
                    <div className="global-navigation__contents--profile">
                        <img className="global-navigation__contents--profile--image" src="src/assets/images/DSC02731-Enhanced.jpg"/>
                    </div>
                </div>
            </nav>
        </header>
    );
}
