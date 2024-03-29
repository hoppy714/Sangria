import { MoreVert } from '@mui/icons-material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Post.css'
import { format } from "timeago.js"
import { Link } from 'react-router-dom';
// import { Users } from "../../test"


export default function Post({ post }) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?userId=${post.userId}`)
      // console.log(response);
      setUser(response.data)
    };
    fetchUser();
  }, [post.userId]);
  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img src={user.profilePicture || PUBLIC_FOLDER + "/person/prof.png"} alt="" className="postProfileImg" /></Link >
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={PUBLIC_FOLDER + post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src={PUBLIC_FOLDER + "/heart.jpg"} alt="" className="likeIcon" onClick={() => handleLike()} />
            <span className="postLikeCounter">{like}</span>
          </div>
          <div className="postBottomRight">
            <span className="postComment">コメント:{post.comment}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
