(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1568],{54322:function(e,t,r){"use strict";var n=r(2265),a=r(90076),i=r(16463);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}t.default=function(e){var t,r=e.children,o=(function(e){if(Array.isArray(e))return e}(t=(0,n.useState)(function(){return(0,a.Df)()}))||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i,s,o=[],l=!0,c=!1;try{for(i=(r=r.call(e)).next;!(l=(n=i.call(r)).done)&&(o.push(n.value),1!==o.length);l=!0);}catch(e){c=!0,a=e}finally{try{if(!l&&null!=r.return&&(s=r.return(),Object(s)!==s))return}finally{if(c)throw a}}return o}}(t,1)||function(e,t){if(e){if("string"==typeof e)return s(e,1);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,1)}}(t,1)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],l=(0,n.useRef)(!1);return(0,i.useServerInsertedHTML)(function(){var e=(0,a.EN)(o,{plain:!0});return l.current?null:(l.current=!0,n.createElement("style",{id:"antd-cssinjs","data-rc-order":"prepend","data-rc-priority":"-1000",dangerouslySetInnerHTML:{__html:e}}))}),n.createElement(a.V9,{cache:o},r)}},16463:function(e,t,r){"use strict";var n=r(71169);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}}),r.o(n,"useServerInsertedHTML")&&r.d(t,{useServerInsertedHTML:function(){return n.useServerInsertedHTML}})},58488:function(){},20488:function(e,t,r){"use strict";r.d(t,{$:function(){return o}});var n=r(75217),a="#1A1B1F",i={blue:{accentColor:"#3898FF",accentColorForeground:"#FFF"},green:{accentColor:"#4BD166",accentColorForeground:a},orange:{accentColor:"#FF983D",accentColorForeground:a},pink:{accentColor:"#FF7AB8",accentColorForeground:a},purple:{accentColor:"#7A70FF",accentColorForeground:"#FFF"},red:{accentColor:"#FF6257",accentColorForeground:"#FFF"}},s=i.blue,o=function(){let{accentColor:e=s.accentColor,accentColorForeground:t=s.accentColorForeground,...r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...(0,n.w)(r),colors:{accentColor:e,accentColorForeground:t,actionButtonBorder:"rgba(255, 255, 255, 0.04)",actionButtonBorderMobile:"rgba(255, 255, 255, 0.08)",actionButtonSecondaryBackground:"rgba(255, 255, 255, 0.08)",closeButton:"rgba(224, 232, 255, 0.6)",closeButtonBackground:"rgba(255, 255, 255, 0.08)",connectButtonBackground:a,connectButtonBackgroundError:"#FF494A",connectButtonInnerBackground:"linear-gradient(0deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.15))",connectButtonText:"#FFF",connectButtonTextError:"#FFF",connectionIndicator:"#30E000",downloadBottomCardBackground:"linear-gradient(126deg, rgba(0, 0, 0, 0) 9.49%, rgba(120, 120, 120, 0.2) 71.04%), #1A1B1F",downloadTopCardBackground:"linear-gradient(126deg, rgba(120, 120, 120, 0.2) 9.49%, rgba(0, 0, 0, 0) 71.04%), #1A1B1F",error:"#FF494A",generalBorder:"rgba(255, 255, 255, 0.08)",generalBorderDim:"rgba(255, 255, 255, 0.04)",menuItemBackground:"rgba(224, 232, 255, 0.1)",modalBackdrop:"rgba(0, 0, 0, 0.5)",modalBackground:"#1A1B1F",modalBorder:"rgba(255, 255, 255, 0.08)",modalText:"#FFF",modalTextDim:"rgba(224, 232, 255, 0.3)",modalTextSecondary:"rgba(255, 255, 255, 0.6)",profileAction:"rgba(224, 232, 255, 0.1)",profileActionHover:"rgba(224, 232, 255, 0.2)",profileForeground:"rgba(224, 232, 255, 0.05)",selectedOptionBorder:"rgba(224, 232, 255, 0.1)",standby:"#FFD641"},shadows:{connectButton:"0px 4px 12px rgba(0, 0, 0, 0.1)",dialog:"0px 8px 32px rgba(0, 0, 0, 0.32)",profileDetailsAction:"0px 2px 6px rgba(37, 41, 46, 0.04)",selectedOption:"0px 2px 6px rgba(0, 0, 0, 0.24)",selectedWallet:"0px 2px 6px rgba(0, 0, 0, 0.24)",walletLogo:"0px 2px 16px rgba(0, 0, 0, 0.16)"}}};o.accentColors=i},30073:function(e,t,r){"use strict";r.d(t,{d:function(){return o}});var n=r(86417),a=r(78289),i=new Map,s=e=>{let{projectId:t,walletConnectParameters:r,rkDetailsShowQrModal:n}=e,s={...r||{},projectId:t,showQrModal:!1};n&&(s={...s,showQrModal:!0});let o=JSON.stringify(s),l=i.get(o);if(l)return l;let c=(0,a.a)(s);return i.set(o,c),c};function o(e){let{projectId:t,walletConnectParameters:r}=e;if(!t||""===t)throw Error("No projectId found. Every dApp must now provide a WalletConnect Cloud projectId to enable WalletConnect v2 https://www.rainbowkit.com/docs/installation#configure");return"YOUR_PROJECT_ID"===t&&(t="21fef48091f12692cad574a6f7753643"),e=>(function(e){let{projectId:t,walletDetails:r,walletConnectParameters:a}=e;return(0,n.K)(e=>({...s({projectId:t,walletConnectParameters:a,rkDetailsShowQrModal:r.rkDetails.showQrModal})(e),...r}))})({projectId:t,walletDetails:e,walletConnectParameters:r})}},9393:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(92839),a=r(30073),i=e=>{let{projectId:t,walletConnectParameters:i}=e;return{id:"argent",name:"Argent",iconUrl:async()=>(await r.e(8031).then(r.bind(r,98031))).default,iconBackground:"#fff",downloadUrls:{android:"https://play.google.com/store/apps/details?id=im.argent.contractwalletclient",ios:"https://apps.apple.com/us/app/argent/id1358741926",mobile:"https://argent.xyz/download-argent",qrCode:"https://argent.link/app"},mobile:{getUri:e=>(0,n.Dt)()?e:"argent://app/wc?uri=".concat(encodeURIComponent(e))},qrCode:{getUri:e=>e,instructions:{learnMoreUrl:"https://argent.xyz/learn/what-is-a-crypto-wallet/",steps:[{description:"wallet_connectors.argent.qr_code.step1.description",step:"install",title:"wallet_connectors.argent.qr_code.step1.title"},{description:"wallet_connectors.argent.qr_code.step2.description",step:"create",title:"wallet_connectors.argent.qr_code.step2.title"},{description:"wallet_connectors.argent.qr_code.step3.description",step:"scan",title:"wallet_connectors.argent.qr_code.step3.title"}]}},createConnector:(0,a.d)({projectId:t,walletConnectParameters:i})}}},40934:function(e,t,r){"use strict";r.d(t,{p:function(){return d}});var n=r(92839),a=r(30073),i=r(86417),s=r(40859);function o(e){let t="undefined"!=typeof window?window:void 0;if(void 0===t||void 0===t.ethereum)return;let r=t.ethereum.providers;return r?r.find(t=>t[e]):t.ethereum[e]?t.ethereum:void 0}function l(e){let t=(e,r)=>{let[n,...a]=r.split("."),i=e[n];if(i)return 0===a.length?i:t(i,a.join("."))};if("undefined"!=typeof window)return t(window,e)}function c(e){let{flag:t,namespace:r}=e;return!!r&&void 0!==l(r)||!!t&&void 0!==o(t)}function u(e){var t;let{flag:r,namespace:n,target:a}=e;return t=a||function(e){var t;let{flag:r,namespace:n}=e,a="undefined"!=typeof window?window:void 0;if(void 0===a)return;if(n){let e=l(n);if(e)return e}let i=null===(t=a.ethereum)||void 0===t?void 0:t.providers;if(r){let e=o(r);if(e)return e}return void 0!==i&&i.length>0?i[0]:a.ethereum}({flag:r,namespace:n}),e=>{let r=t?{target:()=>({id:e.rkDetails.id,name:e.rkDetails.name,provider:t})}:{};return(0,i.K)(t=>({...(0,s.L)(r)(t),...e}))}}var d=e=>{let t,{projectId:i,walletConnectParameters:s}=e,o=(0,n.tq)()?c({flag:"isTrust"}):c({flag:"isTrustWallet"}),l=!o;return l&&(t={getUri:e=>e,instructions:{learnMoreUrl:"https://trustwallet.com/",steps:[{description:"wallet_connectors.trust.qr_code.step1.description",step:"install",title:"wallet_connectors.trust.qr_code.step1.title"},{description:"wallet_connectors.trust.qr_code.step2.description",step:"create",title:"wallet_connectors.trust.qr_code.step2.title"},{description:"wallet_connectors.trust.qr_code.step3.description",step:"scan",title:"wallet_connectors.trust.qr_code.step3.title"}]}}),{id:"trust",name:"Trust Wallet",rdns:"com.trustwallet.app",iconUrl:async()=>(await r.e(9738).then(r.bind(r,99738))).default,installed:o||void 0,iconAccent:"#3375BB",iconBackground:"#fff",downloadUrls:{android:"https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp",ios:"https://apps.apple.com/us/app/trust-crypto-bitcoin-wallet/id1288339409",mobile:"https://trustwallet.com/download",qrCode:"https://trustwallet.com/download",chrome:"https://chrome.google.com/webstore/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph",browserExtension:"https://trustwallet.com/browser-extension"},mobile:{getUri:l?e=>"trust://wc?uri=".concat(encodeURIComponent(e)):void 0},qrCode:t,extension:{instructions:{learnMoreUrl:"https://trustwallet.com/browser-extension",steps:[{description:"wallet_connectors.trust.extension.step1.description",step:"install",title:"wallet_connectors.trust.extension.step1.title"},{description:"wallet_connectors.trust.extension.step2.description",step:"create",title:"wallet_connectors.trust.extension.step2.title"},{description:"wallet_connectors.trust.extension.step3.description",step:"refresh",title:"wallet_connectors.trust.extension.step3.title"}]}},createConnector:l?(0,a.d)({projectId:i,walletConnectParameters:s}):(0,n.tq)()?u({flag:"isTrust"}):u({flag:"isTrustWallet"})}}},28446:function(e,t,r){"use strict";r.d(t,{P:function(){return i}});var n=r(92839),a=r(30073),i=e=>{let{projectId:t,walletConnectParameters:i}=e;return{id:"ledger",iconBackground:"#000",iconAccent:"#000",name:"Ledger",iconUrl:async()=>(await r.e(1115).then(r.bind(r,91115))).default,downloadUrls:{android:"https://play.google.com/store/apps/details?id=com.ledger.live",ios:"https://apps.apple.com/us/app/ledger-live-web3-wallet/id1361671700",mobile:"https://www.ledger.com/ledger-live",qrCode:"https://r354.adj.st/?adj_t=t2esmlk",windows:"https://www.ledger.com/ledger-live/download",macos:"https://www.ledger.com/ledger-live/download",linux:"https://www.ledger.com/ledger-live/download",desktop:"https://www.ledger.com/ledger-live"},mobile:{getUri:e=>(0,n.Dt)()?e:"ledgerlive://wc?uri=".concat(encodeURIComponent(e))},desktop:{getUri:e=>"ledgerlive://wc?uri=".concat(encodeURIComponent(e)),instructions:{learnMoreUrl:"https://support.ledger.com/hc/en-us/articles/4404389503889-Getting-started-with-Ledger-Live",steps:[{description:"wallet_connectors.ledger.desktop.step1.description",step:"install",title:"wallet_connectors.ledger.desktop.step1.title"},{description:"wallet_connectors.ledger.desktop.step2.description",step:"create",title:"wallet_connectors.ledger.desktop.step2.title"},{description:"wallet_connectors.ledger.desktop.step3.description",step:"connect",title:"wallet_connectors.ledger.desktop.step3.title"}]}},qrCode:{getUri:e=>"ledgerlive://wc?uri=".concat(encodeURIComponent(e)),instructions:{learnMoreUrl:"https://support.ledger.com/hc/en-us/articles/4404389503889-Getting-started-with-Ledger-Live",steps:[{description:"wallet_connectors.ledger.qr_code.step1.description",step:"install",title:"wallet_connectors.ledger.qr_code.step1.title"},{description:"wallet_connectors.ledger.qr_code.step2.description",step:"create",title:"wallet_connectors.ledger.qr_code.step2.title"},{description:"wallet_connectors.ledger.qr_code.step3.description",step:"scan",title:"wallet_connectors.ledger.qr_code.step3.title"}]}},createConnector:(0,a.d)({projectId:t,walletConnectParameters:i})}}},92839:function(e,t,r){"use strict";function n(){return"undefined"!=typeof navigator&&/android/i.test(navigator.userAgent)}function a(){return n()||"undefined"!=typeof navigator&&/iPhone|iPod/.test(navigator.userAgent)||"undefined"!=typeof navigator&&(/iPad/.test(navigator.userAgent)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)}r.d(t,{Dt:function(){return n},tq:function(){return a}})},66094:function(e,t,r){"use strict";r.d(t,{S:function(){return f}});var n=r(56298),a=r(2459),i=r(69948),s=r(49010),o=class extends s.l{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,r){let i=t.queryKey,s=t.queryHash??(0,n.Rm)(i,t),o=this.get(s);return o||(o=new a.A({cache:this,queryKey:i,queryHash:s,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(i)}),this.add(o)),o}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){i.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,n._x)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,n._x)(e,t)):t}notify(e){i.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){i.V.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){i.V.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},l=r(92812),c=class extends s.l{constructor(e={}){super(),this.config=e,this.#t=new Map,this.#r=Date.now()}#t;#r;build(e,t,r){let n=new l.m({mutationCache:this,mutationId:++this.#r,options:e.defaultMutationOptions(t),state:r});return this.add(n),n}add(e){let t=u(e),r=this.#t.get(t)??[];r.push(e),this.#t.set(t,r),this.notify({type:"added",mutation:e})}remove(e){let t=u(e);if(this.#t.has(t)){let r=this.#t.get(t)?.filter(t=>t!==e);r&&(0===r.length?this.#t.delete(t):this.#t.set(t,r))}this.notify({type:"removed",mutation:e})}canRun(e){let t=this.#t.get(u(e))?.find(e=>"pending"===e.state.status);return!t||t===e}runNext(e){let t=this.#t.get(u(e))?.find(t=>t!==e&&t.state.isPaused);return t?.continue()??Promise.resolve()}clear(){i.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...this.#t.values()].flat()}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,n.X7)(t,e))}findAll(e={}){return this.getAll().filter(t=>(0,n.X7)(e,t))}notify(e){i.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return i.V.batch(()=>Promise.all(e.map(e=>e.continue().catch(n.ZT))))}};function u(e){return e.options.scope?.id??String(e.mutationId)}var d=r(34939),p=r(49937);function h(e,{pages:t,pageParams:r}){let n=t.length-1;return e.getNextPageParam(t[n],t,r[n],r)}var f=class{#n;#a;#i;#s;#o;#l;#c;#u;constructor(e={}){this.#n=e.queryCache||new o,this.#a=e.mutationCache||new c,this.#i=e.defaultOptions||{},this.#s=new Map,this.#o=new Map,this.#l=0}mount(){this.#l++,1===this.#l&&(this.#c=d.j.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#n.onFocus())}),this.#u=p.N.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#n.onOnline())}))}unmount(){this.#l--,0===this.#l&&(this.#c?.(),this.#c=void 0,this.#u?.(),this.#u=void 0)}isFetching(e){return this.#n.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#a.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#n.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.getQueryData(e.queryKey);if(void 0===t)return this.fetchQuery(e);{let r=this.defaultQueryOptions(e),a=this.#n.build(this,r);return e.revalidateIfStale&&a.isStaleByTime((0,n.KC)(r.staleTime,a))&&this.prefetchQuery(r),Promise.resolve(t)}}getQueriesData(e){return this.#n.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,r){let a=this.defaultQueryOptions({queryKey:e}),i=this.#n.get(a.queryHash),s=i?.state.data,o=(0,n.SE)(t,s);if(void 0!==o)return this.#n.build(this,a).setData(o,{...r,manual:!0})}setQueriesData(e,t,r){return i.V.batch(()=>this.#n.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,r)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#n.get(t.queryHash)?.state}removeQueries(e){let t=this.#n;i.V.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let r=this.#n,n={type:"active",...e};return i.V.batch(()=>(r.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries(n,t)))}cancelQueries(e={},t={}){let r={revert:!0,...t};return Promise.all(i.V.batch(()=>this.#n.findAll(e).map(e=>e.cancel(r)))).then(n.ZT).catch(n.ZT)}invalidateQueries(e={},t={}){return i.V.batch(()=>{if(this.#n.findAll(e).forEach(e=>{e.invalidate()}),"none"===e.refetchType)return Promise.resolve();let r={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(r,t)})}refetchQueries(e={},t){let r={...t,cancelRefetch:t?.cancelRefetch??!0};return Promise.all(i.V.batch(()=>this.#n.findAll(e).filter(e=>!e.isDisabled()).map(e=>{let t=e.fetch(void 0,r);return r.throwOnError||(t=t.catch(n.ZT)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(n.ZT)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let r=this.#n.build(this,t);return r.isStaleByTime((0,n.KC)(t.staleTime,r))?r.fetch(t):Promise.resolve(r.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(n.ZT).catch(n.ZT)}fetchInfiniteQuery(e){var t;return e.behavior=(t=e.pages,{onFetch:(e,r)=>{let a=async()=>{let r;let a=e.options,i=e.fetchOptions?.meta?.fetchMore?.direction,s=e.state.data?.pages||[],o=e.state.data?.pageParams||[],l=!1,c=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(e.signal.aborted?l=!0:e.signal.addEventListener("abort",()=>{l=!0}),e.signal)})},u=(0,n.cG)(e.options,e.fetchOptions),d=async(t,r,a)=>{if(l)return Promise.reject();if(null==r&&t.pages.length)return Promise.resolve(t);let i={queryKey:e.queryKey,pageParam:r,direction:a?"backward":"forward",meta:e.options.meta};c(i);let s=await u(i),{maxPages:o}=e.options,d=a?n.Ht:n.VX;return{pages:d(t.pages,s,o),pageParams:d(t.pageParams,r,o)}};if(i&&s.length){let e="backward"===i,t={pages:s,pageParams:o},n=(e?function(e,{pages:t,pageParams:r}){return e.getPreviousPageParam?.(t[0],t,r[0],r)}:h)(a,t);r=await d(t,n,e)}else{r=await d({pages:[],pageParams:[]},o[0]??a.initialPageParam);let e=t??s.length;for(let t=1;t<e;t++){let e=h(a,r);r=await d(r,e)}}return r};e.options.persister?e.fetchFn=()=>e.options.persister?.(a,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},r):e.fetchFn=a}}),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(n.ZT).catch(n.ZT)}resumePausedMutations(){return p.N.isOnline()?this.#a.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#n}getMutationCache(){return this.#a}getDefaultOptions(){return this.#i}setDefaultOptions(e){this.#i=e}setQueryDefaults(e,t){this.#s.set((0,n.Ym)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#s.values()],r={};return t.forEach(t=>{(0,n.to)(e,t.queryKey)&&(r={...r,...t.defaultOptions})}),r}setMutationDefaults(e,t){this.#o.set((0,n.Ym)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#o.values()],r={};return t.forEach(t=>{(0,n.to)(e,t.mutationKey)&&(r={...r,...t.defaultOptions})}),r}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#i.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,n.Rm)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),!0!==t.enabled&&t.queryFn===n.CN&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#i.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#n.clear(),this.#a.clear()}}},53611:function(e,t,r){"use strict";r.d(t,{y:function(){return n}});let n=(0,r(95258).a)({id:42161,name:"Arbitrum One",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://arb1.arbitrum.io/rpc"]}},blockExplorers:{default:{name:"Arbiscan",url:"https://arbiscan.io",apiUrl:"https://api.arbiscan.io/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:7654707}}})},99445:function(e,t,r){"use strict";r.d(t,{u:function(){return a}});var n=r(31810);let a=(0,r(95258).a)({...n.i,id:8453,name:"Base",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://mainnet.base.org"]}},blockExplorers:{default:{name:"Basescan",url:"https://basescan.org",apiUrl:"https://api.basescan.org/api"}},contracts:{...n.i.contracts,l2OutputOracle:{1:{address:"0x56315b90c40730925ec5485cf004d835058518A0"}},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:5022},portal:{1:{address:"0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",blockCreated:17482143}},l1StandardBridge:{1:{address:"0x3154Cf16ccdb4C6d922629664174b904d80F2C35",blockCreated:17482143}}},sourceId:1})},64012:function(e,t,r){"use strict";r.d(t,{M:function(){return n}});let n=(0,r(95258).a)({id:59141,name:"Linea Sepolia Testnet",nativeCurrency:{name:"Linea Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.sepolia.linea.build"],webSocket:["wss://rpc.sepolia.linea.build"]}},blockExplorers:{default:{name:"Etherscan",url:"https://sepolia.lineascan.build",apiUrl:"https://api-sepolia.lineascan.build/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:227427}},testnet:!0})},71596:function(e,t,r){"use strict";r.d(t,{v:function(){return a}});var n=r(31810);let a=(0,r(95258).a)({...n.i,id:10,name:"OP Mainnet",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://mainnet.optimism.io"]}},blockExplorers:{default:{name:"Optimism Explorer",url:"https://optimistic.etherscan.io",apiUrl:"https://api-optimistic.etherscan.io/api"}},contracts:{...n.i.contracts,disputeGameFactory:{1:{address:"0xe5965Ab5962eDc7477C8520243A95517CD252fA9"}},l2OutputOracle:{1:{address:"0xdfe97868233d1aa22e815a266982f2cf17685a27"}},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:4286263},portal:{1:{address:"0xbEb5Fc579115071764c7423A4f12eDde41f106Ed"}},l1StandardBridge:{1:{address:"0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"}}},sourceId:1})},80755:function(e,t,r){"use strict";r.d(t,{y:function(){return n}});let n=(0,r(95258).a)({id:137,name:"Polygon",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:{default:{http:["https://polygon-rpc.com"]}},blockExplorers:{default:{name:"PolygonScan",url:"https://polygonscan.com",apiUrl:"https://api.polygonscan.com/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:25770160}}})},8483:function(e,t,r){"use strict";r.d(t,{F:function(){return n}});let n=(0,r(95258).a)({id:11155111,name:"Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.sepolia.org"]}},blockExplorers:{default:{name:"Etherscan",url:"https://sepolia.etherscan.io",apiUrl:"https://api-sepolia.etherscan.io/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:751532},ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",blockCreated:5317080}},testnet:!0})},31810:function(e,t,r){"use strict";r.d(t,{i:function(){return T}});var n=r(21019),a=r(20621),i=r(16719),s=r(55875);let o={block:(0,a.G)({format:e=>({transactions:e.transactions?.map(e=>{if("string"==typeof e)return e;let t=i.Tr(e);return"0x7e"===t.typeHex&&(t.isSystemTx=e.isSystemTx,t.mint=e.mint?n.y_(e.mint):void 0,t.sourceHash=e.sourceHash,t.type="deposit"),t}),stateRoot:e.stateRoot})}),transaction:(0,i.y_)({format(e){let t={};return"0x7e"===e.type&&(t.isSystemTx=e.isSystemTx,t.mint=e.mint?(0,n.y_)(e.mint):void 0,t.sourceHash=e.sourceHash,t.type="deposit"),t}}),transactionReceipt:(0,s.dI)({format:e=>({l1GasPrice:e.l1GasPrice?(0,n.y_)(e.l1GasPrice):null,l1GasUsed:e.l1GasUsed?(0,n.y_)(e.l1GasUsed):null,l1Fee:e.l1Fee?(0,n.y_)(e.l1Fee):null,l1FeeScalar:e.l1FeeScalar?Number(e.l1FeeScalar):null})})};var l=r(51359),c=r(64113),u=r(53932),d=r(95046),p=r(48926),h=r(15222),f=r(82361);function g(e,t="hex"){let r=function e(t){return Array.isArray(t)?function(e){let t=e.reduce((e,t)=>e+t.length,0),r=m(t);return{length:t<=55?1+t:1+r+t,encode(n){for(let{encode:a}of(t<=55?n.pushByte(192+t):(n.pushByte(247+r),1===r?n.pushUint8(t):2===r?n.pushUint16(t):3===r?n.pushUint24(t):n.pushUint32(t)),e))a(n)}}}(t.map(t=>e(t))):function(e){let t="string"==typeof e?(0,f.nr)(e):e,r=m(t.length);return{length:1===t.length&&t[0]<128?1:t.length<=55?1+t.length:1+r+t.length,encode(e){1===t.length&&t[0]<128||(t.length<=55?e.pushByte(128+t.length):(e.pushByte(183+r),1===r?e.pushUint8(t.length):2===r?e.pushUint16(t.length):3===r?e.pushUint24(t.length):e.pushUint32(t.length))),e.pushBytes(t)}}}(t)}(e),n=(0,h.q)(new Uint8Array(r.length));return(r.encode(n),"hex"===t)?(0,d.ci)(n.bytes):n.bytes}function m(e){if(e<256)return 1;if(e<65536)return 2;if(e<16777216)return 3;if(e<4294967296)return 4;throw new p.G("Length is too large.")}var y=r(97658),b=r(40598),w=r(18383),v=r(2305),x=r(30721),C=r(77955),q=r(9383),F=r(25678),_=r(89045),A=r(37764),P=r(7508),k=r(49014);function E(e){let{chainId:t,maxPriorityFeePerGas:r,maxFeePerGas:n,to:a}=e;if(t<=0)throw new _.hJ({chainId:t});if(a&&!(0,c.U)(a))throw new l.b({address:a});if(n&&n>2n**256n-1n)throw new A.Hh({maxFeePerGas:n});if(r&&n&&r>n)throw new A.cs({maxFeePerGas:n,maxPriorityFeePerGas:r})}var B=r(33884);function U(e){if(!e||0===e.length)return[];let t=[];for(let r=0;r<e.length;r++){let{address:n,storageKeys:a}=e[r];for(let e=0;e<a.length;e++)if(a[e].length-2!=64)throw new y.JC({storageKey:a[e]});if(!(0,c.U)(n,{strict:!1}))throw new l.b({address:n});t.push([n,a])}return t}function O(e,t){let r=t??e,{v:n,yParity:a}=r;if(void 0===r.r||void 0===r.s||void 0===n&&void 0===a)return[];let i=(0,C.f)(r.r),s=(0,C.f)(r.s);return["number"==typeof a?a?(0,d.NC)(1):"0x":0n===n?"0x":1n===n?(0,d.NC)(1):27n===n?"0x":(0,d.NC)(1),"0x00"===i?"0x":i,"0x00"===s?"0x":s]}let T={contracts:{gasPriceOracle:{address:"0x420000000000000000000000000000000000000F"},l1Block:{address:"0x4200000000000000000000000000000000000015"},l2CrossDomainMessenger:{address:"0x4200000000000000000000000000000000000007"},l2Erc721Bridge:{address:"0x4200000000000000000000000000000000000014"},l2StandardBridge:{address:"0x4200000000000000000000000000000000000010"},l2ToL1MessagePasser:{address:"0x4200000000000000000000000000000000000016"}},formatters:o,serializers:{transaction:function(e,t){return"deposit"===e.type||void 0!==e.sourceHash?function(e){!function(e){let{from:t,to:r}=e;if(t&&!(0,c.U)(t))throw new l.b({address:t});if(r&&!(0,c.U)(r))throw new l.b({address:r})}(e);let{sourceHash:t,data:r,from:n,gas:a,isSystemTx:i,mint:s,to:o,value:p}=e,h=[t,n,o??"0x",s?(0,d.NC)(s):"0x",p?(0,d.NC)(p):"0x",a?(0,d.NC)(a):"0x",i?"0x1":"0x",r??"0x"];return(0,u.SM)(["0x7e",g(h)])}(e):function(e,t){let r=(0,B.l)(e);return"eip1559"===r?function(e,t){let{chainId:r,gas:n,nonce:a,to:i,value:s,maxFeePerGas:o,maxPriorityFeePerGas:l,accessList:c,data:p}=e;E(e);let h=U(c),f=[(0,d.NC)(r),a?(0,d.NC)(a):"0x",l?(0,d.NC)(l):"0x",o?(0,d.NC)(o):"0x",n?(0,d.NC)(n):"0x",i??"0x",s?(0,d.NC)(s):"0x",p??"0x",h,...O(e,t)];return(0,u.SM)(["0x02",g(f)])}(e,t):"eip2930"===r?function(e,t){let{chainId:r,gas:n,data:a,nonce:i,to:s,value:o,accessList:h,gasPrice:f}=e;!function(e){let{chainId:t,maxPriorityFeePerGas:r,gasPrice:n,maxFeePerGas:a,to:i}=e;if(t<=0)throw new _.hJ({chainId:t});if(i&&!(0,c.U)(i))throw new l.b({address:i});if(r||a)throw new p.G("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");if(n&&n>2n**256n-1n)throw new A.Hh({maxFeePerGas:n})}(e);let m=U(h),y=[(0,d.NC)(r),i?(0,d.NC)(i):"0x",f?(0,d.NC)(f):"0x",n?(0,d.NC)(n):"0x",s??"0x",o?(0,d.NC)(o):"0x",a??"0x",m,...O(e,t)];return(0,u.SM)(["0x01",g(y)])}(e,t):"eip4844"===r?function(e,t){let{chainId:r,gas:a,nonce:i,to:s,value:o,maxFeePerBlobGas:l,maxFeePerGas:c,maxPriorityFeePerGas:p,accessList:h,data:f}=e;!function(e){let{blobVersionedHashes:t}=e;if(t){if(0===t.length)throw new F.RX;for(let e of t){let t=(0,P.d)(e),r=(0,n.ly)((0,k.tP)(e,0,1));if(32!==t)throw new F.xd({hash:e,size:t});if(r!==q.l)throw new F.cJ({hash:e,version:r})}}E(e)}(e);let m=e.blobVersionedHashes,y=e.sidecars;if(e.blobs&&(void 0===m||void 0===y)){let t="string"==typeof e.blobs[0]?e.blobs:e.blobs.map(e=>(0,d.ci)(e)),r=e.kzg,n=(0,b.P)({blobs:t,kzg:r});if(void 0===m&&(m=(0,v.C)({commitments:n})),void 0===y){let e=(0,w.y)({blobs:t,commitments:n,kzg:r});y=(0,x.j)({blobs:t,commitments:n,proofs:e})}}let C=U(h),_=[(0,d.NC)(r),i?(0,d.NC)(i):"0x",p?(0,d.NC)(p):"0x",c?(0,d.NC)(c):"0x",a?(0,d.NC)(a):"0x",s??"0x",o?(0,d.NC)(o):"0x",f??"0x",C,l?(0,d.NC)(l):"0x",m??[],...O(e,t)],A=[],B=[],T=[];if(y)for(let e=0;e<y.length;e++){let{blob:t,commitment:r,proof:n}=y[e];A.push(t),B.push(r),T.push(n)}return(0,u.SM)(["0x03",y?g([_,A,B,T]):g(_)])}(e,t):function(e,t){let{chainId:r=0,gas:n,data:a,nonce:i,to:s,value:o,gasPrice:u}=e;!function(e){let{chainId:t,maxPriorityFeePerGas:r,gasPrice:n,maxFeePerGas:a,to:i,accessList:s}=e;if(i&&!(0,c.U)(i))throw new l.b({address:i});if(void 0!==t&&t<=0)throw new _.hJ({chainId:t});if(r||a)throw new p.G("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");if(n&&n>2n**256n-1n)throw new A.Hh({maxFeePerGas:n});if(s)throw new p.G("`accessList` is not a valid Legacy Transaction attribute.")}(e);let h=[i?(0,d.NC)(i):"0x",u?(0,d.NC)(u):"0x",n?(0,d.NC)(n):"0x",s??"0x",o?(0,d.NC)(o):"0x",a??"0x"];if(t){let e=(()=>{if(t.v>=35n)return(t.v-35n)/2n>0?t.v:27n+(35n===t.v?0n:1n);if(r>0)return BigInt(2*r)+BigInt(35n+t.v-27n);let e=27n+(27n===t.v?0n:1n);if(t.v!==e)throw new y.vl({v:t.v});return e})();h=[...h,(0,d.NC)(e),t.r,t.s]}else r>0&&(h=[...h,(0,d.NC)(r),"0x","0x"]);return g(h)}(e,t)}(e,t)}}}}}]);