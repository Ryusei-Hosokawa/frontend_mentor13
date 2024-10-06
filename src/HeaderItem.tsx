import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./css/HeaderItem.css";

interface NavItem {
    id: string;
    text: string;
    path?: string | undefined | null;
}
interface HeaderItemProps {
    items: NavItem[];
}

const HeaderItem: React.FC<HeaderItemProps> = ({ items }) => {
    //現在選択されているアイテム管理
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    //アイテムがクリックされた際の処理
    const handleClick = (id: string) => {
        setSelectedItem(id);
    };


    return (
        <>
            {items.map((item) => (
                <li
                    key={item.id}
                    className={`global-navigation__list--item ${
                        !item.path || item.path.trim() === "" ? "no-path" : "active-path"
                    } ${selectedItem === item.id ? "selected" : ""}`}
                    onClick={() => handleClick(item.id)}
                >
                    {item.path && item.path.trim() !== "" ? (
                        <Link className="Link" to={item.path}>
                            <p>{item.text}</p>
                            <p>{item.text}</p>
                        </Link>
                        ) : (
                            <p>{item.text}</p>
                    )}
                </li>
            ))}
        </>
    );
};

export default HeaderItem;
