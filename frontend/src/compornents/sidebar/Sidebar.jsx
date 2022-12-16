import React from 'react';
import { Description, Home, MessageRounded, Notifications, Person, Search, Settings } from "@mui/icons-material";
import "./Sidebar.css"
import Closefriend from '../closefriend/closefriend';
import { Link } from 'react-router-dom';
import { Users } from '../../test'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarlist">
          <li className="sidebarListItem">
            <Home className="sidebarIcon" />
            <Link to="/" style={{ color: "#5e5e5e", textDecoration: "none" }}>
              <span className="sidebarListItemText">ホーム</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Search className="sidebarIcon" />
            <span className="sidebarListItemText">検索</span>
          </li>
          <li className="sidebarListItem">
            <Notifications className="sidebarIcon" />
            <span className="sidebarListItemText">通知</span>
          </li>
          <li className="sidebarListItem">
            <MessageRounded className="sidebarIcon" />
            <span className="sidebarListItemText">DM</span>
          </li>
          <li className="sidebarListItem">
            <Description className="sidebarIcon" />
            <span className="sidebarListItemText">収支表</span>
          </li>
          <li className="sidebarListItem">
            <Person className="sidebarIcon" />
            <Link to="/profile/hoppy" style={{ color: "#5e5e5e", textDecoration: "none" }}>
              <span className="sidebarListItemText">プロフィール</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Settings className="sidebarIcon" />
            <Link to="/settings" style={{ color: "#5e5e5e", textDecoration: "none" }}>
              <span className="sidebarListItemText">設定</span>
            </Link>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((user) => (
            <Closefriend user={user} key={user.id} />
          ))}
        </ul>
      </div>
    </div >
  )
}
