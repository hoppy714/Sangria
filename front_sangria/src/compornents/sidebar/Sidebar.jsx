import React from 'react';
import { Bookmark, Home, MessageRounded, Notifications, Person, Search } from "@mui/icons-material";
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarlist">
          <li className="sidebarListItem">
            <Home className="sidebarIcon"/>
            <span className="sidebarListItemText">ホーム</span>
          </li>
          <li className="sidebarListItem">
            <Search className="sidebarIcon"/>
            <span className="sidebarListItemText">検索</span>
          </li>
          <li className="sidebarListItem">
            <Notifications className="sidebarIcon"/>
            <span className="sidebarListItemText">通知</span>
          </li>
          <li className="sidebarListItem">
            <MessageRounded className="sidebarIcon"/>
            <span className="sidebarListItemText">DM</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon"/>
            <span className="sidebarListItemText">ブックマーク</span>
          </li>
          <li className="sidebarListItem">
            <Person className="sidebarIcon"/>
            <span className="sidebarListItemText">プロフィール</span>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpg" alt="" className='sidebarFriendImg'/>
            <span className="sidebarFriendName">Ginjiro Abe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/3.jpg" alt="" className='sidebarFriendImg'/>
            <span className="sidebarFriendName">Takayuki Tamai</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/4.jpg" alt="" className='sidebarFriendImg'/>
            <span className="sidebarFriendName">Ken Hatakenaka</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
