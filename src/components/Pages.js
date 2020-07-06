import React from 'react'
import { Link } from 'react-router-dom'

export default function Pages() {



    return (
        <div>
            <h1>Pages</h1>
            <p><Link to="/">Top</Link></p>
            <p><Link to="/dsm">DSM CH-P特定ツール</Link></p>
            <p><Link to="/boadm">BOADM 場所特定ツール</Link></p>
            <p><Link to="/pts">PTS 場所特定ツール</Link></p>
            <p><Link to="/ptm">PTM 場所特定ツール</Link></p>
        </div>
    )
}