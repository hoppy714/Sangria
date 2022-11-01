import { MoreVert } from '@mui/icons-material'
import React from 'react'
import './Post.css'
import {Users} from "../../test"


export default function Post({post}) {

  console.log(post);
  console.log(Users);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="./assets/person/1.png" alt="" className="postProfileImg" />
            <span className="postUsername">username</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="./assets/heart.jpg" alt="" className="likeIcon" />
            <span className="postLikeCounter">{post.like}</span>
          </div>
          <div className="postBottomRight">
            <span className="postComment">コメント:{post.comment}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
