import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="pachiSNS">Panasonic</h3>
                    <span className="loginDesc">Ideas for Life</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <p className="loginMsg">ログインはこちら</p>
                        <input type="text" className="loginInput" placeholder='Email' />
                        <input type="password" className="loginInput" placeholder='password' />
                        <button className='loginButton'>ログイン</button>
                        <Link to="/register" style={{ textDecoration: "none", color: "#5e5e5e" }}>
                            <span className="loginForgot">パスワードを忘れた方へ</span>
                        </Link>
                        <button className='loginRegisterButton'>アカウント作成</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
