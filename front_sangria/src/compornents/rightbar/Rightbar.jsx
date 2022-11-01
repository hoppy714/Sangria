import { LocalFireDepartment } from '@mui/icons-material'
import React from 'react'
import './Rightbar.css'


export default function Rightbar(profile) {

  const HomeRightbar = () => {
    return (
<>
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
        </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>ユーザ情報</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">出身</span>
            <span className="rightbarInfokey">篠山</span>
          </div>
          <h4 className="rightbarTitle">あなたの友達</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img src="assets/person/1.png" alt="" className='rightbarFollowingImg'/>
              <span className="rightbarFollowingName">a</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/2.png" alt="" className='rightbarFollowingImg'/>
              <span className="rightbarFollowingName">i</span>
          </div>
            <div className="rightbarFollowing">
              <img src="assets/person/3.png" alt="" className='rightbarFollowingImg'/>
              <span className="rightbarFollowingName">u</span>
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
