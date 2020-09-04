import React from 'react'
import { BoadmWidth1,BoadmWidth2,BoadmWidth3 } from './index'

export default function Boadmresult(props) {
   const Result = () => {
       switch (props.pkgName) {
           // XGBERFとか
           case "XGBERF":
           case "TPF64":
           case "SCRM":
           case "OSC":
           case "OCM":
           case "OCME":
           case "SCIF3":
           case "EXBUS":
               // 一枚幅の描画を呼び出す
               return <BoadmWidth1 slot={props.slot}  />

           // TRXAとか
           case "TRXA":
           case "GMXF64":
           case "DWS":
               // 2枚幅の描画を呼び出す
               return <BoadmWidth2 slot={props.slot} />

           // DCFとか
           case "DCF":
               // 三枚幅の描画を呼び出す
               return <BoadmWidth3 slot={props.slot} />

           // PKGが選択されていないときの挙動
           default:
               return <div>PKG未選択</div>
       }
   }
   return (
       <div className="boadm-result">
           <h2>PKG:{props.pkgName}</h2>
           <h2>架タイプ:{props.bay}</h2>
           <h2>UNIT:{props.unit}</h2>
           <h2>SLOT:{props.slot}</h2>
           <Result />
       </div>
   )
}