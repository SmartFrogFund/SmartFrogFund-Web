(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7601],{93710:function(e,t,n){Promise.resolve().then(n.bind(n,34845))},45879:function(e,t,n){"use strict";function r(e){return["small","middle","large"].includes(e)}function a(e){return!!e&&"number"==typeof e&&!Number.isNaN(e)}n.d(t,{T:function(){return a},n:function(){return r}})},47394:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var r=n(2265),a=n(56800),l=n.n(a),c=n(88474),s=n(45879),i=n(38750),o=n(93561),f=n(73204);let u=["wrap","nowrap","wrap-reverse"],p=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],d=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],g=(e,t)=>{let n=!0===t.wrap?"wrap":t.wrap;return{["".concat(e,"-wrap-").concat(n)]:n&&u.includes(n)}},x=(e,t)=>{let n={};return d.forEach(r=>{n["".concat(e,"-align-").concat(r)]=t.align===r}),n["".concat(e,"-align-stretch")]=!t.align&&!!t.vertical,n},m=(e,t)=>{let n={};return p.forEach(r=>{n["".concat(e,"-justify-").concat(r)]=t.justify===r}),n},y=e=>{let{componentCls:t}=e;return{[t]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},b=e=>{let{componentCls:t}=e;return{[t]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},h=e=>{let{componentCls:t}=e,n={};return u.forEach(e=>{n["".concat(t,"-wrap-").concat(e)]={flexWrap:e}}),n},v=e=>{let{componentCls:t}=e,n={};return d.forEach(e=>{n["".concat(t,"-align-").concat(e)]={alignItems:e}}),n},j=e=>{let{componentCls:t}=e,n={};return p.forEach(e=>{n["".concat(t,"-justify-").concat(e)]={justifyContent:e}}),n};var O=(0,o.I$)("Flex",e=>{let{paddingXS:t,padding:n,paddingLG:r}=e,a=(0,f.TS)(e,{flexGapSM:t,flexGap:n,flexGapLG:r});return[y(a),b(a),h(a),v(a),j(a)]},()=>({}),{resetStyle:!1}),w=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},E=r.forwardRef((e,t)=>{let{prefixCls:n,rootClassName:a,className:o,style:f,flex:u,gap:p,children:d,vertical:y=!1,component:b="div"}=e,h=w(e,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:v,direction:j,getPrefixCls:E}=r.useContext(i.E_),N=E("flex",n),[G,C,_]=O(N),S=null!=y?y:null==v?void 0:v.vertical,Z=l()(o,a,null==v?void 0:v.className,N,C,_,l()(Object.assign(Object.assign(Object.assign({},g(N,e)),x(N,e)),m(N,e))),{["".concat(N,"-rtl")]:"rtl"===j,["".concat(N,"-gap-").concat(p)]:(0,s.n)(p),["".concat(N,"-vertical")]:S}),k=Object.assign(Object.assign({},null==v?void 0:v.style),f);return u&&(k.flex=u),p&&!(0,s.n)(p)&&(k.gap=p),G(r.createElement(b,Object.assign({ref:t,className:Z,style:k},(0,c.Z)(h,["justify","wrap","align"])),d))})},88474:function(e,t,n){"use strict";function r(e,t){var n=Object.assign({},e);return Array.isArray(t)&&t.forEach(function(e){delete n[e]}),n}n.d(t,{Z:function(){return r}})},34845:function(e,t,n){"use strict";n.r(t);var r=n(57437);n(2265);var a=n(47394);t.default=e=>(0,r.jsx)("div",{className:"h-full bg-[#0F030F] flex justify-center items-center text-white font-bold",children:(0,r.jsx)(a.Z,{gap:"small",vertical:!0,children:(0,r.jsx)(a.Z,{gap:"small",children:"Error...."})})})}},function(e){e.O(0,[76,3169,2971,7023,1744],function(){return e(e.s=93710)}),_N_E=e.O()}]);