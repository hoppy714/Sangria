import React from 'react'
import { MoreVert } from '@mui/icons-material'
//import { Users } from "../../test"
import Topbar from '../../compornents/Topbar/Topbar';
import Sidebar from '../../compornents/sidebar/Sidebar';
import Rightbar from '../../compornents/rightbar/Rightbar';
import './Notification.css'

export default function notification() {
    return (
        <>
            <Topbar />
            <div className="notification">
                <Sidebar />
                <div className="notificationWrapper">
                    <h1>通知</h1>
                    {/*返信*/}
                    <div className="notificationdetailWrapper">
                        <div className="notificationReply">
                            <div className="notificationReplyWrapper">
                                <div className="notificationTop">
                                    <div className="notificationTopLeft">
                                        <img src="./assets/person/1.png" alt="" className="notificationProfileImg" />
                                        <span className="notificationUsername">username</span>
                                        <span className="notificationDate">時間</span>
                                        {/*<span className="notificationDate">{post.date}</span>*/}
                                    </div>
                                    <div className="notificationTopRight">
                                        <MoreVert />
                                    </div>

                                </div>
                                <div className="notificationReplyText">aa</div>

                                <div className="notificationCenter">

                                    {/*<span className="notificationText">{post.desc}</span>*/}
                                    <span className="notificationText">返信</span>
                                    {/*<img src={post.img} alt="" className="notificationImg" />*/}
                                </div>
                                <div className="notificationBottom">
                                    <div className="notificationBottomLeft">
                                        <img src="./assets/heart.jpg" alt="" className="likeIcon" />
                                        {/*<span className="notificationLikeCounter">{post.like}</span>*/}
                                        <span className="notificationLikeCounter">ううう</span>
                                    </div>
                                    <div className="notificationBottomRight">
                                        {/*<span className="notificationComment">コメント:{post.comment}</span>*/}
                                        <span className="notificationComment">コメント:</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*返信*/}
                        {/*いいね*/}
                        <div className="notificationNice">
                            <div className="notificationNiceWrapper">
                                <div className="notificationTop">
                                    <div className="notificationTopLeft">
                                        <img src="./assets/person/1.png" alt="" className="notificationProfileImg" />
                                        <span className="notificationUsername">username</span>
                                        {/*<span className="notificationDate">{post.date}</span>*/}
                                        <span className="notificationDate">時間</span>
                                    </div>
                                    {/*<div className="notificationTopRight">
                                        <MoreVert />
                                    </div>*/}
                                </div>
                                <div className="notificationCenter">
                                    {/*<span className="notificationText">{post.desc}</span>*/}
                                    <span className="notificationText">----さんがあなたの投稿をいいねしました</span>
                                    {/*<img src={post.img} alt="" className="notificationImg" />*/}
                                </div>
                                <div className="notificationUnder">
                                    {/*<span className="notificationText">{post.desc}</span>*/}
                                    <span className="notificationText">投稿内容</span>
                                    {/*<img src={post.img} alt="" className="notificationImg" />*/}
                                </div>
                            </div>
                        </div>
                        {/*いいね*/}
                    </div>
                </div>
                <Rightbar />
            </div>
        </>
    )
}