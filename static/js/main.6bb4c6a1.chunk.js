(this.webpackJsonpdsm=this.webpackJsonpdsm||[]).push([[0],{23:function(e,a,t){e.exports=t(44)},28:function(e,a,t){},29:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(12),r=t.n(c),m=(t(28),t(7)),u=t(1);t(29);function o(){return l.a.createElement("div",null,l.a.createElement("h1",null,"BOADM"),l.a.createElement("p",null,"\u6e96\u5099\u4e2d"))}var s=t(6),E=t(16),i=t(13),b=t.n(i);function d(){var e=l.a.useState({pkgName:"",number:"",blockNumber:"",ifNumber:""}),a=Object(E.a)(e,2),t=a[0],n=a[1],c=l.a.useState(!1),r=Object(E.a)(c,2),m=r[0],u=r[1];function o(){u(!1)}return l.a.createElement("div",null,l.a.createElement("h1",null,"DSM"),l.a.createElement("h2",null,"PKG\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"),l.a.createElement("p",null,[{pkgName:"VFCHP",done:!1,number:0},{pkgName:"VT-1",done:!1,number:1},{pkgName:"EQL",done:!1,number:2},{pkgName:"64kIF",done:!1,number:3},{pkgName:"OCU-5",done:!1,number:4},{pkgName:"VT-2",done:!1,number:5},{pkgName:"VT-3",done:!1,number:6},{pkgName:"SIG",done:!1,number:7},{pkgName:"LHSD",done:!1,number:8}].map((function(e){return l.a.createElement("label",{className:"panel-block",key:e.pkgName},l.a.createElement("input",{type:"button",value:e.pkgName,id:"pkg".concat(e.number),onClick:function(){var a;a="".concat(e.pkgName),n(Object(s.a)(Object(s.a)({},t),{},{pkgName:a}))}}))}))),l.a.createElement("h3",null,"PKG\uff1a",t.pkgName),l.a.createElement("h2",null,"CH\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"),l.a.createElement(f,{handleInputNumberChange:function(e){n(Object(s.a)(Object(s.a)({},t),{},{number:Number(t.number+e)}))},numberInit:function(){n(Object(s.a)(Object(s.a)({},t),{},{number:""}))}}),l.a.createElement("h3",null,"CH\uff1a",t.number),l.a.createElement("input",{type:"button",value:"\u30e2\u30fc\u30c0\u30eb\u8868\u793a \u691c\u7d22",className:"mr-2",id:"calculation",onClick:function(){!function(){if(t.pkgName)if(t.number>96||!t.number)alert("\u6b63\u3057\u3044CH\u756a\u53f7\u3092\u5165\u308c\u3066\u304f\u3060\u3055\u3044");else{var e=Math.floor(t.number/16.1),a=t.number-16*e;n(Object(s.a)(Object(s.a)({},t),{},{blockNumber:e+1,ifNumber:a})),u(!0)}else alert("PKG\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044")}()}}),l.a.createElement(b.a,{isOpen:m,onRequestClose:function(){o()},contentLabel:"Example Modal"},l.a.createElement("input",{type:"button",value:"\u9589\u3058\u308b",className:"mr-2",onClick:function(){o()}}),l.a.createElement(N,{blockNumber:t.blockNumber,ifNumber:t.ifNumber,pkgName:t.pkgName,number:t.number})))}function N(e){var a=function(){switch(e.pkgName){case"VFCHP":case"VT-1":case"EQL":case"64kIF":case"OCU-5":return l.a.createElement(g,{chNumber:e.number});case"SIG":case"VT-2":case"VT-3":return l.a.createElement(y,{chNumber:e.number});case"LHSD":return l.a.createElement(C,{chNumber:e.number});default:return l.a.createElement("div",null,"PKG\u672a\u9078\u629e")}};return l.a.createElement("div",{className:"dsmResult"},l.a.createElement("h2",null,"PKG:",e.pkgName),l.a.createElement("h2",null,"BLOCK:",e.blockNumber),l.a.createElement("h2",null,"IF:",e.ifNumber),l.a.createElement(a,null))}function h(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Pages"),l.a.createElement("p",null,l.a.createElement(m.b,{to:"/"},"Top\u30da\u30fc\u30b8\u306b\u623b\u308b")),l.a.createElement("p",null,l.a.createElement(m.b,{to:"/dsm"},"DSM CH-P\u7279\u5b9a\u30c4\u30fc\u30eb")),l.a.createElement("p",null,l.a.createElement(m.b,{to:"/boadm"},"BOADM \u5834\u6240\u7279\u5b9a\u30c4\u30fc\u30eb")),l.a.createElement("p",null,l.a.createElement(m.b,{to:"/pts"},"PTS \u5834\u6240\u7279\u5b9a\u30c4\u30fc\u30eb")),l.a.createElement("p",null,l.a.createElement(m.b,{to:"/ptm"},"PTM \u5834\u6240\u7279\u5b9a\u30c4\u30fc\u30eb")))}function p(){return l.a.createElement("div",null,l.a.createElement("h1",null,"PTM"),l.a.createElement("p",null,"\u6e96\u5099\u4e2d"))}function k(){return l.a.createElement("div",null,l.a.createElement("h1",null,"PTS"),l.a.createElement("p",null,"\u6e96\u5099\u4e2d"))}function v(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Top"),l.a.createElement("p",null,"\u5404\u7a2e\u88c5\u7f6e\u306ePKG\u642d\u8f09\u4f4d\u7f6e\u3092\u8868\u793a\u3059\u308b\u30a2\u30d7\u30ea"),l.a.createElement("p",null,"IE\u306f\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093"))}function f(e){return l.a.createElement("div",null,l.a.createElement("h1",null,"Button"),l.a.createElement("p",null,[0,1,2,3,4,5,6,7,8,9].map((function(a){return l.a.createElement("label",{className:"input-number",key:a},l.a.createElement("input",{type:"button",value:a,onClick:function(){e.handleInputNumberChange("".concat(a))}}))}))),l.a.createElement("input",{type:"button",value:"DELETE",onClick:function(){e.numberInit()}}))}function g(e){var a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];return l.a.createElement("div",null,l.a.createElement("h1",null,"NormalType"),l.a.createElement("div",{className:"if Normal"},l.a.createElement("div",null,l.a.createElement("h2",{className:"blockName"},"BLOCK1"),l.a.createElement("div",{className:"block"},a.map((function(a){return l.a.createElement("p",{key:Math.random(),className:"chNormal",style:a===e.chNumber?{background:"red"}:{}},a)})))),l.a.createElement("div",null,l.a.createElement("h2",{className:"blockName"},"BLOCK2"),l.a.createElement("div",{className:"block"},a.map((function(a){return l.a.createElement("p",{key:Math.random(),className:"chNormal",style:a+16===e.chNumber?{background:"red"}:{}},a)})))),l.a.createElement("div",null,l.a.createElement("h2",{className:"blockName"},"BLOCK3"),l.a.createElement("div",{className:"block"},a.map((function(a){return l.a.createElement("p",{key:Math.random(),className:"chNormal",style:a+32===e.chNumber?{background:"red"}:{}},a)})))),l.a.createElement("div",null,l.a.createElement("h2",{className:"blockName"},"BLOCK4"),l.a.createElement("div",{className:"block"},a.map((function(a){return l.a.createElement("p",{key:Math.random(),className:"chNormal",style:a+48===e.chNumber?{background:"red"}:{}},a)})))),l.a.createElement("div",null,l.a.createElement("h2",{className:"blockName"},"BLOCK5"),l.a.createElement("div",{className:"block"},a.map((function(a){return l.a.createElement("p",{key:Math.random(),className:"chNormal",style:a+64===e.chNumber?{background:"red"}:{}},a)})))),l.a.createElement("div",null,l.a.createElement("h2",{className:"blockName"},"BLOCK6"),l.a.createElement("div",{className:"block"},a.map((function(a){return l.a.createElement("p",{key:Math.random(),className:"chNormal",style:a+80===e.chNumber?{background:"red"}:{}},a)}))))))}function y(e){var a=[1,2,5,6,9,10,13,14];return l.a.createElement("div",null,l.a.createElement("h1",null,"SigType"),l.a.createElement("div",{className:"if Sig"},l.a.createElement("div",null,l.a.createElement("h2",{className:"blockName"},"BLOCK1"),l.a.createElement("div",{className:"block"},a.map((function(a){return l.a.createElement("p",{key:Math.random(),className:"chSig",style:a===e.chNumber?{background:"red"}:{}},a)})))),l.a.createElement("div",null,l.a.createElement("h2",{className:"blockName"},"BLOCK2"),l.a.createElement("div",{className:"block"},a.map((function(a){return l.a.createElement("p",{key:Math.random(),className:"chSig",style:a+16===e.chNumber?{background:"red"}:{}},a)})))),l.a.createElement("div",null,l.a.createElement("h2",{className:"blockName"},"BLOCK3"),l.a.createElement("div",{className:"block"},a.map((function(a){return l.a.createElement("p",{key:Math.random(),className:"chSig",style:a+32===e.chNumber?{background:"red"}:{}},a)})))),l.a.createElement("div",null,l.a.createElement("h2",{className:"blockName"},"BLOCK4"),l.a.createElement("div",{className:"block"},a.map((function(a){return l.a.createElement("p",{key:Math.random(),className:"chSig",style:a+48===e.chNumber?{background:"red"}:{}},a)})))),l.a.createElement("div",null,l.a.createElement("h2",{className:"blockName"},"BLOCK5"),l.a.createElement("div",{className:"block"},a.map((function(a){return l.a.createElement("p",{key:Math.random(),className:"chSig",style:a+64===e.chNumber?{background:"red"}:{}},a)})))),l.a.createElement("div",null,l.a.createElement("h2",{className:"blockName"},"BLOCK6"),l.a.createElement("div",{className:"block"},a.map((function(a){return l.a.createElement("p",{key:Math.random(),className:"chSig",style:a+80===e.chNumber?{background:"red"}:{}},a)}))))))}function C(e){var a=[1,2,3,4,5,6,7,8,9];return l.a.createElement("div",null,l.a.createElement("h1",null,"LhsdType"),l.a.createElement("div",{className:"if Lhsd"},l.a.createElement("div",null,l.a.createElement("h2",{className:"blockName"},"BLOCK1"),l.a.createElement("div",{className:"block"},a.map((function(a){return l.a.createElement("p",{key:Math.random(),className:"chLhsd",style:a===e.chNumber?{background:"red"}:{}},a)})))),l.a.createElement("div",null,l.a.createElement("h2",{className:"blockName"},"BLOCK2"),l.a.createElement("div",{className:"block"},a.map((function(a){return l.a.createElement("p",{key:Math.random(),className:"chLhsd",style:a+16===e.chNumber?{background:"red"}:{}},a)})))),l.a.createElement("div",null,l.a.createElement("h2",{className:"blockName"},"BLOCK3"),l.a.createElement("div",{className:"block"},a.map((function(a){return l.a.createElement("p",{key:Math.random(),className:"chLhsd",style:a+32===e.chNumber?{background:"red"}:{}},a)})))),l.a.createElement("div",null,l.a.createElement("h2",{className:"blockName"},"BLOCK4"),l.a.createElement("div",{className:"block"},a.map((function(a){return l.a.createElement("p",{key:Math.random(),className:"chLhsd",style:a+48===e.chNumber?{background:"red"}:{}},a)})))),l.a.createElement("div",null,l.a.createElement("h2",{className:"blockName"},"BLOCK5"),l.a.createElement("div",{className:"block"},a.map((function(a){return l.a.createElement("p",{key:Math.random(),className:"chLhsd",style:a+64===e.chNumber?{background:"red"}:{}},a)})))),l.a.createElement("div",null,l.a.createElement("h2",{className:"blockName"},"BLOCK6"),l.a.createElement("div",{className:"block"},a.map((function(a){return l.a.createElement("p",{key:Math.random(),className:"chLhsd",style:a+80===e.chNumber?{background:"red"}:{}},a)}))))))}function O(){return l.a.createElement(m.a,{basename:"/React_Router"},l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement("hr",null),l.a.createElement(u.a,{exact:!0,path:"/",component:v}),l.a.createElement(u.a,{exact:!0,path:"/dsm",component:d}),l.a.createElement(u.a,{exact:!0,path:"/boadm",component:o}),l.a.createElement(u.a,{exact:!0,path:"/pts",component:k}),l.a.createElement(u.a,{exact:!0,path:"/ptm",component:p}),l.a.createElement("hr",null)))}b.a.setAppElement("#root");Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.6bb4c6a1.chunk.js.map