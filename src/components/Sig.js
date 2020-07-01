import React from 'react'

export default function Sig(props) {
    const ifsSig = [1, 2, 5, 6, 9, 10, 13, 14]
    return (
        <div>
            <h1>SigType</h1>
            <div className="if Sig" >
                <h2>SigType</h2>
                {ifsSig.map(ifs => (
                    <p key={Math.random()} className={ifs} style={ifs === props.chNumber ? { background: "green" } : {}}>{ifs}</p>
                ))}
                {ifsSig.map(ifs => (
                    <p key={Math.random()} className={ifs + 16} style={ifs + 16 === props.chNumber ? { background: "green" } : {}}>{ifs}</p>
                ))}
                {ifsSig.map(ifs => (
                    <p key={Math.random()} className={ifs + 32} style={ifs + 32 === props.chNumber ? { background: "green" } : {}}>{ifs}</p>
                ))}
                {ifsSig.map(ifs => (
                    <p key={Math.random()} className={ifs + 48} style={ifs + 48 === props.chNumber ? { background: "green" } : {}}>{ifs}</p>
                ))}
                {ifsSig.map(ifs => (
                    <p key={Math.random()} className={ifs + 64} style={ifs + 64 === props.chNumber ? { background: "green" } : {}}>{ifs}</p>
                ))}
                {ifsSig.map(ifs => (
                    <p key={Math.random()} className={ifs + 80} style={ifs + 80 === props.chNumber ? { background: "green" } : {}}>{ifs}</p>
                ))}
            </div>
        </div>
    )
}