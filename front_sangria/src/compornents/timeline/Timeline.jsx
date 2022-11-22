import Share from '../share/Share'
import Post from '../post/Post'
import React from 'react'
import './Timeline.css'
import { Posts } from "../../test"


export default function Timeline() {
  return (
    <div className='timeline'>
      <div className="timelineWrapper">
        <Share />
        {Posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  )
}