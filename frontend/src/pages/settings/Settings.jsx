import React from 'react'
import Topbar from '../../compornents/Topbar/Topbar';
import Sidebar from '../../compornents/sidebar/Sidebar';
// import './settings.css'
export default function Settings() {
    return (
        <>
            <Topbar />
            <div className="setting">
                <Sidebar />
                <div className="settingWrapper">
                    <ul className="settingList">
                        <li className="settingListItem"></li>
                        <details>
                            <summary><strong>アカウント管理</strong></summary>
                            {/*ここから先を折りたたむ*/}
                            <ul className="settingList">
                                <li className="settingListClick">
                                    <div className="settingListClickItem">アカウント情報</div>
                                </li>
                                <li className="settingListClick">
                                    <div className="settingListClickItem">パスワードを変更する</div>
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
                                    <div className="settingListClickItem">セキュリティ</div>
                                </li>
                                <li className="settingListClick">
                                    <div className="settingListClickItem">アプリとセッション</div>
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
                                    <div className="settingListClickItem">ツイート</div>
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
                                    <div className="settingListClickItem">通知を受け取る</div>
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
                                    <div className="settingListClickItem">アクセシビリティ</div>
                                </li>
                                <li className="settingListClick">
                                    <div className="settingListClickItem">表示</div>
                                </li>
                            </ul>
                            {/*ここまで先を折りたたむ*/}
                        </details>
                    </ul>
                </div>
            </div>
        </>
    )
}