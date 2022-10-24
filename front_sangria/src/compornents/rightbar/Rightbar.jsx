import { LocalFireDepartment } from '@mui/icons-material'
import React from 'react'
import './Rightbar.css'


export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="eventContainer">
          <LocalFireDepartment className='fireImg' htmlColor='red'/>
          <span className="eventText"><b>本日イベント日！</b>激熱です！</span>
        </div>
        <img src="assets/event.jpg" alt="" className='eventImg'/>
        <h4 className="rightbarTitle">遊戯中の友達</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="./assets/person/4.jpg" alt="" className='friendImg'/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="username">Tamai Takayuki</span>
          </li>
        </ul>
        <p className="promotionTitle">広告</p>
        <img src="" alt="" className="promotionImg" />
        <p className="promotionName">Amazon AdSense</p>
      </div>
    </div>
  )
}
