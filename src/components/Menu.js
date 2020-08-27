import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div>
            <h1>MainMenu</h1>
            {/* <h2>ページ更新をするとエラーになります!!!</h2> */}
            <div>
                <p>各種装置のPKG搭載位置を表示するアプリ</p>
                <p>先行版としてDSMのPKG表示機能を実装</p>
                <p　className="memo">（BOADMの機能を実装中）</p>
            </div>
            {/* <p><Link to="/">Top</Link></p> */}
            <p><Link to="/dsm">DSM CH-P特定ツール</Link></p>
            <p><Link to="/boadm">BOADM 場所特定ツール（準備中）</Link></p>
            <p><Link to="/pts">PTS 場所特定ツール（準備中）</Link></p>
            <p><Link to="/ptm">PTM 場所特定ツール（準備中）</Link></p>
        </div>
    )
}