(function(e){function t(t){for(var r,o,a=t[0],s=t[1],u=t[2],l=0,f=[];l<a.length;l++)o=a[l],i[o]&&f.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==i[a]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},i={app:0},c=[];function a(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-22b21a24":"017dc96d","chunk-412669fc":"ccbd0513","chunk-5552ae7c":"fdbb42c1","chunk-c089409a":"6c1d1073","chunk-d4b3fd9c":"b56e5208","chunk-d6e54798":"7426411b"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-22b21a24":1,"chunk-412669fc":1,"chunk-5552ae7c":1,"chunk-c089409a":1,"chunk-d4b3fd9c":1,"chunk-d6e54798":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-22b21a24":"337a3878","chunk-412669fc":"118edba7","chunk-5552ae7c":"032f8c99","chunk-c089409a":"4368e144","chunk-d4b3fd9c":"511bc245","chunk-d6e54798":"df9796a1"}[e]+".css",i=s.p+r,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var u=c[a],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return t()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){u=f[a],l=u.getAttribute("data-href");if(l===r||l===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||i,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){o[e]=0}));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=i[e]=[t,n]});t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=a(e),u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");c.type=r,c.request=o,n[1](c)}i[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"070d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app"},[r("div",{staticClass:"nav"},[r("router-link",{attrs:{to:"/"}},[r("img",{staticClass:"logo",attrs:{alt:"Vue logo",src:n("cf05")}})]),r("router-link",{attrs:{to:"/"}},[e._v("Home")]),r("router-link",{attrs:{to:"/walking-horse"}},[e._v("Walking horse")]),r("router-link",{attrs:{to:"/xo"}},[e._v("XO game")]),r("router-link",{attrs:{to:"/fiddle"}},[e._v("Fiddle notes")]),r("router-link",{attrs:{to:"/other"}},[e._v("Other projects")]),r("router-link",{attrs:{to:"/bookmarks"}},[e._v("Bookmarks")]),e._m(0)],1),r("router-view")],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"contact"},[n("a",{attrs:{href:"https://t.me/h_split"}},[e._v("Telegram")]),n("br"),n("a",{attrs:{href:"https://www.linkedin.com/in/oleg-sak/"}},[e._v("LinkedIn")])])}],c=(n("5c0b"),n("7690"),n("2877")),a={},s=Object(c["a"])(a,o,i,!1,null,"1eee3fd0",null),u=s.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Description")],1)},d=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Description"},[n("h2",{staticClass:"title"},[e._v("Welcome to vue example")]),n("article",[e._v("\n    Here you probably can find nothing useful\n    "),e._m(0),e._v("\n    How the alone horse walking on the board "),n("router-link",{attrs:{to:"/walking-horse"}},[e._v("here")]),e._v(".\n    "),n("br"),n("br"),e._v("\n    Play in XO game "),n("router-link",{attrs:{to:"/xo"}},[e._v("here")]),e._v(".\n    "),n("br"),n("br"),e._v("\n    Some fiddles HTML/CSS/JS "),n("router-link",{attrs:{to:"/fiddle"}},[e._v("here")]),e._v(".\n    "),n("br"),n("br"),e._v("\n    Other projects on github "),n("router-link",{attrs:{to:"/other"}},[e._v("here")]),e._v(".\n    "),n("br"),n("br"),n("a",{attrs:{href:"https://github.com/hsplit/hsplit.github.io"}},[e._v("Repo")]),e._v(" of this project.\n  ")],1),n("div",{staticClass:"warning"},[e._v("Don't look at vue code please, save your eyes.")])])},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("i",[e._v("But if you still here, you can look at some examples:")])])}],m={name:"Description"},v=m,b=(n("9b1e"),Object(c["a"])(v,h,p,!1,null,"69fbfe17",null)),g=b.exports,k={name:"home",components:{Description:g}},y=k,_=Object(c["a"])(y,f,d,!1,null,"1b78cb86",null),w=_.exports;r["a"].use(l["a"]);var O=new l["a"]({routes:[{path:"/",name:"home",component:w},{path:"/walking-horse",name:"walking-horse",component:function(){return n.e("chunk-c089409a").then(n.bind(null,"fbf5"))}},{path:"/xo",name:"xo",component:function(){return n.e("chunk-d6e54798").then(n.bind(null,"0b03"))}},{path:"/fiddle",name:"fiddle",component:function(){return n.e("chunk-22b21a24").then(n.bind(null,"4eb1"))}},{path:"/other",name:"other",component:function(){return n.e("chunk-d4b3fd9c").then(n.bind(null,"d180"))}},{path:"/bookmarks",name:"bookmarks",component:function(){return n.e("chunk-5552ae7c").then(n.bind(null,"b51b"))}},{path:"/*",name:"404",component:function(){return n.e("chunk-412669fc").then(n.bind(null,"8cdb"))}}]}),x=n("2f62"),j={state:{history:[],delay:250},mutations:{updateHistory:function(e,t){e.history.push(t)},cleanHistory:function(e){e.history=[]},updateDelay:function(e,t){e.delay=t}},actions:{addHistory:function(e,t){e.commit("updateHistory",t)},clearHistory:function(e){e.commit("cleanHistory")},setDelay:function(e,t){e.commit("updateDelay",t)}},getters:{history:function(e){return e.history},delay:function(e){return e.delay}}},S={state:{winsX:0,winsO:0},mutations:{xWin:function(e){e.winsX++},oWin:function(e){e.winsO++},resetScore:function(e){e.winsX=0,e.winsO=0}},actions:{win:function(e,t){e.commit("X"===t?"xWin":"oWin")},resetXO:function(e){e.commit("resetScore")}},getters:{winsX:function(e){return e.winsX},winsO:function(e){return e.winsO}}};r["a"].use(x["a"]);var C=new x["a"].Store({modules:{chessHorse:j,xo:S}}),E=n("9483");Object(E["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({router:O,store:C,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){},7690:function(e,t,n){"use strict";var r=n("070d"),o=n.n(r);o.a},"9b1e":function(e,t,n){"use strict";var r=n("a358"),o=n.n(r);o.a},a358:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.7de2f596.js.map