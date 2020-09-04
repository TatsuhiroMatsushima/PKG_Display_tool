import React from 'react'

export default function BoadmWidth1(props) {
   const boadmslot = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

   return (
       <div>
           <h1>Width1</h1>
           <div className="boadm-unit boadm-width1">
               <div className="boadm-slot-frame">
                   <div className="boadm-fan-frame">
                       <div className="boadm-fan">FAN(1)</div>
                       <div className="boadm-fan">FAN(2)</div>
                       <div className="boadm-fan">FAN(3)</div>
                   </div>
                   {/* <h2>frame</h2> */}
                   <div className="boadm-slot-name-frame">
                       {boadmslot.map(slots => (
                           <div key={Math.random()} className="boadm-slot-name"  >{slots}</div>
                       ))}
                   </div>
                   <div className="boadm-slot">
                       {boadmslot.map(slots => (
                           <div key={Math.random()} className="boadm-slot-pkg" id={slots} style={slots === props.slot ? { background: "red" } : {}} ></div>
                       ))}
                   </div>
               </div>

           </div>
       </div>
   )
}