(function(e){function t(t){for(var r,o,c=t[0],u=t[1],s=t[2],l=0,f=[];l<c.length;l++)o=c[l],i[o]&&f.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},i={app:0},a=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-10030807":"2755a703","chunk-412669fc":"ccbd0513","chunk-b846cb96":"3835f6f9","chunk-c089409a":"6c1d1073","chunk-d6e54798":"7426411b"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-10030807":1,"chunk-412669fc":1,"chunk-b846cb96":1,"chunk-c089409a":1,"chunk-d6e54798":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-10030807":"7ae69e53","chunk-412669fc":"118edba7","chunk-b846cb96":"7aa6b7d7","chunk-c089409a":"4368e144","chunk-d6e54798":"df9796a1"}[e]+".css",i=u.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var s=a[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===i))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],d.parentNode.removeChild(d),n(a)},d.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){o[e]=0}));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,n){r=i[e]=[t,n]});t.push(r[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e),s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}i[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"466a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app"},[r("div",{staticClass:"nav"},[r("img",{staticClass:"logo",attrs:{alt:"Vue logo",src:n("cf05")}}),r("router-link",{attrs:{to:"/"}},[e._v("Home")]),r("router-link",{attrs:{to:"/walking-horse"}},[e._v("Walking horse")]),r("router-link",{attrs:{to:"/xo"}},[e._v("XO game")]),r("router-link",{attrs:{to:"/fiddle"}},[e._v("Fiddle notes")]),r("router-link",{attrs:{to:"/other"}},[e._v("Other")]),r("a",{staticClass:"telegram",attrs:{href:"https://t.me/jsrules"}},[e._v("JS Rules (Telegram)")])],1),r("router-view")],1)},i=[],a=(n("5c0b"),n("f77f"),n("2877")),c={},u=Object(a["a"])(c,o,i,!1,null,"474d4604",null),s=u.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Description")],1)},d=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Description"},[n("h2",{staticClass:"title"},[e._v("Welcome to vue example")]),n("article",[e._v("\n    Here you probably can find nothing useful\n    "),e._m(0),e._v("\n    How the alone horse walking on the board "),n("router-link",{attrs:{to:"/walking-horse"}},[e._v("here")]),e._v(".\n    "),n("br"),n("br"),e._v("\n    Play in XO game "),n("router-link",{attrs:{to:"/xo"}},[e._v("here")]),e._v(".\n    "),n("br"),n("br"),e._v("\n    Some fiddles HTML/CSS/JS "),n("router-link",{attrs:{to:"/fiddle"}},[e._v("here")]),e._v(".\n    "),n("br"),n("br"),e._v("\n    Other projects on github "),n("router-link",{attrs:{to:"/other"}},[e._v("here")]),e._v(".\n    "),n("br"),n("br")],1),n("div",{staticClass:"warning"},[e._v("Don't look at vue code please, save your eyes.")])])},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("i",[e._v("But if you still here, you can look at some examples:")])])}],m={name:"Description"},v=m,b=(n("fa36"),Object(a["a"])(v,h,p,!1,null,"13991388",null)),g=b.exports,y={name:"home",components:{Description:g}},k=y,w=Object(a["a"])(k,f,d,!1,null,"1b78cb86",null),_=w.exports;r["a"].use(l["a"]);var O=new l["a"]({routes:[{path:"/",name:"home",component:_},{path:"/walking-horse",name:"walking-horse",component:function(){return n.e("chunk-c089409a").then(n.bind(null,"fbf5"))}},{path:"/xo",name:"xo",component:function(){return n.e("chunk-d6e54798").then(n.bind(null,"0b03"))}},{path:"/fiddle",name:"fiddle",component:function(){return n.e("chunk-10030807").then(n.bind(null,"4eb1"))}},{path:"/other",name:"other",component:function(){return n.e("chunk-b846cb96").then(n.bind(null,"d180"))}},{path:"/*",name:"404",component:function(){return n.e("chunk-412669fc").then(n.bind(null,"8cdb"))}}]}),x=n("2f62"),S={state:{history:[],delay:250},mutations:{updateHistory:function(e,t){e.history.push(t)},cleanHistory:function(e){e.history=[]},updateDelay:function(e,t){e.delay=t}},actions:{addHistory:function(e,t){e.commit("updateHistory",t)},clearHistory:function(e){e.commit("cleanHistory")},setDelay:function(e,t){e.commit("updateDelay",t)}},getters:{history:function(e){return e.history},delay:function(e){return e.delay}}},j={state:{winsX:0,winsO:0},mutations:{xWin:function(e){e.winsX++},oWin:function(e){e.winsO++},resetScore:function(e){e.winsX=0,e.winsO=0}},actions:{win:function(e,t){e.commit("X"===t?"xWin":"oWin")},resetXO:function(e){e.commit("resetScore")}},getters:{winsX:function(e){return e.winsX},winsO:function(e){return e.winsO}}};r["a"].use(x["a"]);var C=new x["a"].Store({modules:{chessHorse:S,xo:j}}),E=n("9483");Object(E["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({router:O,store:C,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d897:function(e,t,n){},f77f:function(e,t,n){"use strict";var r=n("466a"),o=n.n(r);o.a},fa36:function(e,t,n){"use strict";var r=n("d897"),o=n.n(r);o.a}});
//# sourceMappingURL=app.9f300b15.js.map