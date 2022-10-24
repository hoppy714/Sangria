import React from 'react'
import Rightbar from '../../compornents/rightbar/Rightbar';
import Sidebar from '../../compornents/sidebar/Sidebar';
import Timeline from '../../compornents/timeline/Timeline';
import Topbar from '../../compornents/Topbar/Topbar';
import "./Profile.css"

export default function Profile() {
  return (
    <>
        <Topbar />
        <div className="profile">
          <Sidebar />
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
              <img src="assets/post/3.png" alt="" className='profileCoverImg' />
            </div>
          </div>        
            <div className="profileRightBottom">
              <Timeline />
              <Rightbar />
            </div>
          </div>
        </div>
    </>
  )
}
