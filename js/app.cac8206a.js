(function(t){function e(e){for(var n,o,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==i[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),i=a.n(n);i.a},"04aa":function(t,e,a){"use strict";var n=a("70e5"),i=a.n(n);i.a},"0ff5":function(t,e,a){},"102a":function(t,e,a){"use strict";var n=a("14f4"),i=a.n(n);i.a},"145d":function(t,e,a){"use strict";var n=a("a06f"),i=a.n(n);i.a},1463:function(t,e,a){"use strict";var n=a("9ff8"),i=a.n(n);i.a},"14f4":function(t,e,a){},"22dd":function(t,e,a){"use strict";var n=a("906f"),i=a.n(n);i.a},"2b13":function(t,e,a){},"50ce":function(t,e,a){"use strict";var n=a("2b13"),i=a.n(n);i.a},"520d":function(t,e,a){"use strict";var n=a("af8b"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=a("8c4f"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],s={name:"App"},c=s,l=(a("034f"),a("2877")),u=Object(l["a"])(c,r,o,!1,null,null,null),d=u.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home-container"}},[a("HomeHeader"),a("HomeInnerButtons")],1)},v=[],m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"header-container"}},[a("h1",{attrs:{id:"name-header"}},[t._v(" łukASZ"),a("br"),t._v(" NieDZiAłek ")]),a("div",{attrs:{id:"icons-container"}},[a("a",{attrs:{href:"https://github.com/GenixPL",target:"_blank"}},[a("div",{staticClass:"outer-button-icon",attrs:{id:"github-icon"}})]),a("a",{attrs:{href:"https://www.youtube.com/channel/UC8iFSZEpTSbq8ActXXbvyfw?view_as=subscriber",target:"_blank"}},[a("div",{staticClass:"outer-button-icon",attrs:{id:"yt-icon"}})]),a("a",{attrs:{href:"https://rive.app/a/Genix/files/recent/all",target:"_blank"}},[a("div",{staticClass:"outer-button-icon",attrs:{id:"rive-icon"}})]),a("a",{attrs:{href:"https://www.goodreads.com/user/show/86850107-lukasz",target:"_blank"}},[a("div",{staticClass:"outer-button-icon",attrs:{id:"gg-icon"}})])])])}],h={name:"HomeHeader"},b=h,g=(a("102a"),Object(l["a"])(b,m,f,!1,null,"26f3200a",null)),_=g.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"inner-buttons-div"}},[a("HomeInnerButton",{attrs:{title:"RESUME",path:"/resume"}}),a("HomeInnerButton",{attrs:{title:"PORTFOLIO",path:"/portfolio"}}),a("HomeInnerButton",{attrs:{title:"CONTACT",path:"/contact"}})],1)},O=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{staticClass:"routerLink",attrs:{to:t.path}},[a("div",{attrs:{id:"inner-button-container"}},[a("h3",{attrs:{id:"inner-button-text"}},[t._v(" "+t._s(t.title)+" ")])])])},E=[],B={name:"HomeInnerButton",props:{title:String,path:String}},N=B,y=(a("520d"),Object(l["a"])(N,C,E,!1,null,"126205c7",null)),w=y.exports,T={name:"HomeInnerButtons",components:{HomeInnerButton:w}},H=T,k=(a("22dd"),Object(l["a"])(H,x,O,!1,null,"488abcc2",null)),q=k.exports,S={name:"Home",components:{HomeInnerButtons:q,HomeHeader:_}},j=S,A=(a("04aa"),Object(l["a"])(j,p,v,!1,null,"8c8fdce4",null)),P=A.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar",{attrs:{"enlarged-position":2}}),a("div",{attrs:{id:"wip-text"}},[t._v("WORK IN PROGRESS")]),a("div",{attrs:{id:"second-text"}},[t._v("You can download pdf version for now")]),a("a",{staticClass:"download-button",attrs:{href:"https://genixpl.github.io/download/lukasz-niedzialek-cv.pdf",download:""}},[t._v(" DOWNLOAD ")])],1)},L=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"navBar-container"}},[a("router-link",{staticClass:"routerLink",attrs:{to:"/"}},[a("div",{staticClass:"page-text",class:[1===t.enlargedPosition?"enlarged-text":""]},[t._v("HOME")])]),a("router-link",{staticClass:"routerLink",attrs:{to:"/resume"}},[a("div",{staticClass:"page-text",class:[2===t.enlargedPosition?"enlarged-text":""]},[t._v("RESUME")])]),a("router-link",{staticClass:"routerLink",attrs:{to:"/portfolio"}},[a("div",{staticClass:"page-text",class:[3===t.enlargedPosition?"enlarged-text":""]},[t._v("PORTFOLIO")])]),a("router-link",{staticClass:"routerLink",attrs:{to:"/contact"}},[a("div",{staticClass:"page-text",class:[4===t.enlargedPosition?"enlarged-text":""]},[t._v("CONTACT")])])],1)},D=[],R=(a("a9e3"),{name:"NavBar",props:{enlargedPosition:Number}}),M=R,U=(a("145d"),Object(l["a"])(M,I,D,!1,null,"4edce6a9",null)),F=U.exports,G={name:"Resume",components:{NavBar:F}},z=G,W=(a("1463"),Object(l["a"])(z,$,L,!1,null,"4230c03a",null)),J=W.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar",{attrs:{"enlarged-position":3}}),a("div",{attrs:{id:"groups-container"}},[a("div",{staticClass:"group-container",attrs:{id:"group-1"}},[a("div",{staticClass:"group-header"},[t._v("DEVELOPED APPS")]),a("NavigateButton",{attrs:{navigateTo:"/developed-apps"}})],1),a("div",{staticClass:"group-container",attrs:{id:"group-2"}},[a("div",{staticClass:"group-header"},[t._v("ALGORITHMS")]),a("NavigateButton",{attrs:{navigateTo:"/algorithms"}})],1),a("div",{staticClass:"group-container",attrs:{id:"group-3"}},[a("div",{staticClass:"group-header"},[t._v("HACKATHONS")]),a("div",{staticStyle:{background:"cadetblue",width:"100%"}},[a("NavigateButton",{attrs:{navigateTo:"/hackathons"}})],1)]),a("div",{staticClass:"group-container",attrs:{id:"group-4"}},[a("div",{staticClass:"group-header"},[t._v("FLUTTER STUFF")]),a("NavigateButton",{attrs:{navigateTo:"/flutter-stuff"}})],1)])],1)},Z=[],Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{display:"inline"}},[a("router-link",{staticClass:"routerLink",attrs:{to:t.navigateTo}},[a("div",{staticClass:"nav-button"},[t._v("SEE MORE")])])],1)},V=[],X={name:"NavigateButton",props:{navigateTo:String}},Y=X,tt=(a("ac5a"),Object(l["a"])(Y,Q,V,!1,null,"447b2a59",null)),et=tt.exports,at={name:"Portfolio",components:{NavigateButton:et,NavBar:F}},nt=at,it=(a("f81d"),Object(l["a"])(nt,K,Z,!1,null,"4449007a",null)),rt=it.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100vh","min-height":"360pt",display:"flex","flex-direction":"column"}},[a("NavBar",{ref:"navBar",attrs:{"enlarged-position":4}}),t._m(0)],1)},st=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"contact-container"}},[a("div",{staticStyle:{height:"100%",display:"flex","flex-direction":"column","justify-content":"center"}},[a("div",{staticStyle:{"padding-left":"4pt"}},[a("div",{attrs:{id:"contact-me-text"}},[t._v("CONTACT ME")])]),a("div",{staticClass:"contact-info-text"},[t._v("If you have any questions or offers, please feel free to write.")]),a("div",{attrs:{id:"email-text"}},[t._v("lhniedzialek@gmail.com")])])])}],ct={name:"Contact",components:{NavBar:F}},lt=ct,ut=(a("7142"),Object(l["a"])(lt,ot,st,!1,null,"f6e48ba2",null)),dt=ut.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar"),a("div",{staticClass:"header-text"},[t._v("DEVELOPED APPS")]),a("ArticleHeader",{attrs:{id:"placelytics",title:"Placelytics",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",navigateTo:"/developed-apps/placelytics"}}),a("ArticleHeader",{attrs:{id:"pictile",title:"Pictile",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",navigateTo:"/developed-apps/pictile"}}),a("ArticleHeader",{attrs:{id:"thg",title:"The Hardest Game",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",navigateTo:"/developed-apps/the-hardest-game"}}),a("ArticleHeader",{attrs:{id:"quarantino",title:"Quarantino",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",navigateTo:"/developed-apps/quarantino"}}),a("ArticleHeader",{attrs:{id:"website",title:"This website",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",navigateTo:"/developed-apps/website"}}),a("ArticleHeader",{attrs:{id:"my-word",title:"MyWord",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",navigateTo:"/developed-apps/my-word"}})],1)},vt=[],mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-container"},[a("div",{staticClass:"button-container"},[a("NavigateButton",{attrs:{navigateTo:t.navigateTo}})],1),a("div",{staticClass:"text-container"},[a("div",{staticClass:"article-header"},[t._v(t._s(t.title))]),a("div",{staticClass:"article-text"},[t._v(t._s(t.text))])])])},ft=[],ht={name:"ArticleHeader",components:{NavigateButton:et},props:{title:String,text:String,navigateTo:String}},bt=ht,gt=(a("80fd"),Object(l["a"])(bt,mt,ft,!1,null,"63e13359",null)),_t=gt.exports,xt={name:"DevelopedApps",components:{ArticleHeader:_t,NavBar:F}},Ot=xt,Ct=(a("50ce"),Object(l["a"])(Ot,pt,vt,!1,null,"7cbeba04",null)),Et=Ct.exports,Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar"),a("div",{staticClass:"header-text"},[t._v("ALGORITHMS")]),a("div",{staticClass:"article-header"},[t._v("Array slices with dynamic programming")])],1)},Nt=[],yt={name:"Algorithms",components:{NavBar:F}},wt=yt,Tt=(a("a5b4"),Object(l["a"])(wt,Bt,Nt,!1,null,"237646b6",null)),Ht=Tt.exports,kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar"),a("div",{staticClass:"header-text"},[t._v("HACKATHONS")]),a("div",{staticClass:"article-header"},[t._v("Hack the Crisis (aka Joke)")]),a("div",{staticClass:"article-header"},[t._v("Facebook")]),a("div",{staticClass:"article-header"},[t._v("Daftcode / Indoorway")])],1)},qt=[],St={name:"Hackathons",components:{NavBar:F}},jt=St,At=(a("dd8e"),Object(l["a"])(jt,kt,qt,!1,null,"51950555",null)),Pt=At.exports,$t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar"),a("div",{staticClass:"header-text"},[t._v("FLUTTER STUFF")]),a("div",{staticClass:"header-text"},[t._v("Home page with world map")]),a("div",{staticClass:"header-text"},[t._v("Animated tiles show up")]),a("div",{staticClass:"header-text"},[t._v("Slide transition")])],1)},Lt=[],It={name:"FlutterStuff",components:{NavBar:F}},Dt=It,Rt=(a("66aa"),Object(l["a"])(Dt,$t,Lt,!1,null,"c51f0f1e",null)),Mt=Rt.exports,Ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar"),a("div",{staticClass:"header-text"},[t._v("OTHER ARTICLES")])],1)},Ft=[],Gt={name:"OtherArticles",components:{NavBar:F}},zt=Gt,Wt=(a("7bcd"),Object(l["a"])(zt,Ut,Ft,!1,null,"0725c8d6",null)),Jt=Wt.exports,Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar")],1)},Zt=[],Qt={name:"Placelytics",components:{NavBar:F}},Vt=Qt,Xt=Object(l["a"])(Vt,Kt,Zt,!1,null,"4889c937",null),Yt=Xt.exports,te=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar")],1)},ee=[],ae={name:"pictile",components:{NavBar:F}},ne=ae,ie=Object(l["a"])(ne,te,ee,!1,null,"778279b4",null),re=ie.exports,oe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar")],1)},se=[],ce={name:"TheHardestGame",components:{NavBar:F}},le=ce,ue=Object(l["a"])(le,oe,se,!1,null,"47759efa",null),de=ue.exports,pe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar")],1)},ve=[],me={name:"Quarantino",components:{NavBar:F}},fe=me,he=Object(l["a"])(fe,pe,ve,!1,null,"1a9cf10c",null),be=he.exports,ge=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar")],1)},_e=[],xe={name:"Website",components:{NavBar:F}},Oe=xe,Ce=Object(l["a"])(Oe,ge,_e,!1,null,"82697286",null),Ee=Ce.exports,Be=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar")],1)},Ne=[],ye={name:"MyWord",components:{NavBar:F}},we=ye,Te=Object(l["a"])(we,Be,Ne,!1,null,"6e73cfee",null),He=Te.exports;n["a"].use(i["a"]);var ke=[{path:"/",component:P},{path:"/resume",component:J},{path:"/portfolio",component:rt},{path:"/contact",component:dt},{path:"/developed-apps",component:Et},{path:"/developed-apps/placelytics",component:Yt},{path:"/developed-apps/pictile",component:re},{path:"/developed-apps/the-hardest-game",component:de},{path:"/developed-apps/quarantino",component:be},{path:"/developed-apps/website",component:Ee},{path:"/developed-apps/my-word",component:He},{path:"/algorithms",component:Ht},{path:"/hackathons",component:Pt},{path:"/flutter-stuff",component:Mt},{path:"/other-articles",component:Jt}],qe=new i["a"]({routes:ke});qe.beforeEach((function(t,e,a){document.title="Niedziałek Łukasz | Portfolio",a()})),new n["a"]({render:function(t){return t(d)},router:qe}).$mount("#app")},"66aa":function(t,e,a){"use strict";var n=a("c9b7"),i=a.n(n);i.a},"70e5":function(t,e,a){},7142:function(t,e,a){"use strict";var n=a("b678"),i=a.n(n);i.a},"7bcd":function(t,e,a){"use strict";var n=a("9333"),i=a.n(n);i.a},"80fd":function(t,e,a){"use strict";var n=a("8aef"),i=a.n(n);i.a},"85ec":function(t,e,a){},"8aef":function(t,e,a){},"906f":function(t,e,a){},9333:function(t,e,a){},"9ff8":function(t,e,a){},a06f:function(t,e,a){},a5b4:function(t,e,a){"use strict";var n=a("b74b"),i=a.n(n);i.a},ac5a:function(t,e,a){"use strict";var n=a("0ff5"),i=a.n(n);i.a},af8b:function(t,e,a){},b528:function(t,e,a){},b678:function(t,e,a){},b74b:function(t,e,a){},bc36:function(t,e,a){},c9b7:function(t,e,a){},dd8e:function(t,e,a){"use strict";var n=a("bc36"),i=a.n(n);i.a},f81d:function(t,e,a){"use strict";var n=a("b528"),i=a.n(n);i.a}});
//# sourceMappingURL=app.cac8206a.js.map