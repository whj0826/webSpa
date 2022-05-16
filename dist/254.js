"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[254],{1508:(e,n,r)=>{r.d(n,{Z:()=>g});var t=r(7462),i=r(3366),o=r(7294),a=r(6010),s=r(9868),c=r(6523),l=r(9707),m=r(7878),u=r(5893);const p=["className","component"];var d=r(8076);const g=function(e={}){const{defaultTheme:n,defaultClassName:r="MuiBox-root",generateClassName:d,styleFunctionSx:g=c.Z}=e,f=(0,s.ZP)("div")(g);return o.forwardRef((function(e,o){const s=(0,m.Z)(n),c=(0,l.Z)(e),{className:g,component:x="div"}=c,S=(0,i.Z)(c,p);return(0,u.jsx)(f,(0,t.Z)({as:x,ref:o,className:(0,a.Z)(g,d?d(r):r),theme:s},S))}))}({defaultTheme:(0,r(9617).Z)(),defaultClassName:"MuiBox-root",generateClassName:d.Z.generate})},5725:(e,n,r)=>{r.d(n,{ZP:()=>Z});var t=r(3366),i=r(7462),o=r(7294),a=r(6010),s=r(5408),c=r(9707),l=r(7192),m=r(9602),u=r(6122);const p=o.createContext();var d=r(8979);function g(e){return(0,d.Z)("MuiGrid",e)}const f=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],x=(0,r(6087).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...f.map((e=>`grid-xs-${e}`)),...f.map((e=>`grid-sm-${e}`)),...f.map((e=>`grid-md-${e}`)),...f.map((e=>`grid-lg-${e}`)),...f.map((e=>`grid-xl-${e}`))]);var S=r(5893);const h=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function w(e){const n=parseFloat(e);return`${n}${String(e).replace(String(n),"")||"px"}`}function v(e,n,r={}){if(!n||!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[r[`spacing-xs-${String(e)}`]||`spacing-xs-${String(e)}`];const{xs:t,sm:i,md:o,lg:a,xl:s}=e;return[Number(t)>0&&(r[`spacing-xs-${String(t)}`]||`spacing-xs-${String(t)}`),Number(i)>0&&(r[`spacing-sm-${String(i)}`]||`spacing-sm-${String(i)}`),Number(o)>0&&(r[`spacing-md-${String(o)}`]||`spacing-md-${String(o)}`),Number(a)>0&&(r[`spacing-lg-${String(a)}`]||`spacing-lg-${String(a)}`),Number(s)>0&&(r[`spacing-xl-${String(s)}`]||`spacing-xl-${String(s)}`)]}const $=(0,m.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{const{container:r,direction:t,item:i,lg:o,md:a,sm:s,spacing:c,wrap:l,xl:m,xs:u,zeroMinWidth:p}=e.ownerState;return[n.root,r&&n.container,i&&n.item,p&&n.zeroMinWidth,...v(c,r,n),"row"!==t&&n[`direction-xs-${String(t)}`],"wrap"!==l&&n[`wrap-xs-${String(l)}`],!1!==u&&n[`grid-xs-${String(u)}`],!1!==s&&n[`grid-sm-${String(s)}`],!1!==a&&n[`grid-md-${String(a)}`],!1!==o&&n[`grid-lg-${String(o)}`],!1!==m&&n[`grid-xl-${String(m)}`]]}})((({ownerState:e})=>(0,i.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:n}){const r=(0,s.P$)({values:n.direction,breakpoints:e.breakpoints.values});return(0,s.k9)({theme:e},r,(e=>{const n={flexDirection:e};return 0===e.indexOf("column")&&(n[`& > .${x.item}`]={maxWidth:"none"}),n}))}),(function({theme:e,ownerState:n}){const{container:r,rowSpacing:t}=n;let i={};if(r&&0!==t){const n=(0,s.P$)({values:t,breakpoints:e.breakpoints.values});i=(0,s.k9)({theme:e},n,(n=>{const r=e.spacing(n);return"0px"!==r?{marginTop:`-${w(r)}`,[`& > .${x.item}`]:{paddingTop:w(r)}}:{}}))}return i}),(function({theme:e,ownerState:n}){const{container:r,columnSpacing:t}=n;let i={};if(r&&0!==t){const n=(0,s.P$)({values:t,breakpoints:e.breakpoints.values});i=(0,s.k9)({theme:e},n,(n=>{const r=e.spacing(n);return"0px"!==r?{width:`calc(100% + ${w(r)})`,marginLeft:`-${w(r)}`,[`& > .${x.item}`]:{paddingLeft:w(r)}}:{}}))}return i}),(function({theme:e,ownerState:n}){let r;return e.breakpoints.keys.reduce(((t,o)=>{let a={};if(n[o]&&(r=n[o]),!r)return t;if(!0===r)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=(0,s.P$)({values:n.columns,breakpoints:e.breakpoints.values}),l="object"==typeof c?c[o]:c;if(null==l)return t;const m=Math.round(r/l*1e8)/1e6+"%";let u={};if(n.container&&n.item&&0!==n.columnSpacing){const r=e.spacing(n.columnSpacing);if("0px"!==r){const e=`calc(${m} + ${w(r)})`;u={flexBasis:e,maxWidth:e}}}a=(0,i.Z)({flexBasis:m,flexGrow:0,maxWidth:m},u)}return 0===e.breakpoints.values[o]?Object.assign(t,a):t[e.breakpoints.up(o)]=a,t}),{})})),Z=o.forwardRef((function(e,n){const r=(0,u.Z)({props:e,name:"MuiGrid"}),s=(0,c.Z)(r),{className:m,columns:d,columnSpacing:f,component:x="div",container:w=!1,direction:Z="row",item:b=!1,lg:z=!1,md:N=!1,rowSpacing:k,sm:y=!1,spacing:M=0,wrap:P="wrap",xl:W=!1,xs:B=!1,zeroMinWidth:C=!1}=s,R=(0,t.Z)(s,h),j=k||M,G=f||M,I=o.useContext(p),T=w?d||12:I,A=(0,i.Z)({},s,{columns:T,container:w,direction:Z,item:b,lg:z,md:N,sm:y,rowSpacing:j,columnSpacing:G,wrap:P,xl:W,xs:B,zeroMinWidth:C}),F=(e=>{const{classes:n,container:r,direction:t,item:i,lg:o,md:a,sm:s,spacing:c,wrap:m,xl:u,xs:p,zeroMinWidth:d}=e,f={root:["root",r&&"container",i&&"item",d&&"zeroMinWidth",...v(c,r),"row"!==t&&`direction-xs-${String(t)}`,"wrap"!==m&&`wrap-xs-${String(m)}`,!1!==p&&`grid-xs-${String(p)}`,!1!==s&&`grid-sm-${String(s)}`,!1!==a&&`grid-md-${String(a)}`,!1!==o&&`grid-lg-${String(o)}`,!1!==u&&`grid-xl-${String(u)}`]};return(0,l.Z)(f,g,n)})(A);return(0,S.jsx)(p.Provider,{value:T,children:(0,S.jsx)($,(0,i.Z)({ownerState:A,className:(0,a.Z)(F.root,m),as:x,ref:n},R))})}))},5949:(e,n,r)=>{r.d(n,{Z:()=>h});var t=r(7462),i=r(7294),o=r(3366),a=r(6010),s=r(7192),c=r(8216),l=r(6122),m=r(9602),u=r(8979);function p(e){return(0,u.Z)("MuiSvgIcon",e)}(0,r(6087).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var d=r(5893);const g=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],f=(0,m.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,"inherit"!==r.color&&n[`color${(0,c.Z)(r.color)}`],n[`fontSize${(0,c.Z)(r.fontSize)}`]]}})((({theme:e,ownerState:n})=>{var r,t,i,o,a,s,c,l,m,u,p,d,g,f,x,S,h;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(r=e.transitions)||null==(t=r.create)?void 0:t.call(r,"fill",{duration:null==(i=e.transitions)||null==(o=i.duration)?void 0:o.shorter}),fontSize:{inherit:"inherit",small:(null==(a=e.typography)||null==(s=a.pxToRem)?void 0:s.call(a,20))||"1.25rem",medium:(null==(c=e.typography)||null==(l=c.pxToRem)?void 0:l.call(c,24))||"1.5rem",large:(null==(m=e.typography)||null==(u=m.pxToRem)?void 0:u.call(m,35))||"2.1875"}[n.fontSize],color:null!=(p=null==(d=e.palette)||null==(g=d[n.color])?void 0:g.main)?p:{action:null==(f=e.palette)||null==(x=f.action)?void 0:x.active,disabled:null==(S=e.palette)||null==(h=S.action)?void 0:h.disabled,inherit:void 0}[n.color]}})),x=i.forwardRef((function(e,n){const r=(0,l.Z)({props:e,name:"MuiSvgIcon"}),{children:i,className:m,color:u="inherit",component:x="svg",fontSize:S="medium",htmlColor:h,inheritViewBox:w=!1,titleAccess:v,viewBox:$="0 0 24 24"}=r,Z=(0,o.Z)(r,g),b=(0,t.Z)({},r,{color:u,component:x,fontSize:S,instanceFontSize:e.fontSize,inheritViewBox:w,viewBox:$}),z={};w||(z.viewBox=$);const N=(e=>{const{color:n,fontSize:r,classes:t}=e,i={root:["root","inherit"!==n&&`color${(0,c.Z)(n)}`,`fontSize${(0,c.Z)(r)}`]};return(0,s.Z)(i,p,t)})(b);return(0,d.jsxs)(f,(0,t.Z)({as:x,className:(0,a.Z)(N.root,m),ownerState:b,focusable:"false",color:h,"aria-hidden":!v||void 0,role:v?"img":void 0,ref:n},z,Z,{children:[i,v?(0,d.jsx)("title",{children:v}):null]}))}));x.muiName="SvgIcon";const S=x;function h(e,n){const r=(r,i)=>(0,d.jsx)(S,(0,t.Z)({"data-testid":`${n}Icon`,ref:i},r,{children:e}));return r.muiName=S.muiName,i.memo(i.forwardRef(r))}},9707:(e,n,r)=>{r.d(n,{Z:()=>c});var t=r(7462),i=r(3366),o=r(9766),a=r(4178);const s=["sx"];function c(e){const{sx:n}=e,r=(0,i.Z)(e,s),{systemProps:c,otherProps:l}=(e=>{const n={systemProps:{},otherProps:{}};return Object.keys(e).forEach((r=>{a.Gc[r]?n.systemProps[r]=e[r]:n.otherProps[r]=e[r]})),n})(r);let m;return m=Array.isArray(n)?[c,...n]:"function"==typeof n?(...e)=>{const r=n(...e);return(0,o.P)(r)?(0,t.Z)({},c,r):c}:(0,t.Z)({},c,n),(0,t.Z)({},l,{sx:m})}}}]);