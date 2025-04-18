(function(w,m){typeof exports=="object"&&typeof module<"u"?m(require("react-dom/client"),require("react")):typeof define=="function"&&define.amd?define(["react-dom/client","react"],m):(w=typeof globalThis<"u"?globalThis:w||self,m(w.ReactDOMClient,w.React))})(this,function(w,m){"use strict";function P(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const a in e)if(a!=="default"){const r=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(t,a,r.get?r:{enumerable:!0,get:()=>e[a]})}}return t.default=e,Object.freeze(t)}const s=P(m);var C={exports:{}},j={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M;function $(){if(M)return j;M=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function a(r,n,o){var c=null;if(o!==void 0&&(c=""+o),n.key!==void 0&&(c=""+n.key),"key"in n){o={};for(var u in n)u!=="key"&&(o[u]=n[u])}else o=n;return n=o.ref,{$$typeof:e,type:r,key:c,ref:n!==void 0?n:null,props:o}}return j.Fragment=t,j.jsx=a,j.jsxs=a,j}var k;function W(){return k||(k=1,C.exports=$()),C.exports}var i=W();function E(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function F(...e){return t=>{let a=!1;const r=e.map(n=>{const o=E(n,t);return!a&&typeof o=="function"&&(a=!0),o});if(a)return()=>{for(let n=0;n<r.length;n++){const o=r[n];typeof o=="function"?o():E(e[n],null)}}}}function G(e){const t=q(e),a=s.forwardRef((r,n)=>{const{children:o,...c}=r,u=s.Children.toArray(o),b=u.find(J);if(b){const d=b.props.children,f=u.map(p=>p===b?s.Children.count(d)>1?s.Children.only(null):s.isValidElement(d)?d.props.children:null:p);return i.jsx(t,{...c,ref:n,children:s.isValidElement(d)?s.cloneElement(d,void 0,f):null})}return i.jsx(t,{...c,ref:n,children:o})});return a.displayName=`${e}.Slot`,a}var N=G("Slot");function q(e){const t=s.forwardRef((a,r)=>{const{children:n,...o}=a;if(s.isValidElement(n)){const c=Y(n),u=U(o,n.props);return n.type!==s.Fragment&&(u.ref=r?F(r,c):c),s.cloneElement(n,u)}return s.Children.count(n)>1?s.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var H=Symbol("radix.slottable");function J(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===H}function U(e,t){const a={...t};for(const r in t){const n=e[r],o=t[r];/^on[A-Z]/.test(r)?n&&o?a[r]=(...u)=>{o(...u),n(...u)}:n&&(a[r]=n):r==="style"?a[r]={...n,...o}:r==="className"&&(a[r]=[n,o].filter(Boolean).join(" "))}return{...e,...a}}function Y(e){var r,n;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=(n=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:n.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}function A(e){var t,a,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(a=A(e[t]))&&(r&&(r+=" "),r+=a)}else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}function Z(){for(var e,t,a=0,r="",n=arguments.length;a<n;a++)(e=arguments[a])&&(t=A(e))&&(r&&(r+=" "),r+=t);return r}const I=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,T=Z,K=(e,t)=>a=>{var r;if((t==null?void 0:t.variants)==null)return T(e,a==null?void 0:a.class,a==null?void 0:a.className);const{variants:n,defaultVariants:o}=t,c=Object.keys(n).map(d=>{const f=a==null?void 0:a[d],p=o==null?void 0:o[d];if(f===null)return null;const x=I(f)||I(p);return n[d][x]}),u=a&&Object.entries(a).reduce((d,f)=>{let[p,x]=f;return x===void 0||(d[p]=x),d},{}),b=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((d,f)=>{let{class:p,className:x,...h}=f;return Object.entries(h).every(S=>{let[v,y]=S;return Array.isArray(y)?y.includes({...o,...u}[v]):{...o,...u}[v]===y})?[...d,p,x]:d},[]);return T(e,c,b,a==null?void 0:a.class,a==null?void 0:a.className)};/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Q=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,r)=>r?r.toUpperCase():a.toLowerCase()),O=e=>{const t=Q(e);return t.charAt(0).toUpperCase()+t.slice(1)},z=(...e)=>e.filter((t,a,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===a).join(" ").trim(),ee=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var te={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=m.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:n="",children:o,iconNode:c,...u},b)=>m.createElement("svg",{ref:b,...te,width:t,height:t,stroke:e,strokeWidth:r?Number(a)*24/Number(t):a,className:z("lucide",n),...!o&&!ee(u)&&{"aria-hidden":"true"},...u},[...c.map(([d,f])=>m.createElement(d,f)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=(e,t)=>{const a=m.forwardRef(({className:r,...n},o)=>m.createElement(ae,{ref:o,iconNode:t,className:z(`lucide-${X(O(e))}`,`lucide-${e}`,r),...n}));return a.displayName=O(e),a};/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=re("panel-left",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);function ie(){return!1}function l(...e){return e.filter(Boolean).join(" ")}function oe(e){return i.jsx("button",{...e})}function se(e){return i.jsx("input",{...e})}function de(){return i.jsx("hr",{})}function le({children:e}){return i.jsx(i.Fragment,{children:e})}function ue({children:e}){return i.jsx("div",{children:e})}function B(e){return i.jsx("div",{...e})}function ce({children:e}){return i.jsx(i.Fragment,{children:e})}function fe({children:e}){return i.jsx(i.Fragment,{children:e})}function be({children:e}){return i.jsx(i.Fragment,{children:e})}function pe({children:e}){return i.jsx("div",{children:e})}const me="sidebar:state",ge=60*60*24*7,xe="16rem",he="18rem",ve="3rem",we="b",D=s.createContext(null);function R(){const e=s.useContext(D);if(!e)throw new Error("useSidebar must be used within a SidebarProvider.");return e}const V=s.forwardRef(({defaultOpen:e=!0,open:t,onOpenChange:a,className:r,style:n,children:o,...c},u)=>{const b=ie(),[d,f]=s.useState(!1),[p,x]=s.useState(e),h=t??p,S=s.useCallback(g=>{if(a)return a==null?void 0:a(typeof g=="function"?g(h):g);x(g),document.cookie=`${me}=${h}; path=/; max-age=${ge}`},[a,h]),v=s.useCallback(()=>S(g=>!g),[b,S,f]);s.useEffect(()=>{const g=_=>{_.key===we&&(_.metaKey||_.ctrlKey)&&(_.preventDefault(),v())};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[v]);const y=h?"expanded":"collapsed",Ge=s.useMemo(()=>({state:y,open:h,setOpen:S,isMobile:b,openMobile:d,setOpenMobile:f,toggleSidebar:v}),[y,h,S,b,d,f,v]);return i.jsx(D.Provider,{value:Ge,children:i.jsx(ce,{delayDuration:0,children:i.jsx("div",{style:{"--sidebar-width":xe,"--sidebar-width-icon":ve,...n},className:l("group/sidebar-wrapper flex min-h-svh w-full text-sidebar-foreground has-[[data-variant=inset]]:bg-sidebar",r),ref:u,...c,children:o})})})});V.displayName="SidebarProvider";const L=s.forwardRef(({side:e="left",variant:t="sidebar",collapsible:a="offcanvas",className:r,children:n,...o},c)=>{const{isMobile:u,state:b,openMobile:d,setOpenMobile:f}=R();return a==="none"?i.jsx("div",{className:l("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",r),ref:c,...o,children:n}):u?i.jsx(le,{open:d,onOpenChange:f,...o,children:i.jsx(ue,{"data-sidebar":"sidebar","data-mobile":"true",className:"w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",style:{"--sidebar-width":he},side:e,children:i.jsx("div",{className:"flex h-full w-full flex-col",children:n})})}):i.jsxs("div",{ref:c,className:"group peer hidden md:block","data-state":b,"data-collapsible":b==="collapsed"?a:"","data-variant":t,"data-side":e,children:[i.jsx("div",{className:l("duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear","group-data-[collapsible=offcanvas]:w-0","group-data-[side=right]:rotate-180",t==="floating"||t==="inset"?"group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]":"group-data-[collapsible=icon]:w-[--sidebar-width-icon]")}),i.jsx("div",{className:l("duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",e==="left"?"left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]":"right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",t==="floating"||t==="inset"?"p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]":"group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",r),...o,children:i.jsx("div",{"data-sidebar":"sidebar",className:"flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",children:n})})]})});L.displayName="Sidebar";const Se=s.forwardRef(({className:e,onClick:t,...a},r)=>{const{toggleSidebar:n}=R();return i.jsxs(oe,{ref:r,"data-sidebar":"trigger",variant:"ghost",size:"icon",className:l("h-7 w-7",e),onClick:o=>{t==null||t(o),n()},...a,children:[i.jsx(ne,{}),i.jsx("span",{className:"sr-only",children:"Toggle Sidebar"})]})});Se.displayName="SidebarTrigger";const ye=s.forwardRef(({className:e,...t},a)=>{const{toggleSidebar:r}=R();return i.jsx("button",{ref:a,"data-sidebar":"rail","aria-label":"Toggle Sidebar",tabIndex:-1,onClick:r,title:"Toggle Sidebar",className:l("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex","[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize","[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize","group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar","[[data-side=left][data-collapsible=offcanvas]_&]:-right-2","[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",e),...t})});ye.displayName="SidebarRail";const je=s.forwardRef(({className:e,...t},a)=>i.jsx("main",{ref:a,className:l("relative flex min-h-svh flex-1 flex-col bg-background","peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",e),...t}));je.displayName="SidebarInset";const Ne=s.forwardRef(({className:e,...t},a)=>i.jsx(se,{ref:a,"data-sidebar":"input",className:l("h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",e),...t}));Ne.displayName="SidebarInput";const Re=s.forwardRef(({className:e,...t},a)=>i.jsx("div",{ref:a,"data-sidebar":"header",className:l("flex flex-col gap-2 p-2",e),...t}));Re.displayName="SidebarHeader";const _e=s.forwardRef(({className:e,...t},a)=>i.jsx("div",{ref:a,"data-sidebar":"footer",className:l("flex flex-col gap-2 p-2",e),...t}));_e.displayName="SidebarFooter";const Ce=s.forwardRef(({className:e,...t},a)=>i.jsx(de,{ref:a,"data-sidebar":"separator",className:l("mx-2 w-auto bg-sidebar-border",e),...t}));Ce.displayName="SidebarSeparator";const Me=s.forwardRef(({className:e,...t},a)=>i.jsx("div",{ref:a,"data-sidebar":"content",className:l("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",e),...t}));Me.displayName="SidebarContent";const ke=s.forwardRef(({className:e,...t},a)=>i.jsx("div",{ref:a,"data-sidebar":"group",className:l("relative flex w-full min-w-0 flex-col p-2",e),...t}));ke.displayName="SidebarGroup";const Ee=s.forwardRef(({className:e,asChild:t=!1,...a},r)=>{const n=t?N:"div";return i.jsx(n,{ref:r,"data-sidebar":"group-label",className:l("duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0","group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",e),...a})});Ee.displayName="SidebarGroupLabel";const Ae=s.forwardRef(({className:e,asChild:t=!1,...a},r)=>{const n=t?N:"button";return i.jsx(n,{ref:r,"data-sidebar":"group-action",className:l("absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0","after:absolute after:-inset-2 after:md:hidden","group-data-[collapsible=icon]:hidden",e),...a})});Ae.displayName="SidebarGroupAction";const Ie=s.forwardRef(({className:e,...t},a)=>i.jsx("div",{ref:a,"data-sidebar":"group-content",className:l("w-full text-sm",e),...t}));Ie.displayName="SidebarGroupContent";const Te=s.forwardRef(({className:e,...t},a)=>i.jsx("ul",{ref:a,"data-sidebar":"menu",className:l("flex w-full min-w-0 flex-col gap-1",e),...t}));Te.displayName="SidebarMenu";const Oe=s.forwardRef(({className:e,...t},a)=>i.jsx("li",{ref:a,"data-sidebar":"menu-item",className:l("group/menu-item relative",e),...t}));Oe.displayName="SidebarMenuItem";const ze=K("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",{variants:{variant:{default:"hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",outline:"bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"},size:{default:"h-8 text-sm",sm:"h-7 text-xs",lg:"h-12 text-sm group-data-[collapsible=icon]:!p-0"}},defaultVariants:{variant:"default",size:"default"}}),Be=s.forwardRef(({asChild:e=!1,isActive:t=!1,variant:a="default",size:r="default",tooltip:n,className:o,...c},u)=>{const b=e?N:"button",{isMobile:d,state:f}=R(),p=i.jsx(b,{ref:u,"data-sidebar":"menu-button","data-size":r,"data-active":t,className:l(ze({variant:a,size:r}),o),...c});return n?(typeof n=="string"&&(n={children:n}),i.jsxs(fe,{children:[i.jsx(be,{asChild:!0,children:p}),i.jsx(pe,{side:"right",align:"center",hidden:f!=="collapsed"||d,...n})]})):p});Be.displayName="SidebarMenuButton";const De=s.forwardRef(({className:e,asChild:t=!1,showOnHover:a=!1,...r},n)=>{const o=t?N:"button";return i.jsx(o,{ref:n,"data-sidebar":"menu-action",className:l("absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0","after:absolute after:-inset-2 after:md:hidden","peer-data-[size=sm]/menu-button:top-1","peer-data-[size=default]/menu-button:top-1.5","peer-data-[size=lg]/menu-button:top-2.5","group-data-[collapsible=icon]:hidden",a&&"group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",e),...r})});De.displayName="SidebarMenuAction";const Ve=s.forwardRef(({className:e,...t},a)=>i.jsx("div",{ref:a,"data-sidebar":"menu-badge",className:l("absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none","peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground","peer-data-[size=sm]/menu-button:top-1","peer-data-[size=default]/menu-button:top-1.5","peer-data-[size=lg]/menu-button:top-2.5","group-data-[collapsible=icon]:hidden",e),...t}));Ve.displayName="SidebarMenuBadge";const Le=s.forwardRef(({className:e,showIcon:t=!1,...a},r)=>{const n=s.useMemo(()=>`${Math.floor(Math.random()*40)+50}%`,[]);return i.jsxs("div",{ref:r,"data-sidebar":"menu-skeleton",className:l("rounded-md h-8 flex gap-2 px-2 items-center",e),...a,children:[t&&i.jsx(B,{className:"size-4 rounded-md","data-sidebar":"menu-skeleton-icon"}),i.jsx(B,{className:"h-4 flex-1 max-w-[--skeleton-width]","data-sidebar":"menu-skeleton-text",style:{"--skeleton-width":n}})]})});Le.displayName="SidebarMenuSkeleton";const Pe=s.forwardRef(({className:e,...t},a)=>i.jsx("ul",{ref:a,"data-sidebar":"menu-sub",className:l("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5","group-data-[collapsible=icon]:hidden",e),...t}));Pe.displayName="SidebarMenuSub";const $e=s.forwardRef(({...e},t)=>i.jsx("li",{ref:t,...e}));$e.displayName="SidebarMenuSubItem";const We=s.forwardRef(({asChild:e=!1,size:t="md",isActive:a,className:r,...n},o)=>{const c=e?N:"a";return i.jsx(c,{ref:o,"data-sidebar":"menu-sub-button","data-size":t,"data-active":a,className:l("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground","data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",t==="sm"&&"text-xs",t==="md"&&"text-sm","group-data-[collapsible=icon]:hidden",r),...n})});We.displayName="SidebarMenuSubButton";function Fe(e,t={}){w.createRoot(e).render(i.jsx(V,{defaultOpen:t.defaultOpen??!0,children:i.jsx(L,{...t})}))}window.MySidebar={init:Fe}});
