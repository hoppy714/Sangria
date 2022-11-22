import React from 'react'
import './Login.css'

export default function login() {
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
                        <span className="loginForgot">パスワードを忘れた方へ</span>
                        <button className='loginRegisterButton'>アカウント作成</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
