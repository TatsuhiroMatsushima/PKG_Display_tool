import React from 'react'

export default function Lhsd(props) {
    const ifsLhsd = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", "", ""]
    return (
        <div>
            <h1>LhsdType</h1>
            <div className="if Lhsd" >
                <div >
                    <h2 className="blockName">BLOCK1</h2>
                    <div className="block">
                        {ifsLhsd.map(ifs => (
                            <p key={Math.random()} className="chLhsd" style={ifs === props.chNumber ? { background: "red" } : {}} >{ifs}</p>
                        ))}
                    </div>
                </div>
                <div >
                    <h2 className="blockName">BLOCK2</h2>
                    <div className="block">
                        {ifsLhsd.map(ifs => (
                            <p key={Math.random()} className="chLhsd" style={ifs + 16 === props.chNumber ? { background: "red" } : {}} >{ifs}</p>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="blockName">BLOCK3</h2>
                    <div className="block">
                        {ifsLhsd.map(ifs => (
                            <p key={Math.random()} className="chLhsd" style={ifs + 32 === props.chNumber ? { background: "red" } : {}} >{ifs}</p>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="blockName">BLOCK4</h2>
                    <div className="block">
                        {ifsLhsd.map(ifs => (
                            <p key={Math.random()} className="chLhsd" style={ifs + 48 === props.chNumber ? { background: "red" } : {}} >{ifs}</p>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="blockName">BLOCK5</h2>
                    <div className="block">
                        {ifsLhsd.map(ifs => (
                            <p key={Math.random()} className="chLhsd" style={ifs + 64 === props.chNumber ? { background: "red" } : {}} >{ifs}</p>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="blockName">BLOCK6</h2>
                    <div className="block">
                        {ifsLhsd.map(ifs => (
                            <p key={Math.random()} className="chLhsd" style={ifs + 80 === props.chNumber ? { background: "red" } : {}} >{ifs}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}