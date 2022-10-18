import React from 'react'
import './Rightbar.css'

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="eventContainer">
          <img src="" alt="" className="starImg" />
          <span className="eventText"><b>本日イベント日！</b>激熱です！</span>
        </div>
        <img src="assets/event.jpg" alt="" />
        <h4 className="rightbarTitle">遊戯中の友達</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="username"></span>
          </li>
        </ul>
      </div>
    </div>
  )
}
