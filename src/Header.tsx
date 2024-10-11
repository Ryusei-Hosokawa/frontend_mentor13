import React from "react";
import HeaderItem from "./HeaderItem.tsx";
import "./css/Header.css";
import { useNavigate } from "react-router-dom";

interface NavItem {
    id: string;
    text: string;
    path: string | null;
    isImplemented: boolean;
}

const getSvgImageUrl = (fileName: string, extension: string = 'svg') => {
    return new URL(`../assets/images/${fileName}.${extension}`, import.meta.url).href
}
const getJpgImageUrl = (fileName: string, extension: string = 'jpg') => {
    return new URL(`../assets/images/${fileName}.${extension}`, import.meta.url).href
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
    return (
        <header className="header">
            <nav className="global-navigation">
                <h1 className="global-navigation__logo" onClick={handleClick}>
                    <img
                        className="global-navigation__logo--image"
                        src={getSvgImageUrl('logo')}
                    />
                </h1>
                <ul className="global-navigation__list">
                    <HeaderItem items={navItems} />
                </ul>
                <div className="global-navigation__contents">
                    <div className="global-navigation__contents--cart">
                        <img
                            className="global-navigation__contents--cart--image"
                            src={getSvgImageUrl('Group_14')}
                        />
                    </div>
                    <div className="global-navigation__contents--profile">
                        <img
                            className="global-navigation__contents--profile--image"
                            src={getJpgImageUrl('DSC02731-Enhanced')}
                        />
                    </div>
                </div>
            </nav>
        </header>
    );
}
