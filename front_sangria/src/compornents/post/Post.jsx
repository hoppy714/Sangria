import { MoreVert } from '@mui/icons-material'
import React from 'react'
import './Post.css'

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="./assets/person/1.png" alt="" className="postProfileImg" />
            <span className="postUsername">hoppin</span>
            <span className="postDate">3分前</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">SNSdayon</span>
          <img src="./assets/post.jpg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="./assets/heart.jpg" alt="" className="likeIcon" />
            <span className="postLikeCounter">5人がいいねを押しました</span>
          </div>
          <div className="postBottomRight">
            <span className="postComment">コメント:4件</span>
          </div>
        </div>
      </div>
    </div>
  )
}
