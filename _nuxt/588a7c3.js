(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{425:function(t,e,n){t.exports=n.p+"img/axa.9d20c9b.png"},426:function(t,e,n){t.exports=n.p+"img/bnp.3fe4655.png"},427:function(t,e,n){t.exports=n.p+"img/genium-360.322b864.png"},428:function(t,e,n){t.exports=n.p+"img/intact.47f2055.png"},429:function(t,e,n){t.exports=n.p+"img/lightspeed.81da2a6.png"},430:function(t,e,n){t.exports=n.p+"img/metro.cce128d.png"},431:function(t,e,n){t.exports=n.p+"img/panivore.af18404.png"},432:function(t,e,n){t.exports=n.p+"img/roland-garros.0484d2d.png"},433:function(t,e,n){t.exports=n.p+"img/service-public.a5f4a09.png"},434:function(t,e,n){var content=n(448);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("1c817f52",content,!0,{sourceMap:!1})},435:function(t,e,n){"use strict";n.r(e);var r={name:"DetailedService",props:{i18nSubKey:{type:String,default:"unknown"},otherServices:{type:Array,default:function(){return[]}}},computed:{i18nKeyPrefix:function(){return"services.".concat(this.i18nSubKey)}}},o=(n(447),n(30)),c=n(41),l=n.n(c),f=n(200),d=n(473),v=n(424),m=n(450),x=n(449),h=n(485),y=n(198),_=n(291),P=n(418),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"pa-5",attrs:{fluid:""}},[r("article",{staticClass:"overflow-hidden"},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"10",xl:"8"}},[r("base-heading",{staticClass:"text-center"},[r("span",{domProps:{innerHTML:t._s(t.$t(t.i18nKeyPrefix+".title"))}})]),t._v(" "),r("section",[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"8",xl:"6"}},[r("v-card",{staticClass:"white--text",attrs:{color:"secondary"}},[r("v-card-title",{staticClass:"pb-2"},[r("span",{domProps:{innerHTML:t._s(t.$t("services.toc-header"))}})]),t._v(" "),r("v-card-text",{staticClass:"white--text"},[r("ul",t._l(t.$t(t.i18nKeyPrefix+".sections").length,(function(e,n){return r("li",{key:n},[r("a",{attrs:{href:"#section"+e}},[r("span",{domProps:{innerHTML:t._s(t.$t(t.i18nKeyPrefix+".sections["+n+"].title"))}})])])})),0)])],1)],1)],1)],1),t._v(" "),t._l(t.$t(t.i18nKeyPrefix+".sections").length,(function(e,o){return r("section",{key:o,attrs:{id:"section"+e}},[r("base-subheading",{staticClass:"secondary--text"},[r("span",{domProps:{innerHTML:t._s(t.$t(t.i18nKeyPrefix+".sections["+o+"].title"))}})]),t._v(" "),t._l(t.$t(t.i18nKeyPrefix+".sections["+o+"].paragraphs").length,(function(e,n){return r("p",{key:n},[r("span",{domProps:{innerHTML:t._s(t.$t(t.i18nKeyPrefix+".sections["+o+"].paragraphs["+n+"]"))}})])})),t._v(" "),t.$te(t.i18nKeyPrefix+".sections["+o+"].items")?r("ul",t._l(t.$t(t.i18nKeyPrefix+".sections["+o+"].items").length,(function(e,n){return r("li",{key:n},[r("span",{domProps:{innerHTML:t._s(t.$t(t.i18nKeyPrefix+".sections["+o+"].items["+n+"]"))}})])})),0):t._e(),t._v(" "),t.$te(t.i18nKeyPrefix+".sections["+o+"].emphasis")?r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"10"}},[r("v-card",{staticClass:"rounded-xl",attrs:{color:"secondary"}},[r("v-card-text",{staticClass:"text-center white--text text-h6 pa-5"},[r("span",{domProps:{innerHTML:t._s(t.$t(t.i18nKeyPrefix+".sections["+o+"].emphasis"))}})])],1)],1)],1):t._e(),t._v(" "),t.$te(t.i18nKeyPrefix+".sections["+o+"].image")?r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("v-img",{attrs:{src:n(437)("./"+t.$t(t.i18nKeyPrefix+".sections["+o+"].image")),"max-height":"500px"}})],1)],1):t._e(),t._v(" "),t.$te(t.i18nKeyPrefix+".sections["+o+"].references")?r("div",{staticClass:"mt-10"},[r("p",[r("span",{domProps:{innerHTML:t._s(t.$t(t.i18nKeyPrefix+".sections["+o+"].references.intro"))}})]),t._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},t._l(t.$t(t.i18nKeyPrefix+".sections["+o+"].references.logos").length,(function(e,c){return r("v-col",{key:c,staticClass:"mb-5",attrs:{cols:"6",sm:"3"}},[r("v-card",{attrs:{flat:""}},[r("v-img",{attrs:{src:n(446)("./"+t.$t(t.i18nKeyPrefix+".sections["+o+"].references.logos["+c+"].src")),alt:t.$t(t.i18nKeyPrefix+".sections["+o+"].references.logos["+c+"].alt"),"max-height":"75px",contain:""}})],1)],1)})),1)],1):t._e()],2)})),t._v(" "),r("section",[r("div",{staticClass:"text-center contact-button"},[r("base-btn",{staticClass:"mt-5 mb-10 pa-10 text-body-1 text-md-h6 font-weight-bold",attrs:{nuxt:"",to:t.localePath("/#contact")}},[r("span",{domProps:{innerHTML:t._s(t.$t("services.contact-us"))}})])],1),t._v(" "),r("p",{staticClass:"text-h5 mt-10 text-center"},[r("span",{domProps:{innerHTML:t._s(t.$t("services.other-services"))}})]),t._v(" "),r("v-row",t._l(t.otherServices,(function(e,i){return r("v-col",{key:i,staticClass:"text-center mb-3",attrs:{md:"4",cols:"12"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var o=n.hover;return[r("v-card",{staticClass:"rounded-xl",attrs:{to:e.href,elevation:o?12:0,color:"secondary"}},[r("v-card-text",[r("v-avatar",{staticClass:"elevation-6 mb-2 rounded",attrs:{color:"primary",size:"64",tile:""}},[r("v-icon",{attrs:{size:"52"},domProps:{textContent:t._s(e.icon)}})],1),t._v(" "),r("base-text",{staticClass:"info--text service-details"},[r("div",{staticClass:"mb-2 font-weight-bold white--text"},[r("span",{domProps:{innerHTML:t._s(e.name)}})]),t._v(" "),r("div",{staticClass:"font-italic text-subtitle-1 white--text"},[r("span",{domProps:{innerHTML:t._s(e.blurb)}})])])],1)],1)]}}],null,!0)})],1)})),1)],1)],2)],1)],1)])}),[],!1,null,"6f1e4fba",null);e.default=component.exports;l()(component,{BaseHeading:n(208).default,BaseSubheading:n(209).default,BaseBtn:n(168).default,BaseText:n(167).default}),l()(component,{VAvatar:f.a,VCard:d.a,VCardText:v.a,VCardTitle:v.b,VCol:m.a,VContainer:x.a,VHover:h.a,VIcon:y.a,VImg:_.a,VRow:P.a})},436:function(t,e,n){t.exports=n.p+"img/sincerely-media-EtyBBUByPSQ-unsplash.23d4638.jpg"},437:function(t,e,n){var map={"./absolutvision-uCMKx2H1Y38-unsplash.jpg":438,"./artem-maltsev-0CvHQ62gwY8-unsplash.jpg":439,"./glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg":440,"./javier-allegue-barros-C7B-ExXpOIE-unsplash.jpg":441,"./jens-lelie-u0vgcIOQG08-unsplash.jpg":442,"./logos/axa.png":425,"./logos/bnp.png":426,"./logos/genium-360.png":427,"./logos/intact.png":428,"./logos/lightspeed.png":429,"./logos/metro.png":430,"./logos/panivore.png":431,"./logos/roland-garros.png":432,"./logos/service-public.png":433,"./markus-spiske-MbG7kwWptII-unsplash.jpg":443,"./scott-graham-5fNmWej4tAA-unsplash.jpg":444,"./sincerely-media-EtyBBUByPSQ-unsplash.jpg":436,"./thomas-jensen-ISG-rUel0Uw-unsplash.jpg":445};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=437},438:function(t,e,n){t.exports=n.p+"img/absolutvision-uCMKx2H1Y38-unsplash.ba1ca63.jpg"},439:function(t,e,n){t.exports=n.p+"img/artem-maltsev-0CvHQ62gwY8-unsplash.64a550b.jpg"},440:function(t,e,n){t.exports=n.p+"img/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.31619c2.jpg"},441:function(t,e,n){t.exports=n.p+"img/javier-allegue-barros-C7B-ExXpOIE-unsplash.a90a655.jpg"},442:function(t,e,n){t.exports=n.p+"img/jens-lelie-u0vgcIOQG08-unsplash.0d3fb03.jpg"},443:function(t,e,n){t.exports=n.p+"img/markus-spiske-MbG7kwWptII-unsplash.76ed6e9.jpg"},444:function(t,e,n){t.exports=n.p+"img/scott-graham-5fNmWej4tAA-unsplash.34b4fe7.jpg"},445:function(t,e,n){t.exports=n.p+"img/thomas-jensen-ISG-rUel0Uw-unsplash.01871cc.jpg"},446:function(t,e,n){var map={"./axa.png":425,"./bnp.png":426,"./genium-360.png":427,"./intact.png":428,"./lightspeed.png":429,"./metro.png":430,"./panivore.png":431,"./roland-garros.png":432,"./service-public.png":433};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=446},447:function(t,e,n){"use strict";n(434)},448:function(t,e,n){var r=n(22)(!1);r.push([t.i,'.v-card__title[data-v-6f1e4fba]{word-break:normal}.base-text a[data-v-6f1e4fba]{color:unset!important}[data-v-6f1e4fba]:target:before{content:"";display:block;height:64px;margin:-64px 0 0}section[data-v-6f1e4fba]{margin-top:3rem}.v-card__text li[data-v-6f1e4fba]{font-size:1.1rem}.contact-button span[data-v-6f1e4fba],.v-card__text li[data-v-6f1e4fba]{line-height:1.75rem}ul+.row[data-v-6f1e4fba]{margin-top:1rem}[data-v-6f1e4fba] a{color:unset}',""]),t.exports=r},449:function(t,e,n){"use strict";n(15),n(5),n(13),n(79),n(29),n(294),n(293),n(73),n(90);var r=n(0);var o,c=n(89);e.a=(o="container",r.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})}}]);