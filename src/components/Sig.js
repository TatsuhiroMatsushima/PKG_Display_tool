import React from 'react'

export default function Sig(props) {
    const ifsSig = [1, 2, 5, 6, 9, 10, 13, 14]
    return (
        <div>
            <h1>SigType</h1>
            <div className="if Sig" >
                <div >
                    <h2 className="blockName">BLOCK1</h2>
                    <div className="block">
                        {ifsSig.map(ifs => (
                            <p key={Math.random()} className="chSig" style={ifs === props.chNumber ? { background: "red" } : {}} >{ifs}</p>
                        ))}
                    </div>
                </div>
                <div >
                    <h2 className="blockName">BLOCK2</h2>
                    <div className="block">
                        {ifsSig.map(ifs => (
                            <p key={Math.random()} className="chSig" style={ifs + 16 === props.chNumber ? { background: "red" } : {}} >{ifs}</p>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="blockName">BLOCK3</h2>
                    <div className="block">
                        {ifsSig.map(ifs => (
                            <p key={Math.random()} className="chSig" style={ifs + 32 === props.chNumber ? { background: "red" } : {}} >{ifs}</p>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="blockName">BLOCK4</h2>
                    <div className="block">
                        {ifsSig.map(ifs => (
                            <p key={Math.random()} className="chSig" style={ifs + 48 === props.chNumber ? { background: "red" } : {}} >{ifs}</p>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="blockName">BLOCK5</h2>
                    <div className="block">
                        {ifsSig.map(ifs => (
                            <p key={Math.random()} className="chSig" style={ifs + 64 === props.chNumber ? { background: "red" } : {}} >{ifs}</p>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="blockName">BLOCK6</h2>
                    <div className="block">
                        {ifsSig.map(ifs => (
                            <p key={Math.random()} className="chSig" style={ifs + 80 === props.chNumber ? { background: "red" } : {}} >{ifs}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}