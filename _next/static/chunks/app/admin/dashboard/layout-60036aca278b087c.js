(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5549],{28811:function(e,t,r){Promise.resolve().then(r.bind(r,68304))},94759:function(e,t,r){"use strict";r.d(t,{Cn:function(){return s},u6:function(){return i}});var o=r(2265),n=r(79086),a=r(94086);let i=1e3,c={Modal:100,Drawer:100,Popover:100,Popconfirm:100,Tooltip:100,Tour:100},l={SelectLike:50,Dropdown:50,DatePicker:50,Menu:50,ImagePreview:1};function s(e,t){let[,r]=(0,n.ZP)(),s=o.useContext(a.Z);if(void 0!==t)return[t,t];let d=null!=s?s:0;return e in c?(d+=(s?0:r.zIndexPopupBase)+c[e],d=Math.min(d,r.zIndexPopupBase+i)):d+=l[e],[void 0===s?t:d,d]}},64035:function(e,t,r){"use strict";r.d(t,{G8:function(){return a},ln:function(){return i}});var o=r(2265);function n(){}r(67638);let a=o.createContext({}),i=()=>{let e=()=>{};return e.deprecated=n,e}},94086:function(e,t,r){"use strict";let o=r(2265).createContext(void 0);t.Z=o},16463:function(e,t,r){"use strict";var o=r(71169);r.o(o,"usePathname")&&r.d(t,{usePathname:function(){return o.usePathname}}),r.o(o,"useRouter")&&r.d(t,{useRouter:function(){return o.useRouter}}),r.o(o,"useSearchParams")&&r.d(t,{useSearchParams:function(){return o.useSearchParams}}),r.o(o,"useServerInsertedHTML")&&r.d(t,{useServerInsertedHTML:function(){return o.useServerInsertedHTML}})},68304:function(e,t,r){"use strict";r.d(t,{default:function(){return ee}});var o=r(57437),n=r(2265),a=r(22988),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M924.8 385.6a446.7 446.7 0 00-96-142.4 446.7 446.7 0 00-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 00-142.4 96 446.7 446.7 0 00-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM482 232c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8h-44c-4.4 0-8-3.6-8-8v-80zM270 582c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-44c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v44zm90.7-204.5l-31.1 31.1a8.03 8.03 0 01-11.3 0L261.7 352a8.03 8.03 0 010-11.3l31.1-31.1c3.1-3.1 8.2-3.1 11.3 0l56.6 56.6c3.1 3.1 3.1 8.2 0 11.3zm291.1 83.6l-84.5 84.5c5 18.7.2 39.4-14.5 54.1a55.95 55.95 0 01-79.2 0 55.95 55.95 0 010-79.2 55.87 55.87 0 0154.1-14.5l84.5-84.5c3.1-3.1 8.2-3.1 11.3 0l28.3 28.3c3.1 3.1 3.1 8.1 0 11.3zm43-52.4l-31.1-31.1a8.03 8.03 0 010-11.3l56.6-56.6c3.1-3.1 8.2-3.1 11.3 0l31.1 31.1c3.1 3.1 3.1 8.2 0 11.3l-56.6 56.6a8.03 8.03 0 01-11.3 0zM846 582c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-44c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v44z"}}]},name:"dashboard",theme:"filled"},c=r(25636),l=n.forwardRef(function(e,t){return n.createElement(c.Z,(0,a.Z)({},e,{ref:t,icon:i}))}),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},d=n.forwardRef(function(e,t){return n.createElement(c.Z,(0,a.Z)({},e,{ref:t,icon:s}))}),u=r(57111),g=r(56800),f=r.n(g),h=r(88474),m=r(38750),b=r(35774),p=r(68753),x=r(32932),S=r(90076),v=r(93561),y=e=>{let{componentCls:t,bodyBg:r,lightSiderBg:o,lightTriggerBg:n,lightTriggerColor:a}=e;return{["".concat(t,"-sider-light")]:{background:o,["".concat(t,"-sider-trigger")]:{color:a,background:n},["".concat(t,"-sider-zero-width-trigger")]:{color:a,background:n,border:"1px solid ".concat(r),borderInlineStart:0}}}};let C=e=>{let{antCls:t,componentCls:r,colorText:o,triggerColor:n,footerBg:a,triggerBg:i,headerHeight:c,headerPadding:l,headerColor:s,footerPadding:d,triggerHeight:u,zeroTriggerHeight:g,zeroTriggerWidth:f,motionDurationMid:h,motionDurationSlow:m,fontSize:b,borderRadius:p,bodyBg:x,headerBg:v,siderBg:C}=e;return{[r]:Object.assign(Object.assign({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:x,"&, *":{boxSizing:"border-box"},["&".concat(r,"-has-sider")]:{flexDirection:"row",["> ".concat(r,", > ").concat(r,"-content")]:{width:0}},["".concat(r,"-header, &").concat(r,"-footer")]:{flex:"0 0 auto"},["".concat(r,"-sider")]:{position:"relative",minWidth:0,background:C,transition:"all ".concat(h,", background 0s"),"&-children":{height:"100%",marginTop:-.1,paddingTop:.1,["".concat(t,"-menu").concat(t,"-menu-inline-collapsed")]:{width:"auto"}},"&-has-trigger":{paddingBottom:u},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:u,color:n,lineHeight:(0,S.bf)(u),textAlign:"center",background:i,cursor:"pointer",transition:"all ".concat(h)},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:c,insetInlineEnd:e.calc(f).mul(-1).equal(),zIndex:1,width:f,height:g,color:n,fontSize:e.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:C,borderStartStartRadius:0,borderStartEndRadius:p,borderEndEndRadius:p,borderEndStartRadius:0,cursor:"pointer",transition:"background ".concat(m," ease"),"&::after":{position:"absolute",inset:0,background:"transparent",transition:"all ".concat(m),content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:e.calc(f).mul(-1).equal(),borderStartStartRadius:p,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:p}}}}},y(e)),{"&-rtl":{direction:"rtl"}}),["".concat(r,"-header")]:{height:c,padding:l,color:s,lineHeight:(0,S.bf)(c),background:v,["".concat(t,"-menu")]:{lineHeight:"inherit"}},["".concat(r,"-footer")]:{padding:d,color:o,fontSize:b,background:a},["".concat(r,"-content")]:{flex:"auto",color:o,minHeight:0}}};var k=(0,v.I$)("Layout",e=>[C(e)],e=>{let{colorBgLayout:t,controlHeight:r,controlHeightLG:o,colorText:n,controlHeightSM:a,marginXXS:i,colorTextLightSolid:c,colorBgContainer:l}=e,s=1.25*o;return{colorBgHeader:"#001529",colorBgBody:t,colorBgTrigger:"#002140",bodyBg:t,headerBg:"#001529",headerHeight:2*r,headerPadding:"0 ".concat(s,"px"),headerColor:n,footerPadding:"".concat(a,"px ").concat(s,"px"),footerBg:t,siderBg:"#001529",triggerHeight:o+2*i,triggerBg:"#002140",triggerColor:c,zeroTriggerWidth:o,zeroTriggerHeight:o,lightSiderBg:l,lightTriggerBg:l,lightTriggerColor:n}},{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]}),j=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)0>t.indexOf(o[n])&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};function O(e){let{suffixCls:t,tagName:r,displayName:o}=e;return e=>n.forwardRef((o,a)=>n.createElement(e,Object.assign({ref:a,suffixCls:t,tagName:r},o)))}let B=n.forwardRef((e,t)=>{let{prefixCls:r,suffixCls:o,className:a,tagName:i}=e,c=j(e,["prefixCls","suffixCls","className","tagName"]),{getPrefixCls:l}=n.useContext(m.E_),s=l("layout",r),[d,u,g]=k(s),h=o?"".concat(s,"-").concat(o):s;return d(n.createElement(i,Object.assign({className:f()(r||h,a,u,g),ref:t},c)))}),z=n.forwardRef((e,t)=>{let{direction:r}=n.useContext(m.E_),[o,a]=n.useState([]),{prefixCls:i,className:c,rootClassName:l,children:s,hasSider:d,tagName:g,style:S}=e,v=j(e,["prefixCls","className","rootClassName","children","hasSider","tagName","style"]),y=(0,h.Z)(v,["suffixCls"]),{getPrefixCls:C,layout:O}=n.useContext(m.E_),B=C("layout",i),z="boolean"==typeof d?d:!!o.length||(0,p.Z)(s).some(e=>e.type===x.Z),[N,w,E]=k(B),P=f()(B,{["".concat(B,"-has-sider")]:z,["".concat(B,"-rtl")]:"rtl"===r},null==O?void 0:O.className,c,l,w,E),T=n.useMemo(()=>({siderHook:{addSider:e=>{a(t=>[].concat((0,u.Z)(t),[e]))},removeSider:e=>{a(t=>t.filter(t=>t!==e))}}}),[]);return N(n.createElement(b.V.Provider,{value:T},n.createElement(g,Object.assign({ref:t,className:P,style:Object.assign(Object.assign({},null==O?void 0:O.style),S)},y),s)))}),N=O({tagName:"div",displayName:"Layout"})(z),w=O({suffixCls:"header",tagName:"header",displayName:"Header"})(B),E=O({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(B),P=O({suffixCls:"content",tagName:"main",displayName:"Content"})(B);N.Header=w,N.Footer=E,N.Content=P,N.Sider=x.Z,N._InternalSiderContext=x.D;var T=r(19892),Z=r(69101),R=r(65607),H=r(79086),M=r(4388),I=r(29915),_=r(4835),L=r(30772),D=r(86468),A=r(70142);let F=(e,t)=>new A.C(e).setAlpha(t).toRgbString(),X=(e,t)=>new A.C(e).lighten(t).toHexString(),G=e=>{let t=(0,L.R_)(e,{theme:"dark"});return{1:t[0],2:t[1],3:t[2],4:t[3],5:t[6],6:t[5],7:t[4],8:t[6],9:t[5],10:t[4]}},W=(e,t)=>{let r=e||"#000",o=t||"#fff";return{colorBgBase:r,colorTextBase:o,colorText:F(o,.85),colorTextSecondary:F(o,.65),colorTextTertiary:F(o,.45),colorTextQuaternary:F(o,.25),colorFill:F(o,.18),colorFillSecondary:F(o,.12),colorFillTertiary:F(o,.08),colorFillQuaternary:F(o,.04),colorBgElevated:X(r,12),colorBgContainer:X(r,8),colorBgLayout:X(r,0),colorBgSpotlight:X(r,26),colorBgBlur:F(o,.04),colorBorder:X(r,26),colorBorderSecondary:X(r,19)}};var q={defaultConfig:M.u_,defaultSeed:M.u_.token,useToken:function(){let[e,t,r]=(0,H.ZP)();return{theme:e,token:t,hashId:r}},defaultAlgorithm:T.Z,darkAlgorithm:(e,t)=>{let r=Object.keys(Z.M).map(t=>{let r=(0,L.R_)(e[t],{theme:"dark"});return Array(10).fill(1).reduce((e,o,n)=>(e["".concat(t,"-").concat(n+1)]=r[n],e["".concat(t).concat(n+1)]=r[n],e),{})}).reduce((e,t)=>e=Object.assign(Object.assign({},e),t),{});return Object.assign(Object.assign(Object.assign({},null!=t?t:(0,T.Z)(e)),r),(0,D.Z)(e,{generateColorPalettes:G,generateNeutralColorPalettes:W}))},compactAlgorithm:(e,t)=>{let r=null!=t?t:(0,T.Z)(e),o=r.fontSizeSM,n=r.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},r),function(e){let{sizeUnit:t,sizeStep:r}=e,o=r-2;return{sizeXXL:t*(o+10),sizeXL:t*(o+6),sizeLG:t*(o+2),sizeMD:t*(o+2),sizeMS:t*(o+1),size:t*o,sizeSM:t*o,sizeXS:t*(o-1),sizeXXS:t*(o-1)}}(null!=t?t:e)),(0,_.Z)(o)),{controlHeight:n}),(0,I.Z)(Object.assign(Object.assign({},r),{controlHeight:n})))},getDesignToken:e=>{let t=(null==e?void 0:e.algorithm)?(0,S.jG)(e.algorithm):(0,S.jG)(T.Z),r=Object.assign(Object.assign({},Z.Z),null==e?void 0:e.token);return(0,S.t2)(r,{override:null==e?void 0:e.token},t,R.Z)}},K=r(44979),Q=r(16463);let{Header:U,Content:V,Footer:$,Sider:J}=N,Y=[{key:"/admin/dashboard",icon:(0,o.jsx)(l,{}),label:"Kanban"},{key:"/admin/dashboard/users",icon:(0,o.jsx)(d,{}),label:"UserInfo"}];var ee=function(e){let{children:t}=e,{token:{colorBgContainer:r,borderRadiusLG:n}}=q.useToken(),a=(0,Q.useRouter)();return(0,o.jsxs)(N,{className:"h-full",children:[(0,o.jsxs)(J,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:e=>{console.log(e)},onCollapse:(e,t)=>{console.log(e,t)},children:[(0,o.jsx)("div",{className:"demo-logo-vertical"}),(0,o.jsx)(K.Z,{theme:"dark",mode:"inline",defaultSelectedKeys:["4"],items:Y,onClick:e=>{let{key:t}=e;a.push(t)}})]}),(0,o.jsxs)(N,{children:[(0,o.jsx)(U,{style:{padding:0,background:r}}),(0,o.jsx)(V,{style:{margin:"24px 16px 0"},className:"h-full",children:(0,o.jsx)("div",{className:"h-[99%]",style:{padding:24,minHeight:360,background:r,borderRadius:n},children:t})})]})]})}}},function(e){e.O(0,[76,3169,2247,9052,9551,4979,2971,7023,1744],function(){return e(e.s=28811)}),_N_E=e.O()}]);