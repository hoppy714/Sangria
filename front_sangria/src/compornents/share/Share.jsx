import { Image, Place } from '@mui/icons-material'
import React from 'react'
import './Share.css'

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/person/1.png" alt="" className="shareTopProfile" />
                <input type="text" className="shareInput" placeholder='投稿部分'/>
            </div>
            <hr className="shareHr" />

            <div className="shareButtons">
              <div className="shareOptions">
                <div className="shareOption">
                  <Image className='shareOptionIcon' htmlColor='blue'/>
                  <span className="shareOptionText">写真</span>
                </div>
                <div className="shareOption">
                  <Place className='shareOptionIcon' htmlColor='green'/>
                  <span className="shareOptionText">店舗</span>
                </div>
              </div>
              <button className="shareButton">投稿</button>
            </div>
        </div>
    </div>
  )
}
