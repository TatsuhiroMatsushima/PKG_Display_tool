import React from 'react'

export default function Normal(props) {
    const test = [...Array(96)].map((v, i) => i + 1)
    const objects = test.map(i => ({ ch: i, if: i - Math.floor(i / 16.1) * 16, block: Math.floor(i / 16.1) }))

    return (
        <div>
            <h1>NormalType</h1>
            <div>
                <h2 >normalType</h2>
                {objects.map(object => (
                    <p key={Math.random()} className={object.ch} style={object.ch === props.chNumber ? { background: "green" } : {}} >{object.if}</p>
                ))}
            </div>
        </div>
    )
}