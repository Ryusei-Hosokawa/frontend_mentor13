import React from 'react'
import './css/ImageArea.css'
import { getImageUrl } from './pathHelpers.ts'

export default function ImageArea() {
  return (
    <div id='ImageArea'>
        <div className="choice__img--area">
            <img className="choice__img--content" src={getImageUrl('Rectangle_01','jpg')} alt="選択した画像" />
        </div>
        <div className="thumbnails__img--area">
            <input type="radio" />
            <img className="thumbnails__img--content checked" src={getImageUrl('Rectangle_01','jpg')} alt="サムネイル画像" />
            <img className="thumbnails__img--content" src={getImageUrl('Rectangle_02','jpg')} alt="サムネイル画像" />
            <img className="thumbnails__img--content" src={getImageUrl('Rectangle_03','jpg')} alt="サムネイル画像" />
            <img className="thumbnails__img--content" src={getImageUrl('Rectangle_04','jpg')} alt="サムネイル画像" />
        </div>
    </div>
  )
}
