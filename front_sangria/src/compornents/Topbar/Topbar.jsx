import { Chat, Notifications, Search } from '@mui/icons-material'
import React from 'react'
import "./Topbar.css"

export default function Topbar() {
  return (
    <div className='topberContainer'>
      <div className='topbarLeft'>
        <span className='logo'>PachinkoBIG</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className='searchIcon'/>
          <input type="text" className="searchInput" placeholder='見つけたいものを検索しよう' />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIconItems">
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">2</span>
          </div> 
          <img src="/assets/profile.png" alt="" className="topbarImg" />
        </div>
      </div>
    </div>
  )
}
