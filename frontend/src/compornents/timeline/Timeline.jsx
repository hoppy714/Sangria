import Share from '../share/Share'
import Post from '../post/Post'
import React, { useEffect, useState } from 'react'
import './Timeline.css'
// import {Posts} from "../../test"
import axios from "axios";


export default function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = axios.get("/posts/timeline/6339454dc8364f8557e44f01");
      setPosts(response.data)
    };
    fetchPosts();
  }, []);

  return (
    <div className='timeline'>
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  )
}
