"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[9],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,o=new RegExp("^"+s.source),i=new RegExp(s.source+n.source,"gu"),l=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,o=!1,i=!1;for(let l=0;l<e.length;l++){const c=e[l];s&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),s=!1,i=o,o=!0,l++):o&&i&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),i=o,o=!1,s=!0):(s=r(c)===c&&n(c)!==c,i=o,o=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(o,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,l.lastIndex=0,e.replace(i,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return m},M:function(){return k},P:function(){return E},S:function(){return D},_:function(){return i},a:function(){return o},b:function(){return u},g:function(){return d},h:function(){return l}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,n){return void 0===n&&(n={}),o({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,s,i,l){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),l&&(c.objectPosition=l);const u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const p=["children"],g=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,a=i(e,p);return r.createElement(r.Fragment,null,r.createElement(g,o({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:l}=e,c=i(e,h);return r.createElement("img",o({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:s}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=i(e,f);const l=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,o({},s,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),c):c};var w;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const v=["fallback"],E=function(e){let{fallback:t}=e,a=i(e,v);return t?r.createElement(b,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(b,o({},e)),r.createElement("noscript",null,r.createElement(b,o({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=b.propTypes;const L=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],S=e=>e.replace(/\n/g,""),x=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),o=3;o<r;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},j={image:s().object.isRequired,alt:x},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],I=new Set;let _,O;const Z=function(e){let{as:t="div",image:n,style:s,backgroundColor:u,className:d,class:p,onStartLoad:g,onLoad:m,onError:h}=e,f=i(e,T);const{width:y,height:b,layout:w}=n,v=c(y,b,w),{style:E,className:k}=v,L=i(v,N),C=(0,r.useRef)(),S=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);p&&(d=p);const x=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,y,b);return(0,r.useEffect)((()=>{_||(_=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void I.add(S);if(O&&I.has(S))return;let t,r;return _.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;C.current&&(C.current.innerHTML=a(o({isLoading:!0,isLoaded:I.has(S),image:n},f)),I.has(S)||(t=requestAnimationFrame((()=>{C.current&&(r=i(C.current,S,I,s,g,m,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{I.has(S)&&O&&(C.current.innerHTML=O(o({isLoading:I.has(S),isLoaded:I.has(S),image:n},f)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[n]),(0,r.createElement)(t,o({},L,{style:o({},E,s,{backgroundColor:u}),className:k+(d?" "+d:""),ref:C,dangerouslySetInnerHTML:{__html:x},suppressHydrationWarning:!0}))},P=(0,r.memo)((function(e){return e.image?(0,r.createElement)(Z,e):null}));P.propTypes=j,P.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function q(e){return function(t){let{src:a,__imageData:n,__error:s}=t,l=i(t,R);return s&&console.warn(s),n?r.createElement(e,o({image:n},l)):(console.warn("Image not loaded",a),null)}}const A=q((function(e){let{as:t="div",className:a,class:n,style:s,image:l,loading:p="lazy",imgClassName:g,imgStyle:h,backgroundColor:f,objectFit:y,objectPosition:b}=e,w=i(e,L);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),h=o({objectFit:y,objectPosition:b,backgroundColor:f},h);const{width:v,height:x,layout:j,images:T,placeholder:N,backgroundColor:I}=l,_=c(v,x,j),{style:O,className:Z}=_,P=i(_,C),R={fallback:void 0,sources:[]};return T.fallback&&(R.fallback=o({},T.fallback,{srcSet:T.fallback.srcSet?S(T.fallback.srcSet):void 0})),T.sources&&(R.sources=T.sources.map((e=>o({},e,{srcSet:S(e.srcSet)})))),r.createElement(t,o({},P,{style:o({},O,s,{backgroundColor:f}),className:Z+(a?" "+a:"")}),r.createElement(m,{layout:j,width:v,height:x},r.createElement(E,o({},d(N,!1,j,v,x,I,y,b))),r.createElement(k,o({"data-gatsby-image-ssr":"",className:g},w,u("eager"===p,!1,R,p,h)))))})),z=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},M=new Set(["fixed","fullWidth","constrained"]),W={src:s().string.isRequired,alt:x,width:z,height:z,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};A.displayName="StaticImage",A.propTypes=W;const D=q(P);D.displayName="StaticImage",D.propTypes=W},829:function(e,t,a){a.r(t),a.d(t,{Head:function(){return l}});var r=a(8733),n=a(795),s=a(1582),o=a(8032),i=a(9357);const l=()=>(0,r.tZ)(i.Z,{title:"Projects"});t.default=()=>(0,r.tZ)(s.Z,null,(0,r.tZ)("h1",null,"Projects.(Pending)"),(0,r.tZ)(n.rj,{columns:[2,"1fr 1fr"],sx:{display:"grid",gridGap:1,gridTemplateColumns:["auto"]}},(0,r.tZ)(n.xu,null,(0,r.tZ)(n.OL,{href:"https://www.linkedin.com/in/johnson-shan-b9a373168/",target:"_blank"},(0,r.tZ)(n.Zb,null,(0,r.tZ)(o.S,{src:"/images/todomobileui.png",__error:'No data found for image "/images/todomobileui.png"\n              undefinedCould not read image data file "/Users/johnson/Documents/workspace/portfolio/.cache/caches/gatsby-plugin-image/2264133835.json". \nThis may mean that the images in "/Users/johnson/Documents/workspace/portfolio/src/pages/projects/portfolio.js" were not processed.\nPlease ensure that your gatsby version is at least 2.24.78.'}),(0,r.tZ)(n.xv,null,"To Do")))),(0,r.tZ)(n.xu,null,(0,r.tZ)(n.OL,{href:"https://www.linkedin.com/in/johnson-shan-b9a373168/",target:"_blank"},(0,r.tZ)(n.Zb,null,(0,r.tZ)(o.S,{src:"/images/myShop.png",__error:'No data found for image "/images/myShop.png"\n              undefinedCould not read image data file "/Users/johnson/Documents/workspace/portfolio/.cache/caches/gatsby-plugin-image/1998712621.json". \nThis may mean that the images in "/Users/johnson/Documents/workspace/portfolio/src/pages/projects/portfolio.js" were not processed.\nPlease ensure that your gatsby version is at least 2.24.78.'}),(0,r.tZ)(n.xv,null,"My shop"))))))}}]);
//# sourceMappingURL=component---src-pages-projects-portfolio-js-add176500e6ced099c6f.js.map