"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[956],{4956:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var a=r(7294),n=r(3366),o=r(7462),l=r(6010),c=r(7192),s=r(9602),i=r(6122),m=r(5949),u=r(5893);const d=(0,m.Z)((0,u.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var f=r(8979);function v(e){return(0,f.Z)("MuiAvatar",e)}(0,r(6087).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const p=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=(0,s.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((({theme:e,ownerState:t})=>(0,o.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:e.shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&{color:e.palette.background.default,backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))),h=(0,s.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Z=(0,s.ZP)(d,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"}),P=a.forwardRef((function(e,t){const r=(0,i.Z)({props:e,name:"MuiAvatar"}),{alt:s,children:m,className:d,component:f="div",imgProps:P,sizes:b,src:E,srcSet:w,variant:k="circular"}=r,x=(0,n.Z)(r,p);let S=null;const y=function({crossOrigin:e,referrerPolicy:t,src:r,srcSet:n}){const[o,l]=a.useState(!1);return a.useEffect((()=>{if(!r&&!n)return;l(!1);let a=!0;const o=new Image;return o.onload=()=>{a&&l("loaded")},o.onerror=()=>{a&&l("error")},o.crossOrigin=e,o.referrerPolicy=t,o.src=r,n&&(o.srcset=n),()=>{a=!1}}),[e,t,r,n]),o}((0,o.Z)({},P,{src:E,srcSet:w})),R=E||w,A=R&&"error"!==y,D=(0,o.Z)({},r,{colorDefault:!A,component:f,variant:k}),M=(e=>{const{classes:t,variant:r,colorDefault:a}=e,n={root:["root",r,a&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,c.Z)(n,v,t)})(D);return S=A?(0,u.jsx)(h,(0,o.Z)({alt:s,src:E,srcSet:w,sizes:b,ownerState:D,className:M.img},P)):null!=m?m:R&&s?s[0]:(0,u.jsx)(Z,{className:M.fallback}),(0,u.jsx)(g,(0,o.Z)({as:f,ownerState:D,className:(0,l.Z)(M.root,d),ref:t},x,{children:S}))}));var b=r(1508),E=r(5725);const w=function(){return a.createElement(a.Fragment,null,a.createElement(b.Z,{sx:{width:"60%"}},a.createElement(E.ZP,{container:!0},a.createElement(E.ZP,{item:!0,xs:2},a.createElement(P,{src:""})),a.createElement(E.ZP,{item:!0,xs:2},a.createElement("div",null,"名字")),a.createElement(E.ZP,{item:!0,xs:2},"时间")),a.createElement(E.ZP,{container:!0,item:!0},a.createElement("div",null,"123")),a.createElement(E.ZP,{container:!0,spacing:1},a.createElement(E.ZP,{item:!0},"点赞"),a.createElement(E.ZP,{item:!0},"查看回复(6)"),a.createElement(E.ZP,{item:!0},"回复"),a.createElement(E.ZP,{item:!0},"举报"))))}}}]);