import React, { useRef } from 'react'
import './Register.css'
import { loginCall } from '../../actionCalls';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConf = useRef();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="pachiSNS">Panasonic</h3>
                    <span className="registerDesc">Ideas for Life</span>
                </div>
                <div className="registerRight">
                    <form className="registerBox" onSubmit={(e) => handleSubmit(e)}>
                        <p className="registerMsg">新規登録はこちら</p>
                        <input type="text" className="registerInput" placeholder='ユーザー名' required ref={username} />
                        <input type="email" className="registerInput" placeholder='メールアドレス' required ref={email} />
                        <input type="password" className="registerInput" placeholder='パスワード' required minLength="5" ref={password} />
                        <input type="password" className="registerInput" placeholder='確認用パスワード' required minLength="5" ref={passwordConf} />
                        <button className='registerButton' type='submit'>サインアップ</button>
                        <button className='registerRegisterButton' type='submit'>ログイン</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
