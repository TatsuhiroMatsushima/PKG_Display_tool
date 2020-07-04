import React from 'react'

export default function Normal(props) {
    const ifsNormal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

    return (
        <div>
            <h1>NormalType</h1>
            <div className="if Normal">
                <div >
                    <h2 className="blockName">BLOCK1</h2>
                    <div className="block">
                        {ifsNormal.map(ifs => (
                            <p key={Math.random()} className="chNormal" style={ifs === props.chNumber ? { background: "red" } : {}} >{ifs}</p>
                        ))}
                    </div>
                </div>
                <div >
                    <h2 className="blockName">BLOCK2</h2>
                    <div className="block">
                        {ifsNormal.map(ifs => (
                            <p key={Math.random()} className="chNormal" style={ifs + 16 === props.chNumber ? { background: "red" } : {}} >{ifs}</p>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="blockName">BLOCK3</h2>
                    <div className="block">
                        {ifsNormal.map(ifs => (
                            <p key={Math.random()} className="chNormal" style={ifs + 32 === props.chNumber ? { background: "red" } : {}} >{ifs}</p>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="blockName">BLOCK4</h2>
                    <div className="block">
                        {ifsNormal.map(ifs => (
                            <p key={Math.random()} className="chNormal" style={ifs + 48 === props.chNumber ? { background: "red" } : {}} >{ifs}</p>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="blockName">BLOCK5</h2>
                    <div className="block">
                        {ifsNormal.map(ifs => (
                            <p key={Math.random()} className="chNormal" style={ifs + 64 === props.chNumber ? { background: "red" } : {}} >{ifs}</p>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="blockName">BLOCK6</h2>
                    <div className="block">
                        {ifsNormal.map(ifs => (
                            <p key={Math.random()} className="chNormal" style={ifs + 80 === props.chNumber ? { background: "red" } : {}} >{ifs}</p>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}