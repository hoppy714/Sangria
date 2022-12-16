import React from 'react'

export default function Online({ user }) {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img src={PUBLIC_FOLDER + "/person/4.jpg"} alt="" className='friendImg' />
                <span className="rightbarOnline"></span>
            </div>
            <span className="username">{user.username}</span>
        </li>
    )
}
