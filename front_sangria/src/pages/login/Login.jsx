import React from 'react'
import './Login.css'

export default function test() {
    return (
        <div class="form-wrapper">
            <h1>ログイン</h1>
            <form>
                <div class="form-item">
                    <label for="メールアドレス"></label>
                    <input type="email" name="email" required="required" placeholder="メールアドレス"></input>
                </div>
                <div class="form-item">
                    <label for="password"></label>
                    <input type="password" name="password" required="required" placeholder="パスワード"></input>
                </div>
                <div class="button-panel">
                    <input type="submit" class="button" title="" value="ログイン"></input>
                </div>
            </form>
            <div class="form-footer">
                <p><a href="#">アカウント作成</a></p>
                <p><a href="#">パスワードを忘れた方へ</a></p>
            </div>
        </div>    
    )
}