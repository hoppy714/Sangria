import Share from '../share/Share'
import Post from '../post/Post'
import React, { useState } from 'react'
import './Timeline.css'
import { useEffect } from 'react';
import axios from "axios"
// import {Posts} from "../../test"


export default function Timeline({ username }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get("/posts/timeline/6339454dc8364f8557e44f01")
      // console.log(response);
      setPosts(response.data)
    };
    fetchPosts();
  }, [username]);

  return (
    <div className='timeline'>
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  )
}
