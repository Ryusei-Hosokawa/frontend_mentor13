import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./css/HeaderItem.css";

interface NavItem {
    id: string;
    text: string;
    path: string | null;
    isImplemented: boolean;
}
interface HeaderItemProps {
    items: NavItem[];
}

const HeaderItem: React.FC<HeaderItemProps> = ({ items }) => {
    //現在選択されているアイテム管理
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    //アイテムがクリックされた際の処理
    const handleClick = (id: string, isImplemented: boolean) => {
        if(isImplemented) {
            setSelectedItem(id);
        }
    };

    return (
        <>
            {items.map((item) => (
                <li
                    key={item.id}
                    className={`global-navigation__list--item ${
                        !item.path || item.path === "" ? "no-path" : "active-path"
                    } ${selectedItem === item.id ? "selected" : ""}`}
                    onClick={() => handleClick(item.id, item.isImplemented)}
                >
                    {item.path ? (
                        <Link className="Link" to={item.path}>
                            <span>{item.text}</span>
                            <span>{item.text}</span>
                        </Link>
                        ) : (
                            <span>{item.text}</span>
                    )}
                </li>
            ))}
        </>
    );
};

export default HeaderItem;
