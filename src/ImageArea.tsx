import React from "react";
import "./css/ImageArea.css";
import { useState } from "react";
import { getImageUrl } from "./pathHelpers.ts";

export default function ImageArea() {
    const [selectedItem, setSelectedItem] = useState<string>('01');
    const listItems = ["01", "02", "03", "04"];
    const handleClick = (selectItem:string) => {
        setSelectedItem(selectItem);
    };

    return (
        <div id="ImageArea">
            <div className="choice__img--area">
                <img
                    className="choice__img--content"
                    src={getImageUrl(`img_product_${selectedItem}`)}
                    alt="選択した画像"
                />
            </div>
            <div className="thumbnails__img--area">
                {listItems.map((item) => (
                    <>
                        <input type="radio" id={`content${item}`} name="thumbnailGroup" />
                        <label
                            className={`thumbnails__img--content${item}`}
                            htmlFor={`content${item}`}
                            onClick={() => handleClick(item)}
                        >
                            <img
                                src={getImageUrl(`img_product_${item}`)}
                                alt="サムネイル画像"
                            />
                        </label>
                    </>
                ))}
            </div>
        </div>
    );
}
