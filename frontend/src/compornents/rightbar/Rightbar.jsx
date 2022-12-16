import { LocalFireDepartment } from '@mui/icons-material'
import React from 'react'
import './Rightbar.css'
import Online from '../online/Online'
import { Users } from '../../test'


export default function Rightbar({ profile }) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
  const HomeRightbar = () => {
    return (
      <>
        <div className="eventContainer">
          <LocalFireDepartment className='fireImg' htmlColor='red' />
          <span className="eventText"><b>本日イベント日！</b>激熱です！</span>
        </div>
        <img src={PUBLIC_FOLDER + "/event.jpg"} alt="" className='eventImg' />
        <h4 className="rightbarTitle">遊戯中の友達</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online user={user} key={user.id} />
          ))}
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
              <img src={PUBLIC_FOLDER + "/person/1.png"} alt="" className='rightbarFollowingImg' />
              <span className="rightbarFollowingName">a</span>
            </div>
            <div className="rightbarFollowing">
              <img src={PUBLIC_FOLDER + "/person/2.png"} alt="" className='rightbarFollowingImg' />
              <span className="rightbarFollowingName">i</span>
            </div>
            <div className="rightbarFollowing">
              <img src={PUBLIC_FOLDER + "/person/3.png"} alt="" className='rightbarFollowingImg' />
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
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
