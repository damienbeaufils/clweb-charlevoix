(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{450:function(e,t,n){"use strict";n(9),n(15),n(18),n(19);var r=n(2),o=(n(5),n(35),n(13),n(21),n(68),n(210),n(36),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(42),n(39),n(14),n(79),n(293),n(0)),c=n(89),l=n(1);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=["sm","md","lg","xl"],h=m.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),v=m.reduce((function(e,t){return e["offset"+Object(l.r)(t)]={type:[String,Number],default:null},e}),{}),w=m.reduce((function(e,t){return e["order"+Object(l.r)(t)]={type:[String,Number],default:null},e}),{}),O={col:Object.keys(h),offset:Object.keys(v),order:Object.keys(w)};function j(e,t,n){var r=e;if(null!=n&&!1!==n){if(t){var o=t.replace(e,"");r+="-".concat(o)}return"col"!==e||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var y=new Map;t.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},v),{},{order:{type:[String,Number],default:null}},w),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var n=t.props,data=t.data,o=t.children,l=(t.parent,"");for(var f in n)l+=String(n[f]);var d=y.get(l);return d||function(){var e,t;for(t in d=[],O)O[t].forEach((function(e){var r=n[e],o=j(t,e,r);o&&d.push(o)}));var o=d.some((function(e){return e.startsWith("col-")}));d.push((e={col:!o||!n.cols},Object(r.a)(e,"col-".concat(n.cols),n.cols),Object(r.a)(e,"offset-".concat(n.offset),n.offset),Object(r.a)(e,"order-".concat(n.order),n.order),Object(r.a)(e,"align-self-".concat(n.alignSelf),n.alignSelf),e)),y.set(l,d)}(),e(n.tag,Object(c.a)(data,{class:d}),o)}})},466:function(e,t,n){e.exports=n.p+"img/mikhail-fesenko-p6YWrjhmjhM-unsplash.7a1f461.jpg"},471:function(e,t,n){"use strict";n.r(t);var r=n(30),o=n(41),c=n.n(o),l=n(450),f=n(291),d=n(418),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"overflow-hidden",attrs:{id:"accueil"}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{staticClass:"hidden-md-and-down",attrs:{lg:"6"}},[r("v-img",{staticClass:"fill-height",attrs:{src:n(466),height:"90vh"}})],1),e._v(" "),r("v-col",{staticClass:"align-content-space-between layout wrap",attrs:{cols:"12",lg:"6","pa-5":e.$vuetify.breakpoint.smAndDown}},[r("v-row",{staticClass:"info--text",attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"10"}},[r("base-heading",{staticClass:"mt-10 mt-lg-15"},[r("span",{domProps:{innerHTML:e._s(e.$t("home.welcome.heading"))}})]),e._v(" "),r("base-subheading",{staticClass:"mt-10 mb-10"},[r("span",{domProps:{innerHTML:e._s(e.$t("home.welcome.subheading"))}})]),e._v(" "),r("base-text",[r("span",{domProps:{innerHTML:e._s(e.$t("home.welcome.description[0]"))}})]),e._v(" "),r("base-text",[r("span",{domProps:{innerHTML:e._s(e.$t("home.welcome.description[1]"))}})]),e._v(" "),r("base-text",[r("span",{domProps:{innerHTML:e._s(e.$t("home.welcome.description[2]"))}})]),e._v(" "),r("base-text",[r("span",{domProps:{innerHTML:e._s(e.$t("home.welcome.description[3]"))}})]),e._v(" "),r("div",{staticClass:"text-center"},[r("base-btn",{staticClass:"mt-5 mb-10 px-5 py-7 font-weight-bold text-body-1 text-md-h6",attrs:{nuxt:"",to:e.localePath("/#contact")}},[r("span",{domProps:{innerHTML:e._s(e.$t("home.welcome.contact-us"))}})])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{BaseHeading:n(208).default,BaseSubheading:n(209).default,BaseText:n(167).default,BaseBtn:n(168).default}),c()(component,{VCol:l.a,VImg:f.a,VRow:d.a})}}]);