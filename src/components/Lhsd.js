import React from 'react'

export default function Lhsd(props) {
    const ifsLhsd = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <div>
            <h1>LhsdType</h1>
            <h2 >LhsdType</h2>
            <div className="if Lhsd" >
                <h2>lhsd</h2>
                {ifsLhsd.map(ifs => (
                    <p key={Math.random()} className={ifs} style={ifs  === props.chNumber ? { background: "green" } : {}} > {ifs}</p>
                ))}
                {ifsLhsd.map(ifs => (
                    <p key={Math.random()} className={ifs + 16} style={ifs + 16 === props.chNumber ? { background: "green" } : {}}>{ifs}</p>
                ))}
                {ifsLhsd.map(ifs => (
                    <p key={Math.random()} className={ifs + 32} style={ifs + 32 === props.chNumber ? { background: "green" } : {}}>{ifs}</p>
                ))}
                {ifsLhsd.map(ifs => (
                    <p key={Math.random()} className={ifs + 48} style={ifs + 48 === props.chNumber ? { background: "green" } : {}}>{ifs}</p>
                ))}
                {ifsLhsd.map(ifs => (
                    <p key={Math.random()} className={ifs + 64} style={ifs + 64 === props.chNumber ? { background: "green" } : {}}>{ifs}</p>
                ))}
                {ifsLhsd.map(ifs => (
                    <p key={Math.random()} className={ifs + 80} style={ifs + 80 === props.chNumber ? { background: "green" } : {}}>{ifs}</p>
                ))}
            </div>
        </div >
    )
}