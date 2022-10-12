import React from 'react'

export default function Topbar() {
  return (
    <div className='topberCompornent'>
      <div className='topbarLeft'>
        <span className='logo'>PachinkoBIG</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <input type="text" className="searchInput" placeholder='見つけたいものを検索しよう' />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIconItem">1</div>
        <div className="topbarIconItem">2</div>
      </div>
    </div>
  )
}
