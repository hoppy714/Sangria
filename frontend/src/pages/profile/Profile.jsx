import React from 'react'
import Rightbar from '../../compornents/rightbar/Rightbar';
import Sidebar from '../../compornents/sidebar/Sidebar';
import Timeline from '../../compornents/timeline/Timeline';
import Topbar from '../../compornents/Topbar/Topbar';
import "./Profile.css"

export default function Profile() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src={PUBLIC_FOLDER + "/post/cover.png"} alt="" className='profileCoverImg' />
              <img src={PUBLIC_FOLDER + "/post/post.jpg"} alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">hoppy</h4>
              <span className="profileInfoDesc">特に趣味はありません</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Timeline />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  )
}
