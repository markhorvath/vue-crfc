webpackJsonp([1],{"42sb":function(t,i){},"55A6":function(t,i){},NHnr:function(t,i,e){"use strict";function s(t){e("55A6")}function a(t){e("42sb")}Object.defineProperty(i,"__esModule",{value:!0});var n=e("/5sW"),r=e("3EgV"),o=e.n(r),l=(e("QCv7"),{data:function(){return{sideNav:!1,menuItems:[{icon:"gavel",title:"Build A Team",link:"/buildteam"},{icon:"email",title:"Contact Us",link:"/contact"}],icons:["email","cast","gavel"],aboutItems:[{title:"History",link:"/history"},{title:"Rules",link:"/rules"},{title:"Scoring",link:"/scoring"},{title:"Teams",link:"/teams"},{title:"Sponsors",link:"/sponsors"}],newsItems:[{title:"Gallery",link:"/gallery"},{title:"Videos",link:"/videos"},{title:"Combine",link:"/combine"},{title:"Playoffs",link:"/playoffs"},{title:"Championship Records",link:"/records"}]}}}),c=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("v-app",{attrs:{id:"inspire"}},[s("v-toolbar",{staticClass:"primary",attrs:{dark:"",app:"",fixed:""}},[s("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up",on:{click:function(i){i.stopPropagation(),t.sideNav=!t.sideNav}}}),t._v(" "),s("v-toolbar-title",[s("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[t._v("CRFC")])],1),t._v(" "),s("img",{staticStyle:{height:"54px","margin-left":"8px"},attrs:{src:e("xYXi")}}),t._v(" "),s("v-spacer"),t._v(" "),s("v-toolbar-items",{staticClass:"hidden-xs-only"},[s("v-menu",{attrs:{"open-on-hover":"","offset-y":""}},[s("v-btn",{attrs:{slot:"activator",flat:""},slot:"activator"},[s("v-icon",{attrs:{left:""}},[t._v(t._s(t.icons[0]))]),t._v("About")],1),t._v(" "),s("v-list",t._l(t.aboutItems,function(i){return s("v-list-tile",{key:i.title,attrs:{to:i.link},on:{click:function(t){}}},[s("v-list-tile-title",[t._v(t._s(i.title))])],1)}))],1),t._v(" "),s("v-btn",{key:t.menuItems[0].title,attrs:{flat:"",to:t.menuItems[0].link}},[s("v-icon",{attrs:{left:""}},[t._v(t._s(t.menuItems[0].icon))]),t._v("\n        "+t._s(t.menuItems[0].title)+"\n      ")],1),t._v(" "),s("v-menu",{attrs:{"open-on-hover":"","offset-y":""}},[s("v-btn",{attrs:{slot:"activator",flat:""},slot:"activator"},[s("v-icon",{attrs:{left:""}},[t._v(t._s(t.icons[1]))]),t._v("News and Events")],1),t._v(" "),s("v-list",t._l(t.newsItems,function(i){return s("v-list-tile",{key:i.title,attrs:{to:i.link},on:{click:function(t){}}},[s("v-list-tile-title",[t._v(t._s(i.title))])],1)}))],1),t._v(" "),s("v-btn",{key:t.menuItems[1].title,attrs:{flat:"",to:t.menuItems[1].link}},[s("v-icon",{attrs:{left:""}},[t._v(t._s(t.menuItems[1].icon))]),t._v("\n        "+t._s(t.menuItems[1].title)+"\n      ")],1)],1)],1),t._v(" "),s("v-content",[s("v-container",{attrs:{fluid:""}},[s("router-view")],1)],1),t._v(" "),s("v-footer",{attrs:{app:""}})],1)},v=[],u={render:c,staticRenderFns:v},m=u,d=e("VU/8"),_=s,p=d(l,m,!1,_,"data-v-3291e514",null),f=p.exports,g=e("/ocq"),y={data:function(){return{carousels:[{imgUrl:"static/img/crfc-1-1000w.jpg",id:"adkjadk123",title:"Caption 1"},{imgUrl:"static/img/crfc-2-1000w.jpg",id:"adkjadk123",title:"Caption 2"},{imgUrl:"static/img/crfc-4-1000w.jpg",id:"adkjadk123",title:"Caption 3"},{imgUrl:"static/img/trophy-563h.jpg",id:"adkjadk124",title:"Trophy"}],sponsors:["GE","Visual Edge","Boeing","Yaskawa"],members:["University of Notre Dame","Ohio Northern University","U.S. Naval Academy","Valparaiso University","Purdue Polytechnic","University of Mount Union","Indian Universiy - Purdue University Indianapolis"],teamCaption:"This is our build a team page.  More info coming soon!"}}},k=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-container",[e("v-layout",{staticClass:"mt-0",attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("v-carousel",{staticStyle:{cursor:"pointer"}},t._l(t.carousels,function(i){return e("v-carousel-item",{key:i.id,staticClass:"carousel-item",attrs:{src:i.imgUrl},on:{click:function(t){}}},[e("div",{staticClass:"title"},[t._v("\n                      "+t._s(i.title)+"\n                    ")])])}))],1)],1),t._v(" "),e("v-layout",{staticClass:"mt-3",attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",sm10:"",md8:"","offset-sm1":"","offset-md2":""}},[e("v-card",{attrs:{primary:""}},[e("v-card-title",{attrs:{primary:""}},[e("h1",{staticClass:"text--white",staticStyle:{margin:"0 auto"}},[t._v("Build a Team")])]),t._v(" "),e("v-card-media",{attrs:{src:"static/img/build-team-lg.JPG",height:"450px"}}),t._v(" "),e("v-card-text",{attrs:{secondary:""}},[e("div",{staticClass:"info--text"},[t._v("Register by Jan 1, 2018")]),t._v(" "),e("div",[t._v(t._s(t.teamCaption))])]),t._v(" "),e("v-card-actions",[e("v-spacer"),t._v(" "),e("v-btn",{attrs:{secondary:""}},[t._v("Learn More")])],1)],1)],1)],1),t._v(" "),e("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",sm6:"",id:"sponsors"}},[e("div",{staticClass:"text-xs-center"},[e("h1",[t._v("Sponsors")]),t._v(" "),t._l(t.sponsors,function(i){return e("ul",[e("li",[t._v(" "+t._s(i))])])})],2)]),t._v(" "),e("v-flex",{attrs:{xs12:"",sm6:"",id:"members"}},[e("div",{staticClass:"text-xs-center"},[e("h1",[t._v("Members")]),t._v(" "),t._l(t.members,function(i){return e("ul",[e("li",[t._v(" "+t._s(i))])])})],2)])],1)],1)},b=[],h={render:k,staticRenderFns:b},x=h,C=e("VU/8"),w=a,U=C(y,x,!1,w,"data-v-7947eca1",null),I=U.exports;n.a.use(g.a);var j=new g.a({routes:[{path:"/",name:"Home",component:I}]});n.a.use(o.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:j,render:function(t){return t(f)}})},QCv7:function(t,i){},xYXi:function(t,i,e){t.exports=e.p+"static/img/crfc-logo-light.698d697.png"}},["NHnr"]);
//# sourceMappingURL=app.2793dc99fa84775ad631.js.map