import React from 'react'
import ImageArea from '../ImageArea.tsx'
import DescriptionArea from '../DescriptionArea.tsx'
import '../css/Collections.css'

export default function Collections() {
  return (
    <div className='main__contents'>
      <ImageArea />
      <DescriptionArea />
    </div>
  )
}
