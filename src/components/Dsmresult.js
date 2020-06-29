import React, { useEffect } from 'react'

export default function Dsmresult(props) {
    const [blockState, setBlockState] = React.useState({
        block1: false, block2: false, block3: false, block4: false, block5: false, block6: false
    })
    // 該当ブロックの状態をtrueに変更する関数
    // ブロックナンバーが2の時、クラス2のじょうたいをtrueに変更する
    // true用のCSSを用意

    const changeblockState = () => {
        switch (props.blockNumber) {
            case 1:
                setBlockState({ ...blockState, block1: true })
            default: break
        }
        setBlockState(true)
    }

    const ifsNormal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    const ifsSig = [1, 2, 5, 6, 9, 10, 13, 14]
    const ifsLhsd = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    // normalの場合で効率よく描こうとした
    const test = [...Array(96)].map((v, i) => i + 1)
    const objects = test.map(i => ({ ch: i, if: i - Math.floor(i / 16.1) * 16, block: Math.floor(i / 16.1) }))


    // useEffect(() => {
    //     document.getElementById("BLOCK1").addEventListener('click', pkgDrawing)

    //     return () => {
    //         document.getElementById("BLOCK1").addEventListener('click', pkgDrawing)
    //     }
    // })

    const pkgDrawing = () => {
        switch (props.pkgName) {
            case "VFCHP":
            case "VT-1":
            case "EQL":
            case "64kIF":
            case "OCU-5":
                console.log("!!!!!!!!!!!!!!!!");
                return (
                    <div className="if Normal" >
                        <h2>normal</h2>
                        {objects.map(object => (
                            <p className={object.ch} style={object.ch === props.chNumber ? { background: "green" } : {}}>{object.if}</p>
                        ))}
                    </div>
                )
            case "VT-2":
            case "VT-3":
            case "SIG":
                return (
                    <div className="if Sig" >
                        <h2>sig</h2>
                        {ifsSig.map(ifs => (
                            <p className={ifs} style={ifs === props.chNumber ? { background: "green" } : {}}>{ifs}</p>
                        ))}
                        {ifsSig.map(ifs => (
                            <p className={ifs + 16} style={ifs + 16 === props.chNumber ? { background: "green" } : {}}>{ifs}</p>
                        ))}
                        {ifsSig.map(ifs => (
                            <p className={ifs + 32} style={ifs + 32 === props.chNumber ? { background: "green" } : {}}>{ifs}</p>
                        ))}
                        {ifsSig.map(ifs => (
                            <p className={ifs + 48} style={ifs + 48 === props.chNumber ? { background: "green" } : {}}>{ifs}</p>
                        ))}
                        {ifsSig.map(ifs => (
                            <p className={ifs + 64} style={ifs + 64 === props.chNumber ? { background: "green" } : {}}>{ifs}</p>
                        ))}
                        {ifsSig.map(ifs => (
                            <p className={ifs + 80} style={ifs + 80 === props.chNumber ? { background: "green" } : {}}>{ifs}</p>
                        ))}
                    </div>
                )
            case 'LHSD':
                return (
                    <div className="if Lhsd" >
                        <h2>lhsd</h2>
                        {ifsLhsd.map(ifs => (
                            <p className={ifs}>{ifs}</p>
                        ))}
                        <h2>lhsd</h2>
                        {ifsLhsd.map(ifs => (
                            <p className={ifs + 16} style={ifs + 16 === props.chNumber ? { background: "green" } : {}}>{ifs}</p>
                        ))}
                        <h2>lhsd</h2>
                        {ifsLhsd.map(ifs => (
                            <p className={ifs + 32} style={ifs + 32 === props.chNumber ? { background: "green" } : {}}>{ifs}</p>
                        ))}
                        <h2>lhsd</h2>
                        {ifsLhsd.map(ifs => (
                            <p className={ifs + 48} style={ifs + 48 === props.chNumber ? { background: "green" } : {}}>{ifs}</p>
                        ))}
                        <h2>lhsd</h2>
                        {ifsLhsd.map(ifs => (
                            <p className={ifs + 64} style={ifs + 64 === props.chNumber ? { background: "green" } : {}}>{ifs}</p>
                        ))}
                        <h2>lhsd</h2>
                        {ifsLhsd.map(ifs => (
                            <p className={ifs + 80} style={ifs + 80 === props.chNumber ? { background: "green" } : {}}>{ifs}</p>
                        ))}
                    </div>
                )
            default:
                console.log("条件外");

                break
        }
    }
    return (
        <div>
            <h1>Dsmresult</h1>
            <p>BLOCK:{props.blockNumber}</p>
            <p>IF:{props.ifNumber}</p>
            {props.pkgName}
            {/* <div className={`BLOCK 1 ${blockState.block1}`} id="BLOCK1">BLOCK1</div>
            <div className={`BLOCK 2 ${blockState.block2}`} id="BLOCK2">BLOCK2</div>
            <div className={`BLOCK 3 ${blockState.block3}`} id="BLOCK3">BLOCK3</div>
            <div className={`BLOCK 4 ${blockState.block4}`} id="BLOCK4">BLOCK4</div>
            <div className={`BLOCK 5 ${blockState.block5}`} id="BLOCK5">BLOCK5</div>
            <div className={`BLOCK 6 ${blockState.block6}`} id="BLOCK6">BLOCK6</div> */}
            {pkgDrawing()}


        </div >
    )
}