import { MoreVert } from '@mui/icons-material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Post.css'
import { Users } from "../../test"


export default function Post({ post }) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
  const [like, setLike] = useState(post.like);
  const [isliked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const response = axios.get(`/users/${post.userId}`);
      console.log(response)
      setUser(response.data)
    };
    fetchUser();
  }, []);

  const handleLike = () => {
    setLike(isliked ? like - 1 : like + 1)
    setIsLiked(!isliked)
  }


  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={Users.filter((user) => user.id === post.id)[0].username} alt="" className="postProfileImg" />
            <span className="postUsername">{Users.filter((user) => user.id === post.id)[0].username}</span>
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
            <img src={PUBLIC_FOLDER + "/heart.jpg"} alt="" className="likeIcon" />
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
