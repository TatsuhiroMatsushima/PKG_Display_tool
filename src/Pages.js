import React from 'react'
import { Link } from 'react-router-dom'

export default function Pages() {



    return (
        <div>
            <h1>Pages</h1>
            <p><Link to="/">Topページに戻る</Link></p>
            <p><Link to="/dsm">DSM CH-P特定ツール</Link></p>
        </div>
    )
}