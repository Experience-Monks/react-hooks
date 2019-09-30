(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{977:function(e,n,t){"use strict";t.r(n);t(13),t(7),t(5),t(4),t(8),t(6);var r=t(10),o=t(1),s=t.n(o),i=t(80),c=t(970),a=t(33),b=t(971),l=function(){var e=Object(o.useRef)(null),n=Object(b.a)(e,{rootMargin:"-200px",triggerOnce:!1}),t=Object(o.useRef)(null),i=Object(b.a)(t,{rootMargin:"-200px"});return Object(r.c)(s.a.Fragment,null,Object(r.c)("div",{style:{height:"100vh"}},"White Space"),Object(r.c)("span",{style:{display:"block"}},"Watching intersect using -200px of rootMargin"),Object(r.c)("span",{style:{display:"block"}},"Triggering multiple times"),Object(r.c)("div",{ref:e,style:{height:"300px",transition:"background-color 0.5s ease-out 0.5s",backgroundColor:n?"springgreen":"crimson"}},n?"Intersected":"Not Yet"),Object(r.c)("span",{style:{marginTop:"400px",display:"block"}},"Watching intersect using -200px of rootMargin"),Object(r.c)("span",{style:{display:"block"}},"Triggering once"),Object(r.c)("div",{ref:t,style:{height:"300px",transition:"background-color 0.5s ease-out 0.5s",backgroundColor:i?"springgreen":"crimson"}},i?"Intersected":"Not Yet"))},p=l;function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"IntersectionObserver",filename:"content/UseIntersectionObserver/use-intersection-observer.jsx"}}),t.d(n,"_frontmatter",(function(){return g})),t.d(n,"default",(function(){return d}));var g={};void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"content/UseIntersectionObserver/use-intersectino-observer.mdx"}});var f={_frontmatter:g},O=c.a;function d(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(i.b)(O,u({},f,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"use-intersection-observer"},"use-intersection-observer"),Object(i.b)("p",null,"Hook Description"),Object(i.b)(a.c,{__position:0,__code:"<IntersectionObserver />",__scope:{props:t,DefaultLayout:c.a,Playground:a.c,IntersectionObserver:p},mdxType:"Playground"},Object(i.b)(p,{mdxType:"IntersectionObserver"})),Object(i.b)("pre",null,Object(i.b)("code",u({parentName:"pre"},{className:"language-jsx"}),'import React, { useRef } from "react";\nimport { useIntersectionObserver } from "@jam3/react-hooks";\n\nconst IntersectionObserver = () => {\n  const containerRef = useRef(null);\n  const isIntersecting = useIntersectionObserver(containerRef, { rootMargin: "-200px" });\n\n  const containerRef2 = useRef(null);\n  const isIntersecting2 = useIntersectionObserver(containerRef, { rootMargin: "-200px", triggerOnce: false });\n\n  return (\n    <>\n      <div>White Space</div>\n\n      <span>Watching intersect using -200px of rootMargin</span>\n      <span>Triggering multiple times</span>\n      <div ref={containerRef2}>{isIntersecting2 ? "Intersected" : "Not Yet"}</div>\n\n      <span>Watching intersect using -200px of rootMargin</span>\n      <span>Triggering once</span>\n      <div ref={containerRef}>{isIntersecting ? "Intersected" : "Not Yet"}</div>\n    </>\n  );\n};\nexport default IntersectionObserver;\n')))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"content/UseIntersectionObserver/use-intersectino-observer.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-use-intersection-observer-use-intersectino-observer-mdx-1f2859b7b15fc353ab2d.js.map