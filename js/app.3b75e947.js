(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],d=0,v=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&v.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"04aa":function(t,e,a){"use strict";var n=a("70e5"),r=a.n(n);r.a},"102a":function(t,e,a){"use strict";var n=a("14f4"),r=a.n(n);r.a},1463:function(t,e,a){"use strict";var n=a("9ff8"),r=a.n(n);r.a},"14f4":function(t,e,a){},"22dd":function(t,e,a){"use strict";var n=a("906f"),r=a.n(n);r.a},"326d":function(t,e,a){"use strict";var n=a("4049"),r=a.n(n);r.a},4049:function(t,e,a){},"520d":function(t,e,a){"use strict";var n=a("af8b"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("8c4f"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],o={name:"App"},c=o,l=(a("034f"),a("2877")),u=Object(l["a"])(c,i,s,!1,null,null,null),d=u.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home-container"}},[a("HomeHeader"),a("HomeInnerButtons")],1)},f=[],p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"header-container"}},[a("h1",{attrs:{id:"name-header"}},[t._v(" łukASZ"),a("br"),t._v(" NieDZiAłek ")]),a("div",{attrs:{id:"icons-container"}},[a("a",{attrs:{href:"https://github.com/GenixPL",target:"_blank"}},[a("div",{staticClass:"outer-button-icon",attrs:{id:"github-icon"}})]),a("a",{attrs:{href:"https://www.youtube.com/channel/UC8iFSZEpTSbq8ActXXbvyfw?view_as=subscriber",target:"_blank"}},[a("div",{staticClass:"outer-button-icon",attrs:{id:"yt-icon"}})]),a("a",{attrs:{href:"https://rive.app/a/Genix/files/recent/all",target:"_blank"}},[a("div",{staticClass:"outer-button-icon",attrs:{id:"rive-icon"}})]),a("a",{attrs:{href:"https://www.goodreads.com/user/show/86850107-lukasz",target:"_blank"}},[a("div",{staticClass:"outer-button-icon",attrs:{id:"gg-icon"}})])])])}],m={name:"HomeHeader"},_=m,b=(a("102a"),Object(l["a"])(_,p,h,!1,null,"26f3200a",null)),g=b.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"inner-buttons-div"}},[a("HomeInnerButton",{attrs:{title:"RESUME",path:"/resume"}}),a("HomeInnerButton",{attrs:{title:"PORTFOLIO",path:"/portfolio"}}),a("HomeInnerButton",{attrs:{title:"CONTACT",path:"/contact"}})],1)},O=[],x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{staticClass:"routerLink",attrs:{to:t.path}},[a("div",{attrs:{id:"inner-button-container"}},[a("h3",{attrs:{id:"inner-button-text"}},[t._v(" "+t._s(t.title)+" ")])])])},E=[],k={name:"HomeInnerButton",props:{title:String,path:String}},w=k,y=(a("520d"),Object(l["a"])(w,x,E,!1,null,"126205c7",null)),S=y.exports,B={name:"HomeInnerButtons",components:{HomeInnerButton:S}},H=B,N=(a("22dd"),Object(l["a"])(H,C,O,!1,null,"488abcc2",null)),P=N.exports,j={name:"Home",components:{HomeInnerButtons:P,HomeHeader:g}},T=j,A=(a("04aa"),Object(l["a"])(T,v,f,!1,null,"8c8fdce4",null)),L=A.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar",{attrs:{"enlarged-position":2}}),a("div",{attrs:{id:"wip-text"}},[t._v("WORK IN PROGRESS")]),a("div",{attrs:{id:"second-text"}},[t._v("You can download pdf version for now")]),a("a",{staticClass:"download-button",attrs:{href:"https://genixpl.github.io/download/lukasz-niedzialek-cv.pdf",download:""}},[t._v(" DOWNLOAD ")])],1)},$=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"navBar-container"}},[a("router-link",{staticClass:"routerLink",attrs:{to:"/"}},[a("div",{staticClass:"page-text",class:[1===t.enlargedPosition?"enlarged-text":""]},[t._v("HOME")])]),a("router-link",{staticClass:"routerLink",attrs:{to:"/resume"}},[a("div",{staticClass:"page-text",class:[2===t.enlargedPosition?"enlarged-text":""]},[t._v("RESUME")])]),a("router-link",{staticClass:"routerLink",attrs:{to:"/portfolio"}},[a("div",{staticClass:"page-text",class:[3===t.enlargedPosition?"enlarged-text":""]},[t._v("PORTFOLIO")])]),a("router-link",{staticClass:"routerLink",attrs:{to:"/contact"}},[a("div",{staticClass:"page-text",class:[4===t.enlargedPosition?"enlarged-text":""]},[t._v("CONTACT")])])],1)},M=[],F=(a("a9e3"),{name:"NavBar",props:{enlargedPosition:Number}}),D=F,U=(a("6c4b"),Object(l["a"])(D,I,M,!1,null,"e252bf52",null)),z=U.exports,G={name:"Resume",components:{NavBar:z}},J=G,K=(a("1463"),Object(l["a"])(J,R,$,!1,null,"4230c03a",null)),W=K.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar",{staticStyle:{position:"sticky",top:"0"},attrs:{"enlarged-position":3}}),a("div",{attrs:{id:"groups-container"}},[a("div",{staticClass:"group-container",attrs:{id:"group-1"}},[a("div",{staticClass:"group-header"},[t._v("DEVELOPED APPS")]),a("router-link",{staticClass:"routerLink",attrs:{to:"/developed-apps"}},[a("div",{staticClass:"download-button"},[t._v("SEE MORE")])])],1),a("div",{staticClass:"group-container",attrs:{id:"group-2"}},[a("div",{staticClass:"group-header"},[t._v("ALGORITHMS")]),a("router-link",{staticClass:"routerLink",attrs:{to:"/algorithms"}},[a("div",{staticClass:"download-button"},[t._v("SEE MORE")])])],1),a("div",{staticClass:"group-container",attrs:{id:"group-3"}},[a("div",{staticClass:"group-header"},[t._v("HACKATHONS")]),a("router-link",{staticClass:"routerLink",attrs:{to:"/hackathons"}},[a("div",{staticClass:"download-button"},[t._v("SEE MORE")])])],1),a("div",{staticClass:"group-container",attrs:{id:"group-4"}},[a("div",{staticClass:"group-header"},[t._v("FLUTTER STUFF")]),a("router-link",{staticClass:"routerLink",attrs:{to:"/flutter-stuff"}},[a("div",{staticClass:"download-button"},[t._v("SEE MORE")])])],1)])],1)},q=[],V={name:"Portfolio",components:{NavBar:z}},X=V,Q=(a("326d"),Object(l["a"])(X,Z,q,!1,null,"60a0aa00",null)),Y=Q.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100vh","min-height":"360pt",display:"flex","flex-direction":"column"}},[a("NavBar",{ref:"navBar",attrs:{"enlarged-position":4}}),t._m(0)],1)},et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"contact-container"}},[a("div",{staticStyle:{height:"100%",display:"flex","flex-direction":"column","justify-content":"center"}},[a("div",{staticStyle:{"padding-left":"4pt"}},[a("div",{attrs:{id:"contact-me-text"}},[t._v("CONTACT ME")])]),a("div",{staticClass:"contact-info-text"},[t._v("If you have any questions or offers, please feel free to write.")]),a("div",{attrs:{id:"email-text"}},[t._v("lhniedzialek@gmail.com")])])])}],at={name:"Contact",components:{NavBar:z}},nt=at,rt=(a("7142"),Object(l["a"])(nt,tt,et,!1,null,"f6e48ba2",null)),it=rt.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar"),a("div",{staticClass:"header-text"},[t._v("DEVELOPED APPS")]),a("div",{staticClass:"article-header"},[t._v("Placelytics")]),a("div",{staticClass:"article-header"},[t._v("Pictile")]),a("div",{staticClass:"article-header"},[t._v("The Hardest Game")]),a("div",{staticClass:"article-header"},[t._v("Quarantino")]),a("div",{staticClass:"article-header"},[t._v("MyWord")]),a("div",{staticClass:"article-header"},[t._v("My first app")])],1)},ot=[],ct={name:"DevelopedApps",components:{NavBar:z}},lt=ct,ut=(a("c292"),Object(l["a"])(lt,st,ot,!1,null,"11391f3c",null)),dt=ut.exports,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar"),a("div",{staticClass:"header-text"},[t._v("ALGORITHMS")]),a("div",{staticClass:"article-header"},[t._v("Array slices with dynamic programming")])],1)},ft=[],pt={name:"Algorithms",components:{NavBar:z}},ht=pt,mt=(a("a5b4"),Object(l["a"])(ht,vt,ft,!1,null,"237646b6",null)),_t=mt.exports,bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar"),a("div",{staticClass:"header-text"},[t._v("HACKATHONS")]),a("div",{staticClass:"article-header"},[t._v("Hack the Crisis (aka Joke)")]),a("div",{staticClass:"article-header"},[t._v("Facebook")]),a("div",{staticClass:"article-header"},[t._v("Daftcode / Indoorway")])],1)},gt=[],Ct={name:"Hackathons",components:{NavBar:z}},Ot=Ct,xt=(a("dd8e"),Object(l["a"])(Ot,bt,gt,!1,null,"51950555",null)),Et=xt.exports,kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar"),a("div",{staticClass:"header-text"},[t._v("FLUTTER STUFF")]),a("div",{staticClass:"header-text"},[t._v("Home page with world map")]),a("div",{staticClass:"header-text"},[t._v("Animated tiles show up")]),a("div",{staticClass:"header-text"},[t._v("Slide transition")])],1)},wt=[],yt={name:"FlutterStuff",components:{NavBar:z}},St=yt,Bt=(a("66aa"),Object(l["a"])(St,kt,wt,!1,null,"c51f0f1e",null)),Ht=Bt.exports,Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar"),a("div",{staticClass:"header-text"},[t._v("OTHER ARTICLES")])],1)},Pt=[],jt={name:"OtherArticles",components:{NavBar:z}},Tt=jt,At=(a("7bcd"),Object(l["a"])(Tt,Nt,Pt,!1,null,"0725c8d6",null)),Lt=At.exports;n["a"].use(r["a"]);var Rt=[{path:"/",component:L},{path:"/resume",component:W},{path:"/portfolio",component:Y},{path:"/contact",component:it},{path:"/developed-apps",component:dt},{path:"/algorithms",component:_t},{path:"/hackathons",component:Et},{path:"/flutter-stuff",component:Ht},{path:"/other-articles",component:Lt}],$t=new r["a"]({routes:Rt,mode:"history"});$t.beforeEach((function(t,e,a){document.title="Niedziałek Łukasz | Portfolio",a()})),new n["a"]({render:function(t){return t(d)},router:$t}).$mount("#app")},"66aa":function(t,e,a){"use strict";var n=a("c9b7"),r=a.n(n);r.a},"6c4b":function(t,e,a){"use strict";var n=a("8df9"),r=a.n(n);r.a},"70e5":function(t,e,a){},7142:function(t,e,a){"use strict";var n=a("b678"),r=a.n(n);r.a},"7bcd":function(t,e,a){"use strict";var n=a("9333"),r=a.n(n);r.a},"85ec":function(t,e,a){},"8df9":function(t,e,a){},"906f":function(t,e,a){},9333:function(t,e,a){},"9ff8":function(t,e,a){},a5b4:function(t,e,a){"use strict";var n=a("b74b"),r=a.n(n);r.a},af8b:function(t,e,a){},b678:function(t,e,a){},b74b:function(t,e,a){},bc36:function(t,e,a){},c292:function(t,e,a){"use strict";var n=a("caa2"),r=a.n(n);r.a},c9b7:function(t,e,a){},caa2:function(t,e,a){},dd8e:function(t,e,a){"use strict";var n=a("bc36"),r=a.n(n);r.a}});
//# sourceMappingURL=app.3b75e947.js.map