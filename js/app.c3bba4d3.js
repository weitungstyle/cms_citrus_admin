(function(e){function n(n){for(var r,o,u=n[0],i=n[1],l=n[2],d=0,s=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&s.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(n);while(s.length)s.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==a[u]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0c719b4d":"7a4ab597","chunk-2d9555f4":"0ffeb518","chunk-49970a4e":"945d713a","chunk-76d669cb":"563e1caa","chunk-99d13616":"1586c997"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-0c719b4d":1,"chunk-76d669cb":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-0c719b4d":"cc1af1cd","chunk-2d9555f4":"31d6cfe0","chunk-49970a4e":"31d6cfe0","chunk-76d669cb":"a7ad054e","chunk-99d13616":"31d6cfe0"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var l=c[u],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===a))return n()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){l=s[u],d=l.getAttribute("data-href");if(d===r||d===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],f.parentNode.removeChild(f),t(c)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=c);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var s=new Error;l=function(n){d.onerror=d.onload=null,clearTimeout(f);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,t[1](s)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/citrus_com_admin/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=n,l=l.slice();for(var s=0;s<l.length;s++)n(l[s]);var f=d;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("4de4"),t("ac1f"),t("5319"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=t("bc3a"),a=t.n(o),c=t("a7fe"),u=t.n(c),i=t("9062"),l=t.n(i),d=(t("e40d"),t("4989"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)}),s=[],f={name:"App"},p=f,h=(t("5c0b"),t("2877")),m=Object(h["a"])(p,d,s,!1,null,null,null),b=m.exports,g=(t("d3b7"),t("8c4f"));r["a"].use(g["a"]);var v=[{path:"/login",name:"Login",component:function(){return t.e("chunk-0c719b4d").then(t.bind(null,"a55b"))}},{path:"*",redirect:"/login"},{path:"/admin",name:"Layout",component:function(){return t.e("chunk-76d669cb").then(t.bind(null,"ebad"))},children:[{path:"orders",name:"Orders",component:function(){return t.e("chunk-2d9555f4").then(t.bind(null,"159d"))},meta:{requiresAuth:!0}},{path:"products",name:"Products",component:function(){return t.e("chunk-99d13616").then(t.bind(null,"e6dc"))},meta:{requiresAuth:!0}},{path:"coupons",name:"Coupons",component:function(){return t.e("chunk-49970a4e").then(t.bind(null,"f329"))},meta:{requiresAuth:!0}}]}],y=new g["a"]({routes:v,linkActiveClass:"active"}),k=y;r["a"].prototype.$bus=new r["a"];t("a9e3"),t("b680");var w=function(e){var n=Number(e);return"$".concat(n.toFixed(0).replace(/./g,(function(e,n,t){var r=n&&"."!==e&&(t.length-n)%3===0?", ".concat(e).replace(/\s/g,""):e;return r})))},O=function(e){var n=new Date(1e3*e),t=n.getFullYear()+"-",r=(n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1)+"-",o=n.getDate()+" ";return t+r+o};r["a"].config.productionTip=!1,r["a"].use(u.a,a.a),r["a"].component("Loading",l.a),r["a"].filter("currency",w),r["a"].filter("transdate",O),new r["a"]({router:k,render:function(e){return e(b)}}).$mount("#app"),k.beforeEach((function(e,n,t){if(e.meta.requiresAuth){var r="".concat("https://winged-record-377208.de.r.appspot.com","/api/user/check"),o=document.cookie.replace(/(?:(?:^|.*;\s*)loginToken\s*=\s*([^;]*).*$)|^.*$/,"$1");a.a.defaults.headers.common.Authorization="Bearer ".concat(o),a.a.post(r).then((function(e){t()})).catch((function(e){console.log("main.js => ",r,e),t({path:"/login"})}))}else t()}))},"5c0b":function(e,n,t){"use strict";var r=t("9c0c"),o=t.n(r);o.a},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.c3bba4d3.js.map