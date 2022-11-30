import React from 'react'
import Topbar from '../../compornents/Topbar/Topbar';
import Sidebar from '../../compornents/sidebar/Sidebar';
import Rightbar from '../../compornents/rightbar/Rightbar';
import './Settings.css'
export default function Settings() {
    return (
        <>
            <Topbar />
            <div className="setting">
                <Sidebar />
                <div className="settingWrapper">
                
                <h1>設定</h1>
                    <ul className="settingList">
                        <li className="settingListItem"></li>
                        <details>
                            <summary><strong>アカウント管理</strong></summary>
                            {/*ここから先を折りたたむ*/}
                            <ul className="settingList">
                                <li className="settingListClick">
                                    <div className="settingListClickItem"> &ensp;&ensp;アカウント情報</div>
                                </li>
                                <li className="settingListClick">
                                    <div className="settingListClickItem"> &ensp;&ensp;パスワードを変更する</div>
                                </li>
                            </ul>
                            {/*ここまで先を折りたたむ*/}

                        </details>
                        <li className="settingListItem"></li>
                        <details>
                            <summary><strong>セキュリティとアカウントアクセス</strong></summary>
                            {/*ここから先を折りたたむ*/}
                            <ul className="settingList" >
                                <li className="settingListClick">
                                    <div className="settingListClickItem"> &ensp;&ensp;セキュリティ</div>
                                </li>
                                <li className="settingListClick">
                                    <div className="settingListClickItem"> &ensp;&ensp;アプリとセッション</div>
                                </li>
                            </ul>
                            {/*ここまで先を折りたたむ*/}
                        </details>
                        <li className="settingListItem"></li>
                        <details>
                            <summary><strong>プライバシーと安全</strong></summary>
                            {/*ここから先を折りたたむ*/}
                            <ul className="settingList">
                                <li className="settingListClick">
                                    <div className="settingListClickItem"> &ensp;&ensp;ツイート</div>
                                </li>
                            </ul>
                            {/*ここまで先を折りたたむ*/}
                        </details>
                        <li className="settingListItem"></li>
                        <details>
                            <summary><strong>通知</strong></summary>
                            {/*ここから先を折りたたむ*/}
                            <ul className="settingList" >
                                <li className="settingListClick">
                                    <div className="settingListClickItem"> &ensp;&ensp;通知を受け取る</div>
                                </li>
                            </ul>
                            {/*ここまで先を折りたたむ*/}
                        </details>
                        <li className="settingListItem"></li>
                        <details>
                            <summary><strong>アクセシビリティ、表示</strong></summary>
                            {/*ここから先を折りたたむ*/}
                            <ul className="settingList" >
                                <li className="settingListClick">
                                    <div className="settingListClickItem"> &ensp;&ensp;アクセシビリティ</div>
                                </li>
                                <li className="settingListClick">
                                    <div className="settingListClickItem"> &ensp;&ensp;表示</div>
                                </li>
                            </ul>
                            {/*ここまで先を折りたたむ*/}
                        </details>
                    </ul>
                    
                </div>
                <Rightbar />
            </div>
        </>
    )
}