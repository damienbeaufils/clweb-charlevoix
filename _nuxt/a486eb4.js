(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{450:function(t,e,r){"use strict";r(9),r(15),r(18),r(19);var o=r(2),n=(r(5),r(35),r(13),r(21),r(68),r(210),r(36),r(211),r(212),r(213),r(214),r(215),r(216),r(217),r(218),r(219),r(220),r(221),r(222),r(223),r(42),r(39),r(14),r(79),r(293),r(0)),c=r(89),l=r(1);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=["sm","md","lg","xl"],v=m.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=m.reduce((function(t,e){return t["offset"+Object(l.r)(e)]={type:[String,Number],default:null},t}),{}),j=m.reduce((function(t,e){return t["order"+Object(l.r)(e)]={type:[String,Number],default:null},t}),{}),_={col:Object.keys(v),offset:Object.keys(h),order:Object.keys(j)};function O(t,e,r){var o=t;if(null!=r&&!1!==r){if(e){var n=e.replace(t,"");o+="-".concat(n)}return"col"!==t||""!==r&&!0!==r?(o+="-".concat(r)).toLowerCase():o.toLowerCase()}}var y=new Map;e.a=n.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,n=e.children,l=(e.parent,"");for(var d in r)l+=String(r[d]);var f=y.get(l);return f||function(){var t,e;for(e in f=[],_)_[e].forEach((function(t){var o=r[t],n=O(e,t,o);n&&f.push(n)}));var n=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!n||!r.cols},Object(o.a)(t,"col-".concat(r.cols),r.cols),Object(o.a)(t,"offset-".concat(r.offset),r.offset),Object(o.a)(t,"order-".concat(r.order),r.order),Object(o.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),y.set(l,f)}(),t(r.tag,Object(c.a)(data,{class:f}),n)}})},453:function(t,e,r){var content=r(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("02c32d54",content,!0,{sourceMap:!1})},459:function(t,e,r){t.exports=r.p+"img/charlesdeluvio-AT5vuPoi8vc-unsplash.17b75aa.jpg"},460:function(t,e,r){t.exports=r.p+"img/logo-panivore.f6a77db.png"},461:function(t,e,r){"use strict";r(453)},462:function(t,e,r){var o=r(22)(!1);o.push([t.i,'.speech-bubble[data-v-459280c6]{position:relative;background:#69a1bb;border-radius:.4em;line-height:1.75rem}.speech-bubble[data-v-459280c6]:after{content:"";position:absolute;top:0;left:50%;width:0;height:0;border:30px solid transparent;border-bottom-color:#69a1bb;border-top:0;border-left:0;margin-left:-15px;margin-top:-30px}.quotation-mark[data-v-459280c6]{font-size:6rem;height:4rem;line-height:normal}.logo[data-v-459280c6]{margin-top:-2rem}',""]),t.exports=o},470:function(t,e,r){"use strict";r.r(e);r(461);var o=r(30),n=r(41),c=r.n(n),l=r(450),d=r(291),f=r(418),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"overflow-hidden",attrs:{id:"temoignages"}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{staticClass:"hidden-md-and-down",attrs:{lg:"6"}},[o("v-img",{staticClass:"fill-height",attrs:{src:r(459),height:"95vh"}})],1),t._v(" "),o("v-col",{staticClass:"primary text-center pa-5 white--text",attrs:{cols:"12",lg:"6"}},[o("base-bubble-1",{staticClass:"hidden-lg-and-up",staticStyle:{transform:"rotate(180deg) translateX(0%)"}}),t._v(" "),o("base-heading",{staticClass:"mb-10 mb-lg-15 mt-lg-10 info--text",attrs:{tag:"h2"}},[o("span",{domProps:{innerHTML:t._s(t.$t("home.recent-projects.heading"))}})]),t._v(" "),o("base-subheading",{staticClass:"info--text",attrs:{tag:"div"}},[o("span",{domProps:{innerHTML:t._s(t.$t("home.recent-projects.subheading"))}})]),t._v(" "),o("div",{staticClass:"speech-bubble mt-10 mx-0 mx-md-15 mx-lg-0 pa-5 pt-0 secondary"},[o("div",{staticClass:"text-left quotation-mark"},[t._v("“")]),t._v(" "),o("div",{staticClass:"text-left font-italic text-body-1"},[o("span",{domProps:{innerHTML:t._s(t.$t("home.recent-projects.quote.intro"))}}),t._v(" "),o("ul",[o("li",[o("span",{domProps:{innerHTML:t._s(t.$t("home.recent-projects.quote.items[0]"))}})]),t._v(" "),o("li",[o("span",{domProps:{innerHTML:t._s(t.$t("home.recent-projects.quote.items[1]"))}})]),t._v(" "),o("li",[o("span",{domProps:{innerHTML:t._s(t.$t("home.recent-projects.quote.items[2]"))}})]),t._v(" "),o("li",[o("span",{domProps:{innerHTML:t._s(t.$t("home.recent-projects.quote.items[3]"))}})]),t._v(" "),o("li",[o("span",{domProps:{innerHTML:t._s(t.$t("home.recent-projects.quote.items[4]"))}})])]),t._v(" "),o("br"),t._v(" "),o("span",{domProps:{innerHTML:t._s(t.$t("home.recent-projects.quote.outro"))}})]),t._v(" "),o("div",{staticClass:"text-right quotation-mark"},[t._v("”")]),t._v(" "),o("a",{attrs:{href:"https://www.lepanivore.com/commander",target:"_blank"}},[o("v-img",{staticClass:"mx-auto mb-3 logo",attrs:{"max-width":"200px",src:r(460)}})],1)]),t._v(" "),o("div",{staticClass:"info--text font-italic mt-5"},[o("span",{domProps:{innerHTML:t._s(t.$t("home.recent-projects.references"))}})])],1)],1)],1)}),[],!1,null,"459280c6",null);e.default=component.exports;c()(component,{BaseHeading:r(208).default,BaseSubheading:r(209).default}),c()(component,{VCol:l.a,VImg:d.a,VRow:f.a})}}]);