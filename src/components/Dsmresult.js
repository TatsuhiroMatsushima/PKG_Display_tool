import React from 'react'
import { Normal, Sig, Lhsd } from './index'

export default function Dsmresult(props) {
    const Result = () => {
        switch (props.pkgName) {
            case "VFCHP":
            case "VT-1":
            case "EQL":
            case "64kIF":
            case "OCU-5":
                return <Normal chNumber={props.number} />
            case "SIG":
            case "VT-2":
            case "VT-3":
                return <Sig chNumber={props.number} />
            case "LHSD":
                return <Lhsd chNumber={props.number} />
            default:
                return <div>PKG未選択</div>
        }
    }
    return (
        <div>
            <h1>検索結果</h1>
            <p>BLOCK:{props.blockNumber}</p>
            <p>IF:{props.ifNumber}</p>
            {props.pkgName}
            <Result />
        </div>
    )
}