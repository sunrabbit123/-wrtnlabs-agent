import{c as J,j as s,g as B,a as F,r as l,u as N,L as x,b as st,d as _,s as R,e as I,f as G,B as ot,h as nt,m as tt,i as H,k as at,l as Q,n as q,T as w,t as X,o as rt,R as z,p as it}from"./client-BVv4NBtY.js";import{D as Z}from"./Divider-DaLcPLlq.js";const ct=J(s.jsx("path",{d:"M11 9h2V6h3V4h-3V1h-2v3H8v2h3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2m-9.83-3.25.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25"}),"AddShoppingCart"),lt=J(s.jsx("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm2 16H8v-2h8zm0-4H8v-2h8zm-3-5V3.5L18.5 9z"}),"Description"),dt=J(s.jsx("path",{d:"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9 8H3V9h9zm0-4H3V5h9z"}),"FeaturedPlayList");function pt(t){return B("MuiListItem",t)}F("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"]);function ut(t){return B("MuiListItemButton",t)}const A=F("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),mt=(t,e)=>{const{ownerState:o}=t;return[e.root,o.dense&&e.dense,o.alignItems==="flex-start"&&e.alignItemsFlexStart,o.divider&&e.divider,!o.disableGutters&&e.gutters]},yt=t=>{const{alignItems:e,classes:o,dense:n,disabled:a,disableGutters:i,divider:r,selected:c}=t,g=G({root:["root",n&&"dense",!i&&"gutters",r&&"divider",a&&"disabled",e==="flex-start"&&"alignItemsFlexStart",c&&"selected"]},ut,o);return{...o,...g}},gt=R(ot,{shouldForwardProp:t=>nt(t)||t==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:mt})(tt(({theme:t})=>({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${A.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:H(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${A.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:H(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${A.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:H(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:H(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${A.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${A.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},variants:[{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:e})=>!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>e.dense,style:{paddingTop:4,paddingBottom:4}}]}))),vt=l.forwardRef(function(e,o){const n=N({props:e,name:"MuiListItemButton"}),{alignItems:a="center",autoFocus:i=!1,component:r="div",children:c,dense:d=!1,disableGutters:g=!1,divider:S=!1,focusVisibleClassName:P,selected:T=!1,className:C,...u}=n,f=l.useContext(x),m=l.useMemo(()=>({dense:d||f.dense||!1,alignItems:a,disableGutters:g}),[a,f.dense,d,g]),p=l.useRef(null);st(()=>{i&&p.current&&p.current.focus()},[i]);const v={...n,alignItems:a,dense:m.dense,disableGutters:g,divider:S,selected:T},h=yt(v),b=_(p,o);return s.jsx(x.Provider,{value:m,children:s.jsx(gt,{ref:b,href:u.href||u.to,component:(u.href||u.to)&&r==="div"?"button":r,focusVisibleClassName:I(h.focusVisible,P),ownerState:v,className:I(h.root,C),...u,classes:h,children:c})})});function ht(t){return B("MuiListItemSecondaryAction",t)}F("MuiListItemSecondaryAction",["root","disableGutters"]);const xt=t=>{const{disableGutters:e,classes:o}=t;return G({root:["root",e&&"disableGutters"]},ht,o)},ft=R("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.disableGutters&&e.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:({ownerState:t})=>t.disableGutters,style:{right:0}}]}),et=l.forwardRef(function(e,o){const n=N({props:e,name:"MuiListItemSecondaryAction"}),{className:a,...i}=n,r=l.useContext(x),c={...n,disableGutters:r.disableGutters},d=xt(c);return s.jsx(ft,{className:I(d.root,a),ownerState:c,ref:o,...i})});et.muiName="ListItemSecondaryAction";const bt=(t,e)=>{const{ownerState:o}=t;return[e.root,o.dense&&e.dense,o.alignItems==="flex-start"&&e.alignItemsFlexStart,o.divider&&e.divider,!o.disableGutters&&e.gutters,!o.disablePadding&&e.padding,o.hasSecondaryAction&&e.secondaryAction]},It=t=>{const{alignItems:e,classes:o,dense:n,disableGutters:a,disablePadding:i,divider:r,hasSecondaryAction:c}=t;return G({root:["root",n&&"dense",!a&&"gutters",!i&&"padding",r&&"divider",e==="flex-start"&&"alignItemsFlexStart",c&&"secondaryAction"],container:["container"]},pt,o)},St=R("div",{name:"MuiListItem",slot:"Root",overridesResolver:bt})(tt(({theme:t})=>({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:({ownerState:e})=>!e.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:e})=>!e.disablePadding&&e.dense,style:{paddingTop:4,paddingBottom:4}},{props:({ownerState:e})=>!e.disablePadding&&!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>!e.disablePadding&&!!e.secondaryAction,style:{paddingRight:48}},{props:({ownerState:e})=>!!e.secondaryAction,style:{[`& > .${A.root}`]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:e})=>e.button,style:{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:({ownerState:e})=>e.hasSecondaryAction,style:{paddingRight:48}}]}))),Ct=R("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),Lt=l.forwardRef(function(e,o){const n=N({props:e,name:"MuiListItem"}),{alignItems:a="center",children:i,className:r,component:c,components:d={},componentsProps:g={},ContainerComponent:S="li",ContainerProps:{className:P,...T}={},dense:C=!1,disableGutters:u=!1,disablePadding:f=!1,divider:m=!1,secondaryAction:p,slotProps:v={},slots:h={},...b}=n,U=l.useContext(x),k=l.useMemo(()=>({dense:C||U.dense||!1,alignItems:a,disableGutters:u}),[a,U.dense,C,u]),E=l.useRef(null),y=l.Children.toArray(i),O=y.length&&at(y[y.length-1],["ListItemSecondaryAction"]),L={...n,alignItems:a,dense:k.dense,disableGutters:u,disablePadding:f,divider:m,hasSecondaryAction:O},Y=It(L),K=_(E,o),V=h.root||d.Root||St,M=v.root||g.root||{},$={className:I(Y.root,M.className,r),...b};let j=c||"li";return O?(j=!$.component&&!c?"div":j,S==="li"&&(j==="li"?j="div":$.component==="li"&&($.component="div")),s.jsx(x.Provider,{value:k,children:s.jsxs(Ct,{as:S,className:I(Y.container,P),ref:K,ownerState:L,...T,children:[s.jsx(V,{...M,...!Q(V)&&{as:j,ownerState:{...L,...M.ownerState}},...$,children:y}),y.pop()]})})):s.jsx(x.Provider,{value:k,children:s.jsxs(V,{...M,as:j,ref:K,...!Q(V)&&{ownerState:{...L,...M.ownerState}},...$,children:[y,p&&s.jsx(et,{children:p})]})})});function jt(t){return B("MuiListItemAvatar",t)}F("MuiListItemAvatar",["root","alignItemsFlexStart"]);const At=t=>{const{alignItems:e,classes:o}=t;return G({root:["root",e==="flex-start"&&"alignItemsFlexStart"]},jt,o)},wt=R("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.alignItems==="flex-start"&&e.alignItemsFlexStart]}})({minWidth:56,flexShrink:0,variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}),Rt=l.forwardRef(function(e,o){const n=N({props:e,name:"MuiListItemAvatar"}),{className:a,...i}=n,r=l.useContext(x),c={...n,alignItems:r.alignItems},d=At(c);return s.jsx(wt,{className:I(d.root,a),ownerState:c,ref:o,...i})});function Pt(t){return B("MuiListItemText",t)}const D=F("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),Tt=t=>{const{classes:e,inset:o,primary:n,secondary:a,dense:i}=t;return G({root:["root",o&&"inset",i&&"dense",n&&a&&"multiline"],primary:["primary"],secondary:["secondary"]},Pt,e)},kt=R("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[{[`& .${D.primary}`]:e.primary},{[`& .${D.secondary}`]:e.secondary},e.root,o.inset&&e.inset,o.primary&&o.secondary&&e.multiline,o.dense&&e.dense]}})({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4,[`.${X.root}:where(& .${D.primary})`]:{display:"block"},[`.${X.root}:where(& .${D.secondary})`]:{display:"block"},variants:[{props:({ownerState:t})=>t.primary&&t.secondary,style:{marginTop:6,marginBottom:6}},{props:({ownerState:t})=>t.inset,style:{paddingLeft:56}}]}),Mt=l.forwardRef(function(e,o){const n=N({props:e,name:"MuiListItemText"}),{children:a,className:i,disableTypography:r=!1,inset:c=!1,primary:d,primaryTypographyProps:g,secondary:S,secondaryTypographyProps:P,slots:T={},slotProps:C={},...u}=n,{dense:f}=l.useContext(x);let m=d??a,p=S;const v={...n,disableTypography:r,inset:c,primary:!!m,secondary:!!p,dense:f},h=Tt(v),b={slots:T,slotProps:{primary:g,secondary:P,...C}},[U,k]=q("root",{className:I(h.root,i),elementType:kt,externalForwardedProps:{...b,...u},ownerState:v,ref:o}),[E,y]=q("primary",{className:h.primary,elementType:w,externalForwardedProps:b,ownerState:v}),[O,L]=q("secondary",{className:h.secondary,elementType:w,externalForwardedProps:b,ownerState:v});return m!=null&&m.type!==w&&!r&&(m=s.jsx(E,{variant:f?"body2":"body1",component:y!=null&&y.variant?void 0:"span",...y,children:m})),p!=null&&p.type!==w&&!r&&(p=s.jsx(O,{variant:"body2",color:"textSecondary",...L,children:p})),s.jsxs(U,{...k,children:[m,p]})}),W=t=>s.jsx(Lt,{alignItems:"flex-start",children:s.jsxs(vt,{href:t.href,children:[s.jsx(Rt,{children:t.icon}),s.jsx(Mt,{primary:t.title,secondary:s.jsxs(z.Fragment,{children:[s.jsx(w,{component:"span",variant:"body2",sx:{color:"text.primary",display:"inline"},children:t.summary}),t.description]})})]})}),$t=()=>s.jsxs(z.Fragment,{children:[s.jsx(w,{variant:"h4",children:"Agentica Playground"}),s.jsx("hr",{}),s.jsxs(it,{sx:{width:"100%",maxWidth:720,bgcolor:"background.paper"},children:[s.jsx(W,{href:"./uploader/",title:"Swagger Uploader",summary:"Test your backend server's AI chatbot",icon:s.jsx(dt,{}),description:s.jsx("p",{children:"Upload your Swagger document file to the playground website, and start conversation with your backend server. Validate your backend server's Swagger documentation quality before developing your AI chatbot application."})}),s.jsx(Z,{variant:"inset",component:"li"}),s.jsx(W,{href:"./shopping/",title:"Shopping AI Chatbot",summary:"AI chatbot by Swagger document",icon:s.jsx(ct,{}),description:s.jsxs(z.Fragment,{children:[s.jsx("p",{children:"Shopping AI chatbot which can search products, and take orders just by conversation texts."}),s.jsxs("p",{children:["This example project has been developed to prove a key concept of ",s.jsx("code",{children:"nestia/agent"})," that every backend servers providing Swagger documents can be conversed with the AI chatbot. You can search products, and take orders just by conversation texts."]}),s.jsx("p",{children:"If you've developed a backend server, then you can chat with the backend server just by delivering the Swagger document. If your documentation quality is enough, you can experience the new AI era. No more GUI development required. Just develop only backend server and chat with it."})]})}),s.jsx(Z,{variant:"inset",component:"li"}),s.jsx(W,{href:"./bbs/",title:"BBS AI Chatbot",summary:"AI chatbot by TypeScript Class",icon:s.jsx(lt,{}),description:s.jsxs(z.Fragment,{children:[s.jsx("p",{children:"BBS (Bullet-in Board System) AI chatbot posting articles just by conversation texts."}),s.jsxs("p",{children:["This example project has been developed to demonstrate"," ",s.jsx("code",{children:"typia.llm.application<App, Model>()"})," function which can generate LLM (Large Language Model) function calling application schema from a TypeScript class type."]}),s.jsx("p",{children:"If you've developed a TypeScript facade class, then you can chat with the class just by taking the class type. If you've done enough documentations on the class methods and DTO (Data Transfer Object) types, you can experience the new AI era. No more GUI development required. Just develop only TypeScript class containing the business logics and chat with it."})]})})]})]});rt(window.document.getElementById("root")).render(s.jsx($t,{}));
