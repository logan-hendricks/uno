(function(t){function e(e){for(var r,i,l=e[0],u=e[1],c=e[2],s=0,f=[];s<l.length;s++)i=l[s],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},a={app:0},o=[];function i(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c14e3c7e"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(t);var c=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(s);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}a[t]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-content",[n("v-btn",{attrs:{to:"/"}},[t._v("Login")]),n("router-view")],1)],1)},o=[],i={name:"App",components:{},data:function(){return{}},methods:{}},l=i,u=n("2877"),c=n("6544"),s=n.n(c),p=n("7496"),f=n("8336"),d=n("a75b"),v=Object(u["a"])(l,a,o,!1,null,null,null),m=v.exports;s()(v,{VApp:p["a"],VBtn:f["a"],VContent:d["a"]});n("d3b7");var b=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Login")],1)},g=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-content",[n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[n("v-toolbar-title",[t._v("Uno Login")]),n("v-spacer"),n("v-tooltip",{attrs:{bottom:""}})],1),n("v-card-text",[n("v-form",[n("v-text-field",{attrs:{label:"GAME ID",type:"text"},model:{value:t.game_id,callback:function(e){t.game_id=e},expression:"game_id"}}),n("v-btn",{attrs:{color:"primary",to:t.to},nativeOn:{click:function(e){return t.login(e)}}},[t._v("Join Game")]),n("v-btn",{attrs:{color:"primary"}},[t._v("Create new game")])],1)],1)],1)],1)],1)],1)],1)],1)},_=[],w={name:"LoginPage",data:function(){return{game_id:null,valid_game:!1,to:{}}},methods:{login:function(){12234==this.game_id&&(this.valid_game=!0),this.to={name:"About",params:{game_id:this.game_id,valid:this.valid_game}}}}},V=w,j=n("b0af"),x=n("99d9"),O=n("62ad"),C=n("a523"),T=n("4bd4"),P=n("0fd9"),k=n("2fa4"),A=n("8654"),E=n("71d9"),L=n("2a7f"),S=n("3a2f"),M=Object(u["a"])(V,y,_,!1,null,null,null),$=M.exports;s()(M,{VApp:p["a"],VBtn:f["a"],VCard:j["a"],VCardText:x["a"],VCol:O["a"],VContainer:C["a"],VContent:d["a"],VForm:T["a"],VRow:P["a"],VSpacer:k["a"],VTextField:A["a"],VToolbar:E["a"],VToolbarTitle:L["a"],VTooltip:S["a"]});var J={name:"Home",components:{Login:$}},B=J,F=Object(u["a"])(B,h,g,!1,null,null,null),G=F.exports;r["a"].use(b["a"]);var H=[{path:"/",name:"Home",component:G,props:!0},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))},props:!0}],q=new b["a"]({mode:"history",base:"/",routes:H}),D=q,I=n("f309");r["a"].use(I["a"]);var R=new I["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:D,vuetify:R,render:function(t){return t(m)}}).$mount("#app")}});
//# sourceMappingURL=app.1a8c2ba4.js.map