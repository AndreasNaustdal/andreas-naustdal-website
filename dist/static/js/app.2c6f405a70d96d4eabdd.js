webpackJsonp([1],{"+ow5":function(e,t){},"63ty":function(e,t){},EmvA:function(e,t){},J164:function(e,t){},JbAQ:function(e,t){},Mzvf:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},n,!1,function(e){a("+ow5")},null,null).exports,o=a("/ocq"),i=a("1mcD"),c=a.n(i),d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"navbar"},[a("nav",[a("ul",{attrs:{id:"navLinksDesktop"}},[a("li",[a("a",{attrs:{href:"#home"}},[e._v("HOME")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#prototypes"}},[e._v("PROTOTYPES")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#ideas"}},[e._v("IDEAS")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#games"}},[e._v("GAMES")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#contact"}},[e._v("CONTACT")])])]),e._v(" "),a("ul",{attrs:{id:"navLinksMobile"}},[a("li",[a("a",{attrs:{href:"#prototypes"}},[e._v("PROTOTYPES")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#ideas"}},[e._v("IDEAS")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#games"}},[e._v("GAMES")])])])])])}]};var l=a("VU/8")({name:"NavBar"},d,!1,function(e){a("cFKU")},"data-v-f866ccbe",null).exports,p=a("Sazm"),v=a.n(p).a.initializeApp({apiKey:"AIzaSyB4xCoqkSHV6zzkiUjaEmuIGMsrFbAHchI",authDomain:"andreas-naustdal-website.firebaseapp.com",databaseURL:"https://andreas-naustdal-website.firebaseio.com",projectId:"andreas-naustdal-website",storageBucket:"andreas-naustdal-website.appspot.com",messagingSenderId:"539013099091"}).database(),_={name:"Home",data:function(){return{home:{}}},firebase:{home:{source:v.ref("home"),asObject:!0}}},m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"home"}},[t("h1",[this._v("Projects and ideas")]),this._v(" "),t("p",[this._v("\n    "+this._s(this.home.welcomeText)+"\n  ")])])},staticRenderFns:[]};var u=a("VU/8")(_,m,!1,function(e){a("Mzvf")},"data-v-165e76c8",null).exports,f={name:"Prototypes",data:function(){return{selectedPrototype:-1,prototypes:{}}},firebase:{prototypes:{source:v.ref("prototypes")}}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"prototypes"}},[a("h2",[e._v("Unfinished prototypes")]),e._v(" "),a("div",{staticClass:"threeColGrid"},[a("ul",{staticClass:"projectList"},e._l(e.prototypes,function(t,s){return a("li",{key:s},[e.selectedPrototype===s?a("b",[e._v(e._s(t[".key"]))]):e._e(),e._v(" "),e.selectedPrototype!==s?a("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.selectedPrototype=s}}},[e._v(e._s(t[".key"]))]):e._e()])})),e._v(" "),e.prototypes[e.selectedPrototype]?a("div",{staticClass:"center"},[a("h3",[e._v(e._s(e.prototypes[e.selectedPrototype][".key"]))]),e._v(" "),a("p",{staticClass:"description"},[e._v("\n        "+e._s(e.prototypes[e.selectedPrototype].description)+"\n      ")]),e._v(" "),a("a",{attrs:{href:e.prototypes[e.selectedPrototype].link}},[e._v("Download here")])]):e._e(),e._v(" "),e.prototypes[e.selectedPrototype]?a("div",{staticClass:"right"},[e.prototypes[e.selectedPrototype].screenshot?a("img",{attrs:{alt:"screenshot",src:e.prototypes[e.selectedPrototype].screenshot}}):e._e()]):e._e()])])},staticRenderFns:[]};var y=a("VU/8")(f,h,!1,function(e){a("J164")},"data-v-8ff645c8",null).exports,g={name:"Ideas",data:function(){return{selectedIdea:-1,ideas:{}}},firebase:{ideas:{source:v.ref("ideas")}}},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"ideas"}},[a("h2",[e._v("Ideas")]),e._v(" "),a("div",{staticClass:"threeColGrid"},[a("ul",{staticClass:"projectList"},e._l(e.ideas,function(t,s){return a("li",{key:s},[e.selectedIdea===s?a("b",[e._v(e._s(t[".key"]))]):e._e(),e._v(" "),e.selectedIdea!==s?a("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.selectedIdea=s}}},[e._v(e._s(t[".key"]))]):e._e()])})),e._v(" "),e.ideas[e.selectedIdea]?a("div",{staticClass:"center"},[a("h3",[e._v(e._s(e.ideas[e.selectedIdea][".key"]))]),e._v(" "),a("p",{staticClass:"description"},[e._v("\n        "+e._s(e.ideas[e.selectedIdea].description)+"\n      ")]),e._v(" "),a("a",{attrs:{href:e.ideas[e.selectedIdea].link}},[e._v("Download here")])]):e._e(),e._v(" "),e.ideas[e.selectedIdea]?a("div",{staticClass:"right"},[e.ideas[e.selectedIdea].screenshot?a("img",{attrs:{alt:"screenshot",src:e.ideas[e.selectedIdea].screenshot}}):e._e()]):e._e()])])},staticRenderFns:[]};var k=a("VU/8")(g,b,!1,function(e){a("rNf7")},"data-v-c78501e8",null).exports,C={name:"Games",data:function(){return{selectedGame:-1,games:{}}},firebase:{games:{source:v.ref("games")}}},I={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"games"}},[a("h2",[e._v("Finished games")]),e._v(" "),a("div",{staticClass:"threeColGrid"},[a("ul",{staticClass:"projectList"},e._l(e.games,function(t,s){return a("li",{key:s},[e.selectedGame===s?a("b",[e._v(e._s(t[".key"]))]):e._e(),e._v(" "),e.selectedGame!==s?a("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.selectedGame=s}}},[e._v(e._s(t[".key"]))]):e._e()])})),e._v(" "),e.games[e.selectedGame]?a("div",{staticClass:"center"},[a("h3",[e._v(e._s(e.games[e.selectedGame][".key"]))]),e._v(" "),a("p",{staticClass:"description"},[e._v("\n        "+e._s(e.games[e.selectedGame].description)+"\n      ")]),e._v(" "),a("a",{attrs:{href:e.games[e.selectedGame].link}},[e._v("Download here")])]):e._e(),e._v(" "),e.games[e.selectedGame]?a("div",{staticClass:"right"},[e.games[e.selectedGame].screenshot?a("img",{attrs:{alt:"screenshot",src:e.games[e.selectedGame].screenshot}}):e._e()]):e._e()])])},staticRenderFns:[]};var P=a("VU/8")(C,I,!1,function(e){a("63ty")},"data-v-2339dc3a",null).exports,E={name:"Contact",data:function(){return{links:{}}},firebase:{links:{source:v.ref("links")}}},G={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{attrs:{id:"contact"}},[a("h2",[e._v("Contact me")]),e._v(" "),a("ul",{attrs:{id:"contactLinks"}},e._l(e.links,function(t,s){return a("li",{key:s},[a("a",{attrs:{href:t.address}},[e._v(e._s(t.text))])])}))])},staticRenderFns:[]};var A=a("VU/8")(E,G,!1,function(e){a("JbAQ")},"data-v-70b422ba",null).exports;s.a.use(c.a),s.a.component("nav-bar",l),s.a.component("home-page",u),s.a.component("prototypes-page",y),s.a.component("ideas-page",k),s.a.component("games-page",P),s.a.component("contact-page",A);var w={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"main-page"},[t("nav-bar"),this._v(" "),t("home-page"),this._v(" "),t("prototypes-page"),this._v(" "),t("ideas-page"),this._v(" "),t("games-page"),this._v(" "),t("contact-page")],1)},staticRenderFns:[]};var U=a("VU/8")({name:"MainPage"},w,!1,function(e){a("EmvA")},"data-v-7e7bbe78",null).exports;s.a.use(o.a);var F=new o.a({routes:[{path:"/",name:"MainPage",component:U},{path:"/home",name:"Home",component:u},{path:"/prototypes",name:"Prototypes",component:y},{path:"/ideas",name:"Ideas",component:k},{path:"/games",name:"Games",component:P},{path:"/contact",name:"Contact",component:A}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:F,components:{App:r},template:"<App/>"})},cFKU:function(e,t){},rNf7:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.2c6f405a70d96d4eabdd.js.map