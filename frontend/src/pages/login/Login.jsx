import React, { useRef } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { loginCall } from '../../actionCalls'
import { useContext } from 'react';
import { AuthContext } from '../../state/AuthContext';


export default function Login() {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        loginCall(
            {
                email: email.current.value,
                password: password.current.value,
            },
            dispatch
        );
    };
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="pachiSNS">Panasonic</h3>
                    <span className="loginDesc">Ideas for Life</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
                        <p className="loginMsg">ログインはこちら</p>
                        <input type="email" className="loginInput" placeholder='Email' required ref={email} />
                        <input type="password" className="loginInput" placeholder='password' required minLength="5" ref={password} />
                        <button className='loginButton'>ログイン</button>
                        <Link to="/register" style={{ textDecoration: "none", color: "#5e5e5e" }}>
                            <span className="loginForgot">パスワードを忘れた方へ</span>
                        </Link>
                        <button className='loginRegisterButton'>アカウント作成</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
