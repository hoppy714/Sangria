import { Image, Place } from '@mui/icons-material'
import React from 'react'
import './Share.css'

export default function Share() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={PUBLIC_FOLDER + "/person/prof.png"} alt="" className="shareTopProfile" />
          <input type="text" className="shareInput" placeholder='' />
        </div>
        <hr className="shareHr" />

        <div className="shareButtons">
          <div className="shareOptions">
            <div className="shareOption">
              <Image className='shareOptionIcon' htmlColor='blue' />
              <span className="shareOptionText">写真</span>
            </div>
            <div className="shareOption">
              <Place className='shareOptionIcon' htmlColor='green' />
              <span className="shareOptionText">店舗</span>
            </div>
          </div>
          <button className="shareButton">投稿</button>
        </div>
      </div>
    </div>
  )
}
