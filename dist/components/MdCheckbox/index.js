/*!
 * vue-material v1.0.0-beta-10.2
 * Made with <3 by marcosmoura 2019
 * Released under the MIT License.
 */
!(function(e,t){var n,r;if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{n=t("object"==typeof exports?require("vue"):e.Vue);for(r in n)("object"==typeof exports?exports:e)[r]=n[r]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=526)})({0:function(e,t){e.exports=function(e,t,n,r,o,i){var u,a,s,l,c,f=e=e||{},d=typeof e.default;return"object"!==d&&"function"!==d||(u=e,f=e.default),a="function"==typeof f?f.options:f,t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0),n&&(a.functional=!0),o&&(a._scopeId=o),i?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},a._ssrRegister=s):r&&(s=r),s&&(l=a.functional,c=l?a.render:a.beforeCreate,l?(a._injectStyles=s,a.render=function(e,t){return s.call(t),c(e,t)}):a.beforeCreate=c?[].concat(c,s):[s]),{esModule:u,exports:f,options:a}}},1:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,u,a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={props:{mdTheme:null},computed:{$mdActiveTheme:function(){var e=i.default.enabled,t=i.default.getThemeName,n=i.default.getAncestorTheme;return e&&!1!==this.mdTheme?t(this.mdTheme||n(this)):null}}};return(0,a.default)(t,e)},o=n(4),i=r(o),u=n(6),a=r(u)},10:function(e,t,n){(function(t){var r,o,i,u,a,s=n(14),l="undefined"==typeof window?t:window,c=["moz","webkit"],f="AnimationFrame",d=l["request"+f],h=l["cancel"+f]||l["cancelRequest"+f];for(r=0;!d&&r<c.length;r++)d=l[c[r]+"Request"+f],h=l[c[r]+"Cancel"+f]||l[c[r]+"CancelRequest"+f];d&&h||(o=0,i=0,u=[],a=1e3/60,d=function(e){if(0===u.length){var t=s(),n=Math.max(0,a-(t-o));o=n+t,setTimeout((function(){var e,t=u.slice(0);for(u.length=0,e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(o)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return u.push({handle:++i,callback:e,cancelled:!1}),i},h=function(e){for(var t=0;t<u.length;t++)u[t].handle===e&&(u[t].cancelled=!0)}),e.exports=function(e){return d.call(l,e)},e.exports.cancel=function(){h.apply(l,arguments)},e.exports.polyfill=function(e){e||(e=l),e.requestAnimationFrame=d,e.cancelAnimationFrame=h}}).call(t,n(12))},103:function(e,t,n){"use strict";var r,o,i;Object.defineProperty(t,"__esModule",{value:!0}),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(16),i=(function(e){return e&&e.__esModule?e:{default:e}})(o),t.default={components:{MdRipple:i.default},props:{model:[String,Boolean,Object,Number,Array],value:{type:[String,Boolean,Object,Number]},name:[String,Number],required:Boolean,disabled:Boolean,indeterminate:Boolean,trueValue:{default:!0},falseValue:{default:!1}},model:{prop:"model",event:"change"},data:function(){return{rippleActive:!1}},computed:{attrs:function(){var e={id:this.id,name:this.name,disabled:this.disabled,required:this.required,"true-value":this.trueValue,"false-value":this.falseValue};return this.$options.propsData.hasOwnProperty("value")&&(null!==this.value&&"object"===r(this.value)||(e.value=null===this.value||void 0===this.value?"":this.value+"")),e},isSelected:function(){return this.isModelArray?this.model.includes(this.value):this.hasValue?this.model===this.value:this.model===this.trueValue},isModelArray:function(){return Array.isArray(this.model)},checkClasses:function(){return{"md-checked":this.isSelected,"md-disabled":this.disabled,"md-required":this.required,"md-indeterminate":this.indeterminate}},hasValue:function(){return this.$options.propsData.hasOwnProperty("value")}},methods:{removeItemFromModel:function(e){var t=e.indexOf(this.value);-1!==t&&e.splice(t,1)},handleArrayCheckbox:function(){var e=this.model;this.isSelected?this.removeItemFromModel(e):e.push(this.value),this.$emit("change",e)},handleSingleSelectCheckbox:function(){this.$emit("change",this.isSelected?null:this.value)},handleSimpleCheckbox:function(){this.$emit("change",this.isSelected?this.falseValue:this.trueValue)},toggleCheck:function(){this.disabled||(this.rippleActive=!0,this.isModelArray?this.handleArrayCheckbox():this.hasValue?this.handleSingleSelectCheckbox():this.handleSimpleCheckbox())}}}},11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return Math.random().toString(36).slice(4)};t.default=r},12:function(e,t){var n;n=(function(){return this})();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},139:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,u,a,s,l;Object.defineProperty(t,"__esModule",{value:!0}),o=n(1),i=r(o),u=n(103),a=r(u),s=n(11),l=r(s),t.default=new i.default({name:"MdCheckbox",mixins:[a.default],props:{id:{type:String,default:function(){return"md-checkbox-"+(0,l.default)()}}}})},14:function(e,t,n){(function(t){(function(){var n,r,o,i,u,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-u)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},i=n(),a=1e9*t.uptime(),u=i-a):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(t,n(15))},15:function(e,t){function n(){throw Error("setTimeout has not been defined")}function r(){throw Error("clearTimeout has not been defined")}function o(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function u(){h&&m&&(h=!1,m.length?d=m.concat(d):p=-1,d.length&&a())}function a(){var e,t;if(!h){for(e=o(u),h=!0,t=d.length;t;){for(m=d,d=[];++p<t;)m&&m[p].run();p=-1,t=d.length}m=null,h=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function l(){}var c,f,d,h,m,p,v=e.exports={};!(function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}})(),d=[],h=!1,p=-1,v.nextTick=function(e){var t,n=Array(arguments.length-1);if(arguments.length>1)for(t=1;t<arguments.length;t++)n[t-1]=arguments[t];d.push(new s(e,n)),1!==d.length||h||o(a)},s.prototype.run=function(){this.fun.apply(null,this.array)},v.title="browser",v.browser=!0,v.env={},v.argv=[],v.version="",v.versions={},v.on=l,v.addListener=l,v.once=l,v.off=l,v.removeListener=l,v.removeAllListeners=l,v.emit=l,v.prependListener=l,v.prependOnceListener=l,v.listeners=function(e){return[]},v.binding=function(e){throw Error("process.binding is not supported")},v.cwd=function(){return"/"},v.chdir=function(e){throw Error("process.chdir is not supported")},v.umask=function(){return 0}},16:function(e,t,n){"use strict";function r(e){n(23)}var o,i,u,a,s,l,c,f,d,h;Object.defineProperty(t,"__esModule",{value:!0}),o=n(18),i=n.n(o);for(u in o)"default"!==u&&(function(e){n.d(t,e,(function(){return o[e]}))})(u);a=n(26),s=n(0),l=!1,c=r,f=null,d=null,h=s(i.a,a.a,l,c,f,d),t.default=h.exports},18:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,u,a,s,l,c,f,d;Object.defineProperty(t,"__esModule",{value:!0}),o=Object.assign||function(e){var t,n,r;for(t=1;t<arguments.length;t++){n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(10),u=r(i),a=n(1),s=r(a),l=n(11),c=r(l),f=n(22),d=r(f),t.default=new s.default({name:"MdRipple",components:{MdWave:d.default},props:{mdActive:null,mdDisabled:Boolean,mdCentered:Boolean,mdEventTrigger:{type:Boolean,default:!0}},data:function(){return{ripples:[],touchTimeout:null,eventType:null}},computed:{isDisabled:function(){return!this.$material.ripple||this.mdDisabled},rippleClasses:function(){return{"md-disabled":this.isDisabled}},waveClasses:function(){return{"md-centered":this.mdCentered}}},watch:{mdActive:function(e){var t="boolean"==typeof e,n="mouseevent"===(""+e.constructor).match(/function (\w*)/)[1].toLowerCase();t&&this.mdCentered&&e?this.startRipple({type:"mousedown"}):n&&this.startRipple(e),this.$emit("update:mdActive",!1)}},methods:{touchMoveCheck:function(){window.clearTimeout(this.touchTimeout)},touchStartCheck:function(e){var t=this;this.touchTimeout=window.setTimeout((function(){t.startRipple(e)}),100)},startRipple:function(e){var t=this;(0,u.default)((function(){var n,r,o=t.eventType,i=t.isDisabled,u=t.mdCentered;i||o&&o!==e.type||(n=t.getSize(),r=null,r=u?t.getCenteredPosition(n):t.getHitPosition(e,n),t.eventType=e.type,t.ripples.push({waveStyles:t.applyStyles(r,n),uuid:(0,c.default)()}))}))},applyStyles:function(e,t){return t+="px",o({},e,{width:t,height:t})},clearWave:function(e){this.ripples=e?this.ripples.filter((function(t){return t.uuid!==e})):[]},getSize:function(){var e=this.$el,t=e.offsetWidth,n=e.offsetHeight;return Math.round(Math.max(t,n))},getCenteredPosition:function(e){var t=-e/2+"px";return{"margin-top":t,"margin-left":t}},getHitPosition:function(e,t){var n=this.$el.getBoundingClientRect(),r=e.pageY,o=e.pageX;return"touchstart"===e.type&&(r=e.changedTouches[0].pageY,o=e.changedTouches[0].pageX),{top:r-n.top-t/2-document.documentElement.scrollTop+"px",left:o-n.left-t/2-document.documentElement.scrollLeft+"px"}}}})},19:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),r=n(1),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default=new o.default({name:"MdWave",data:function(){return{animating:!1}},props:{waveClasses:null,waveStyles:null},mounted:function(){this.animating=!0},methods:{end:function(){this.animating=!1,this.$emit("md-end")}}})},2:function(t,n){t.exports=e},22:function(e,t,n){"use strict";function r(e){n(24)}var o,i,u,a,s,l,c,f,d,h;Object.defineProperty(t,"__esModule",{value:!0}),o=n(19),i=n.n(o);for(u in o)"default"!==u&&(function(e){n.d(t,e,(function(){return o[e]}))})(u);a=n(25),s=n(0),l=!1,c=r,f=null,d=null,h=s(i.a,a.a,l,c,f,d),t.default=h.exports},23:function(e,t){},24:function(e,t){},25:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"md-ripple",appear:""},on:{"after-enter":e.end}},[e.animating?n("span"):e._e()])},o=[],i={render:r,staticRenderFns:o};t.a=i},26:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["md-ripple",e.rippleClasses],on:{"&touchstart":function(t){return (function(t){return e.mdEventTrigger&&e.touchStartCheck(t)})(t)},"&touchmove":function(t){return (function(t){return e.mdEventTrigger&&e.touchMoveCheck(t)})(t)},"&mousedown":function(t){return (function(t){return e.mdEventTrigger&&e.startRipple(t)})(t)}}},[e._t("default"),e._v(" "),e._l(e.ripples,(function(t){return e.isDisabled?e._e():n("md-wave",{key:t.uuid,class:["md-ripple-wave",e.waveClasses],style:t.waveStyles,on:{"md-end":function(n){return e.clearWave(t.uuid)}}})}))],2)},o=[],i={render:r,staticRenderFns:o};t.a=i},3:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,u,a,s;Object.defineProperty(t,"__esModule",{value:!0}),n(7),o=n(5),i=r(o),u=n(4),a=r(u),s=function(){var e=new i.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"yyyy-MM-dd",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0},router:{linkActiveClass:"router-link-active"}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return a.default.metaColors},set:function(e){a.default.metaColors=e}},theme:{get:function(){return a.default.theme},set:function(e){a.default.theme=e}},enabled:{get:function(){return a.default.enabled},set:function(e){a.default.enabled=e}}}),e},t.default=function(e){e.material||(e.material=s(),e.prototype.$material=e.material)}},326:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,u,a;Object.defineProperty(t,"__esModule",{value:!0}),o=n(3),i=r(o),u=n(327),a=r(u),t.default=function(e){(0,i.default)(e),e.component(a.default.name,a.default)}},327:function(e,t,n){"use strict";function r(e){n(328)}var o,i,u,a,s,l,c,f,d,h;Object.defineProperty(t,"__esModule",{value:!0}),o=n(139),i=n.n(o);for(u in o)"default"!==u&&(function(e){n.d(t,e,(function(){return o[e]}))})(u);a=n(329),s=n(0),l=!1,c=r,f=null,d=null,h=s(i.a,a.a,l,c,f,d),t.default=h.exports},328:function(e,t){},329:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-checkbox",class:[e.$mdActiveTheme,e.checkClasses]},[n("div",{staticClass:"md-checkbox-container",on:{click:function(t){return t.stopPropagation(),e.toggleCheck(t)}}},[n("md-ripple",{attrs:{"md-centered":"","md-active":e.rippleActive,"md-disabled":e.disabled},on:{"update:mdActive":function(t){e.rippleActive=t},"update:md-active":function(t){e.rippleActive=t}}},[n("input",e._b({attrs:{id:e.id,type:"checkbox"},domProps:{indeterminate:e.indeterminate}},"input",e.attrs,!1))])],1),e._v(" "),e.$slots.default?n("label",{staticClass:"md-checkbox-label",attrs:{for:e.id},on:{click:function(t){return t.preventDefault(),e.toggleCheck(t)}}},[e._t("default")],2):e._e()])},o=[],i={render:r,staticRenderFns:o};t.a=i},4:function(e,t,n){"use strict";var r,o,i,u,a;Object.defineProperty(t,"__esModule",{value:!0}),r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),i=null,u=null,a=null,t.default=new o.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget,n=this.enabled;t&&(n?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,t){var n=this.getThemeName,r=this.themeTarget;e=n(e),r.classList.remove(n(t)),r.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t,n=this;return e?(t=e.mdTheme,(function e(r){if(r){var o=r.mdTheme,i=r.$parent;return o&&o!==t?o:e(i)}return n.theme})(e.$parent)):null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){i&&i.setAttribute("content",e)},setThemeColors:function(e){u&&u.setAttribute("content",e)},setMaskColors:function(e){a&&a.setAttribute("color",e)},setHtmlMetaColors:function(e){var t,n="#fff";e&&(t=window.getComputedStyle(document.documentElement),n=t.getPropertyValue("--"+e+"-primary")),n&&(this.setMicrosoftColors(n),this.setThemeColors(n),this.setMaskColors(n))}},mounted:function(){var e=this;i=document.querySelector('[name="msapplication-TileColor"]'),u=document.querySelector('[name="theme-color"]'),a=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},5:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return o.default.util.defineReactive(t,"reactive",e),t.reactive},r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r)},526:function(e,t,n){e.exports=n(326)},6:function(e,t,n){!(function(t,n){e.exports=n()})(0,(function(){"use strict";function e(e){return!!e&&"object"==typeof e}function t(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||n(e)}function n(e){return e.$$typeof===f}function r(e){return Array.isArray(e)?[]:{}}function o(e,t){return!1!==t.clone&&t.isMergeableObject(e)?s(r(e),e,t):e}function i(e,t,n){return e.concat(t).map((function(e){return o(e,n)}))}function u(e,t){if(!t.customMerge)return s;var n=t.customMerge(e);return"function"==typeof n?n:s}function a(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach((function(t){r[t]=o(e[t],n)})),Object.keys(t).forEach((function(i){n.isMergeableObject(t[i])&&e[i]?r[i]=u(i,n)(e[i],t[i],n):r[i]=o(t[i],n)})),r}function s(e,t,n){var r,u,s;return n=n||{},n.arrayMerge=n.arrayMerge||i,n.isMergeableObject=n.isMergeableObject||l,r=Array.isArray(t),u=Array.isArray(e),s=r===u,s?r?n.arrayMerge(e,t,n):a(e,t,n):o(t,n)}var l=function(n){return e(n)&&!t(n)},c="function"==typeof Symbol&&Symbol.for,f=c?Symbol.for("react.element"):60103;return s.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce((function(e,n){return s(e,n,t)}),{})},s}))},7:function(e,t){}})}));