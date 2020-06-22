import React from 'react'

export default function Dsmresult(props) {
    return (
        <div>
            <h1>Dsmresult</h1>
            <p>BLOCK:{props.blockNumber}</p>
            <p>IF:{props.ifNumber}</p>
        </div>
    )
}