//для тестирования

var animateContent = 'enable';

/* NOTY 3.2.0-beta */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Noty",[],e):"object"==typeof exports?exports.Noty=e():t.Noty=e()}(this,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.css=e.deepExtend=e.animationEndEvents=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.inArray=function(t,e,n){var o=void 0;if(n){for(o in e)if(e.hasOwnProperty(o)&&e[o]===t)return!0}else for(o in e)if(e.hasOwnProperty(o)&&e[o]===t)return!0;return!1},e.stopPropagation=function(t){void 0!==(t=t||window.event).stopPropagation?t.stopPropagation():t.cancelBubble=!0},e.generateID=function(){var t="noty_"+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")+"_";return t+="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)})},e.outerHeight=function(t){var e=t.offsetHeight,n=window.getComputedStyle(t);return e+=parseInt(n.marginTop)+parseInt(n.marginBottom)},e.addListener=r,e.hasClass=s,e.addClass=function(t,e){var n=a(t),o=n+e;if(s(n,e))return;t.className=o.substring(1)},e.removeClass=function(t,e){var n=a(t),o=void 0;if(!s(t,e))return;o=n.replace(" "+e+" "," "),t.className=o.substring(1,o.length-1)},e.remove=u,e.classList=a,e.visibilityChangeFlow=function(){var t=void 0,e=void 0;void 0!==document.hidden?(t="hidden",e="visibilitychange"):void 0!==document.msHidden?(t="msHidden",e="msvisibilitychange"):void 0!==document.webkitHidden&&(t="webkitHidden",e="webkitvisibilitychange");function n(){i.PageHidden?setTimeout(function(){Object.keys(i.Store).forEach(function(t){i.Store.hasOwnProperty(t)&&i.Store[t].options.visibilityControl&&i.Store[t].stop()})},100):setTimeout(function(){Object.keys(i.Store).forEach(function(t){i.Store.hasOwnProperty(t)&&i.Store[t].options.visibilityControl&&i.Store[t].resume()}),i.queueRenderAll()},100)}e&&r(document,e,function(){i.PageHidden=document[t],n()});r(window,"blur",function(){i.PageHidden=!0,n()}),r(window,"focus",function(){i.PageHidden=!1,n()})},e.createAudioElements=function(t){if(t.hasSound){var e=document.createElement("audio");t.options.sounds.sources.forEach(function(t){var n=document.createElement("source");n.src=t,n.type="audio/"+t.match(/\.([^.]+)$/)[1],e.appendChild(n)}),t.barDom?t.barDom.appendChild(e):document.querySelector("body").appendChild(e),e.volume=t.options.sounds.volume,t.soundPlayed||(e.play(),t.soundPlayed=!0),e.onended=function(){u(e)}}};var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(1));e.animationEndEvents="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";e.deepExtend=function t(e){e=e||{};for(var n=1;n<arguments.length;n++){var i=arguments[n];if(i)for(var r in i)i.hasOwnProperty(r)&&(Array.isArray(i[r])?e[r]=i[r]:"object"===o(i[r])&&null!==i[r]?e[r]=t(e[r],i[r]):e[r]=i[r])}return e};e.css=function(){var t=["Webkit","O","Moz","ms"],e={};function n(n){return n=n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()}),e[n]||(e[n]=function(e){var n=document.body.style;if(e in n)return e;for(var o=t.length,i=e.charAt(0).toUpperCase()+e.slice(1),r=void 0;o--;)if((r=t[o]+i)in n)return r;return e}(n))}function o(t,e,o){e=n(e),t.style[e]=o}return function(t,e){var n=arguments,i=void 0,r=void 0;if(2===n.length)for(i in e)e.hasOwnProperty(i)&&void 0!==(r=e[i])&&e.hasOwnProperty(i)&&o(t,i,r);else o(t,n[1],n[2])}}();function r(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e=e.split(" ");for(var i=0;i<e.length;i++)document.addEventListener?t.addEventListener(e[i],n,o):document.attachEvent&&t.attachEvent("on"+e[i],n)}function s(t,e){return("string"==typeof t?t:a(t)).indexOf(" "+e+" ")>=0}function u(t){t.parentNode&&t.parentNode.removeChild(t)}function a(t){return(" "+(t&&t.className||"")+" ").replace(/\s+/gi," ")}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Defaults=e.Store=e.Queues=e.DefaultMaxVisible=e.docTitle=e.DocModalCount=e.PageHidden=void 0,e.getQueueCounts=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"global",e=0,n=u;a.hasOwnProperty(t)&&(n=a[t].maxVisible,Object.keys(c).forEach(function(n){c[n].options.queue!==t||c[n].closed||e++}));return{current:e,maxVisible:n}},e.addToQueue=function(t){a.hasOwnProperty(t.options.queue)||(a[t.options.queue]={maxVisible:u,queue:[]});a[t.options.queue].queue.push(t)},e.removeFromQueue=function(t){if(a.hasOwnProperty(t.options.queue)){var e=[];Object.keys(a[t.options.queue].queue).forEach(function(n){a[t.options.queue].queue[n].id!==t.id&&e.push(a[t.options.queue].queue[n])}),a[t.options.queue].queue=e}},e.queueRender=l,e.queueRenderAll=function(){Object.keys(a).forEach(function(t){l(t)})},e.ghostFix=function(t){var e=o.generateID("ghost"),n=document.createElement("div");n.setAttribute("id",e),o.css(n,{height:o.outerHeight(t.barDom)+"px"}),t.barDom.insertAdjacentHTML("afterend",n.outerHTML),o.remove(t.barDom),n=document.getElementById(e),o.addClass(n,"noty_fix_effects_height"),o.addListener(n,o.animationEndEvents,function(){o.remove(n)})},e.build=function(t){!function(t){if(t.options.container)return void(t.layoutDom=document.querySelector(t.options.container));var e="noty_layout__"+t.options.layout;t.layoutDom=document.querySelector("div#"+e),t.layoutDom||(t.layoutDom=document.createElement("div"),t.layoutDom.setAttribute("id",e),t.layoutDom.setAttribute("role","alert"),t.layoutDom.setAttribute("aria-live","polite"),o.addClass(t.layoutDom,"noty_layout"),document.querySelector("body").appendChild(t.layoutDom))}(t);var e='<div class="noty_body">'+t.options.text+"</div>"+function(t){if(d(t)){var e=document.createElement("div");return o.addClass(e,"noty_buttons"),Object.keys(t.options.buttons).forEach(function(n){e.appendChild(t.options.buttons[n].dom)}),t.options.buttons.forEach(function(t){e.appendChild(t.dom)}),e.outerHTML}return""}(t)+'<div class="noty_progressbar"></div>';t.barDom=document.createElement("div"),t.barDom.setAttribute("id",t.id),o.addClass(t.barDom,"noty_bar noty_type__"+t.options.type+" noty_theme__"+t.options.theme),t.barDom.innerHTML=e,p(t,"onTemplate")},e.hasButtons=d,e.handleModal=function(t){t.options.modal&&(0===i&&(n=document.querySelector("body"),r=document.createElement("div"),o.addClass(r,"noty_modal"),n.insertBefore(r,n.firstChild),o.addClass(r,"noty_modal_open"),o.addListener(r,o.animationEndEvents,function(){o.removeClass(r,"noty_modal_open")})),e.DocModalCount=i+=1);var n,r},e.handleModalClose=function(t){if(t.options.modal&&i>0&&(e.DocModalCount=i-=1,i<=0)){var n=document.querySelector(".noty_modal");n&&(o.removeClass(n,"noty_modal_open"),o.addClass(n,"noty_modal_close"),o.addListener(n,o.animationEndEvents,function(){o.remove(n)}))}},e.queueClose=f,e.dequeueClose=h,e.fire=p,e.openFlow=function(t){p(t,"afterShow"),f(t),o.addListener(t.barDom,"mouseenter",function(){h(t)}),o.addListener(t.barDom,"mouseleave",function(){f(t)})},e.closeFlow=function(t){delete c[t.id],t.closing=!1,p(t,"afterClose"),o.remove(t.barDom),0!==t.layoutDom.querySelectorAll(".noty_bar").length||t.options.container||o.remove(t.layoutDom);(o.inArray("docVisible",t.options.titleCount.conditions)||o.inArray("docHidden",t.options.titleCount.conditions))&&s.decrement();l(t.options.queue)};var o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0));e.PageHidden=!1;var i=e.DocModalCount=0,r={originalTitle:null,count:0,changed:!1,timer:-1},s=e.docTitle={increment:function(){r.count++,s._update()},decrement:function(){r.count--,r.count<=0?s._clear():s._update()},_update:function(){var t=document.title;r.changed?document.title="("+r.count+") "+r.originalTitle:(r.originalTitle=t,document.title="("+r.count+") "+t,r.changed=!0)},_clear:function(){r.changed&&(r.count=0,document.title=r.originalTitle,r.changed=!1)}},u=e.DefaultMaxVisible=5,a=e.Queues={global:{maxVisible:u,queue:[]}},c=e.Store={};e.Defaults={type:"alert",layout:"topRight",theme:"mint",text:"",timeout:!1,progressBar:!0,closeWith:["click"],animation:{open:"noty_effects_open",close:"noty_effects_close"},id:!1,force:!1,killer:!1,queue:"global",container:!1,buttons:[],callbacks:{beforeShow:null,onShow:null,afterShow:null,onClose:null,afterClose:null,onClick:null,onHover:null,onTemplate:null},sounds:{sources:[],volume:1,conditions:[]},titleCount:{conditions:[]},modal:!1,visibilityControl:!1};function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"global";if(a.hasOwnProperty(t)){var e=a[t].queue.shift();e&&e.show()}}function d(t){return!(!t.options.buttons||!Object.keys(t.options.buttons).length)}function f(t){t.options.timeout&&(t.options.progressBar&&t.progressDom&&o.css(t.progressDom,{transition:"width "+t.options.timeout+"ms linear",width:"0%"}),clearTimeout(t.closeTimer),t.closeTimer=setTimeout(function(){t.close()},t.options.timeout))}function h(t){t.options.timeout&&t.closeTimer&&(clearTimeout(t.closeTimer),t.closeTimer=-1,t.options.progressBar&&t.progressDom&&o.css(t.progressDom,{transition:"width 0ms linear",width:"100%"}))}function p(t,e){t.listeners.hasOwnProperty(e)&&t.listeners[e].forEach(function(e){"function"==typeof e&&e.apply(t)})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.NotyButton=void 0;var o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0));e.NotyButton=function t(e,n,i){var r=this,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dom=document.createElement("button"),this.dom.innerHTML=e,this.id=s.id=s.id||o.generateID("button"),this.cb=i,Object.keys(s).forEach(function(t){r.dom.setAttribute(t,s[t])}),o.addClass(this.dom,n||"noty_btn"),this}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();e.Push=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/service-worker.js";return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.subData={},this.workerPath=e,this.listeners={onPermissionGranted:[],onPermissionDenied:[],onSubscriptionSuccess:[],onSubscriptionCancel:[],onWorkerError:[],onWorkerSuccess:[],onWorkerNotSupported:[]},this}return o(t,[{key:"on",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return"function"==typeof e&&this.listeners.hasOwnProperty(t)&&this.listeners[t].push(e),this}},{key:"fire",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.listeners.hasOwnProperty(t)&&this.listeners[t].forEach(function(t){"function"==typeof t&&t.apply(e,n)})}},{key:"create",value:function(){console.log("NOT IMPLEMENTED YET")}},{key:"isSupported",value:function(){var t=!1;try{t=window.Notification||window.webkitNotifications||navigator.mozNotification||window.external&&void 0!==window.external.msIsSiteMode()}catch(t){}return t}},{key:"getPermissionStatus",value:function(){var t="default";if(window.Notification&&window.Notification.permissionLevel)t=window.Notification.permissionLevel;else if(window.webkitNotifications&&window.webkitNotifications.checkPermission)switch(window.webkitNotifications.checkPermission()){case 1:t="default";break;case 0:t="granted";break;default:t="denied"}else window.Notification&&window.Notification.permission?t=window.Notification.permission:navigator.mozNotification?t="granted":window.external&&void 0!==window.external.msIsSiteMode()&&(t=window.external.msIsSiteMode()?"granted":"default");return t.toString().toLowerCase()}},{key:"getEndpoint",value:function(t){var e=t.endpoint,n=t.subscriptionId;return n&&-1===e.indexOf(n)&&(e+="/"+n),e}},{key:"isSWRegistered",value:function(){try{return"activated"===navigator.serviceWorker.controller.state}catch(t){return!1}}},{key:"unregisterWorker",value:function(){var t=this;"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then(function(e){var n=!0,o=!1,i=void 0;try{for(var r,s=e[Symbol.iterator]();!(n=(r=s.next()).done);n=!0){r.value.unregister(),t.fire("onSubscriptionCancel")}}catch(t){o=!0,i=t}finally{try{!n&&s.return&&s.return()}finally{if(o)throw i}}})}},{key:"requestSubscription",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=this,o=this.getPermissionStatus(),i=function(o){"granted"===o?(t.fire("onPermissionGranted"),"serviceWorker"in navigator?navigator.serviceWorker.register(t.workerPath).then(function(){navigator.serviceWorker.ready.then(function(t){n.fire("onWorkerSuccess"),t.pushManager.subscribe({userVisibleOnly:e}).then(function(t){var e=t.getKey("p256dh"),o=t.getKey("auth");n.subData={endpoint:n.getEndpoint(t),p256dh:e?window.btoa(String.fromCharCode.apply(null,new Uint8Array(e))):null,auth:o?window.btoa(String.fromCharCode.apply(null,new Uint8Array(o))):null},n.fire("onSubscriptionSuccess",[n.subData])}).catch(function(t){n.fire("onWorkerError",[t])})})}):n.fire("onWorkerNotSupported")):"denied"===o&&(t.fire("onPermissionDenied"),t.unregisterWorker())};"default"===o?window.Notification&&window.Notification.requestPermission?window.Notification.requestPermission(i):window.webkitNotifications&&window.webkitNotifications.checkPermission&&window.webkitNotifications.requestPermission(i):i(o)}}]),t}()},function(t,e,n){(function(e,o){var i;i=function(){"use strict";function t(t){return"function"==typeof t}var i=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},r=0,s=void 0,u=void 0,a=function(t,e){m[r]=t,m[r+1]=e,2===(r+=2)&&(u?u(v):_())},c="undefined"!=typeof window?window:void 0,l=c||{},d=l.MutationObserver||l.WebKitMutationObserver,f="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function p(){var t=setTimeout;return function(){return t(v,1)}}var m=new Array(1e3);function v(){for(var t=0;t<r;t+=2){(0,m[t])(m[t+1]),m[t]=void 0,m[t+1]=void 0}r=0}var y,b,w,g,_=void 0;function k(t,e){var n=arguments,o=this,i=new this.constructor(D);void 0===i[S]&&F(i);var r,s=o._state;return s?(r=n[s-1],a(function(){return V(s,i,r,o._result)})):L(o,i,t,e),i}function C(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(D);return M(e,t),e}f?_=function(){return e.nextTick(v)}:d?(b=0,w=new d(v),g=document.createTextNode(""),w.observe(g,{characterData:!0}),_=function(){g.data=b=++b%2}):h?((y=new MessageChannel).port1.onmessage=v,_=function(){return y.port2.postMessage(0)}):_=void 0===c?function(){try{var t=n(9);return void 0!==(s=t.runOnLoop||t.runOnContext)?function(){s(v)}:p()}catch(t){return p()}}():p();var S=Math.random().toString(36).substring(16);function D(){}var x=void 0,E=1,P=2,T=new W;function O(t){try{return t.then}catch(t){return T.error=t,T}}function A(e,n,o){n.constructor===e.constructor&&o===k&&n.constructor.resolve===C?function(t,e){e._state===E?j(t,e._result):e._state===P?N(t,e._result):L(e,void 0,function(e){return M(t,e)},function(e){return N(t,e)})}(e,n):o===T?(N(e,T.error),T.error=null):void 0===o?j(e,n):t(o)?function(t,e,n){a(function(t){var o=!1,i=function(t,e,n,o){try{t.call(e,n,o)}catch(t){return t}}(n,e,function(n){o||(o=!0,e!==n?M(t,n):j(t,n))},function(e){o||(o=!0,N(t,e))},t._label);!o&&i&&(o=!0,N(t,i))},t)}(e,n,o):j(e,n)}function M(t,e){var n,o;t===e?N(t,new TypeError("You cannot resolve a promise with itself")):(o=typeof(n=e),null===n||"object"!==o&&"function"!==o?j(t,e):A(t,e,O(e)))}function q(t){t._onerror&&t._onerror(t._result),H(t)}function j(t,e){t._state===x&&(t._result=e,t._state=E,0!==t._subscribers.length&&a(H,t))}function N(t,e){t._state===x&&(t._state=P,t._result=e,a(q,t))}function L(t,e,n,o){var i=t._subscribers,r=i.length;t._onerror=null,i[r]=e,i[r+E]=n,i[r+P]=o,0===r&&t._state&&a(H,t)}function H(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var o=void 0,i=void 0,r=t._result,s=0;s<e.length;s+=3)o=e[s],i=e[s+n],o?V(n,o,i,r):i(r);t._subscribers.length=0}}function W(){this.error=null}var Q=new W;function V(e,n,o,i){var r=t(o),s=void 0,u=void 0,a=void 0,c=void 0;if(r){if((s=function(t,e){try{return t(e)}catch(t){return Q.error=t,Q}}(o,i))===Q?(c=!0,u=s.error,s.error=null):a=!0,n===s)return void N(n,new TypeError("A promises callback cannot return that same promise."))}else s=i,a=!0;n._state!==x||(r&&a?M(n,s):c?N(n,u):e===E?j(n,s):e===P&&N(n,s))}var B=0;function F(t){t[S]=B++,t._state=void 0,t._result=void 0,t._subscribers=[]}function I(t,e){this._instanceConstructor=t,this.promise=new t(D),this.promise[S]||F(this.promise),i(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?j(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&j(this.promise,this._result))):N(this.promise,new Error("Array Methods must be provided an Array"))}function R(t){this[S]=B++,this._result=this._state=void 0,this._subscribers=[],D!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof R?function(t,e){try{e(function(e){M(t,e)},function(e){N(t,e)})}catch(e){N(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return I.prototype._enumerate=function(t){for(var e=0;this._state===x&&e<t.length;e++)this._eachEntry(t[e],e)},I.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,o=n.resolve;if(o===C){var i=O(t);if(i===k&&t._state!==x)this._settledAt(t._state,e,t._result);else if("function"!=typeof i)this._remaining--,this._result[e]=t;else if(n===R){var r=new n(D);A(r,t,i),this._willSettleAt(r,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(o(t),e)},I.prototype._settledAt=function(t,e,n){var o=this.promise;o._state===x&&(this._remaining--,t===P?N(o,n):this._result[e]=n),0===this._remaining&&j(o,this._result)},I.prototype._willSettleAt=function(t,e){var n=this;L(t,void 0,function(t){return n._settledAt(E,e,t)},function(t){return n._settledAt(P,e,t)})},R.all=function(t){return new I(this,t).promise},R.race=function(t){var e=this;return i(t)?new e(function(n,o){for(var i=t.length,r=0;r<i;r++)e.resolve(t[r]).then(n,o)}):new e(function(t,e){return e(new TypeError("You must pass an array to race."))})},R.resolve=C,R.reject=function(t){var e=new this(D);return N(e,t),e},R._setScheduler=function(t){u=t},R._setAsap=function(t){a=t},R._asap=a,R.prototype={constructor:R,then:k,catch:function(t){return this.then(null,t)}},R.polyfill=function(){var t=void 0;if(void 0!==o)t=o;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=R},R.Promise=R,R},t.exports=i()}).call(e,n(7),n(8))},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();n(5);var i,r=n(4),s=(i=r)&&i.__esModule?i:{default:i},u=d(n(0)),a=d(n(1)),c=n(2),l=n(3);function d(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}var f=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=u.deepExtend({},a.Defaults,e),a.Store[this.options.id]?a.Store[this.options.id]:(this.id=this.options.id||u.generateID("bar"),this.closeTimer=-1,this.barDom=null,this.layoutDom=null,this.progressDom=null,this.showing=!1,this.shown=!1,this.closed=!1,this.closing=!1,this.killable=this.options.timeout||this.options.closeWith.length>0,this.hasSound=this.options.sounds.sources.length>0,this.soundPlayed=!1,this.listeners={beforeShow:[],onShow:[],afterShow:[],onClose:[],afterClose:[],onClick:[],onHover:[],onTemplate:[]},this.promises={show:null,close:null},this.on("beforeShow",this.options.callbacks.beforeShow),this.on("onShow",this.options.callbacks.onShow),this.on("afterShow",this.options.callbacks.afterShow),this.on("onClose",this.options.callbacks.onClose),this.on("afterClose",this.options.callbacks.afterClose),this.on("onClick",this.options.callbacks.onClick),this.on("onHover",this.options.callbacks.onHover),this.on("onTemplate",this.options.callbacks.onTemplate),this)}return o(t,[{key:"on",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return"function"==typeof e&&this.listeners.hasOwnProperty(t)&&this.listeners[t].push(e),this}},{key:"show",value:function(){var e=this;if(this.showing||this.shown)return this;!0===this.options.killer?t.closeAll():"string"==typeof this.options.killer&&t.closeAll(this.options.killer);var n=a.getQueueCounts(this.options.queue);if(n.current>=n.maxVisible||a.PageHidden&&this.options.visibilityControl)return a.addToQueue(this),a.PageHidden&&this.hasSound&&u.inArray("docHidden",this.options.sounds.conditions)&&u.createAudioElements(this),a.PageHidden&&u.inArray("docHidden",this.options.titleCount.conditions)&&a.docTitle.increment(),this;if(a.Store[this.id]=this,a.fire(this,"beforeShow"),this.showing=!0,this.closing)return this.showing=!1,this;if(a.build(this),a.handleModal(this),this.options.force?this.layoutDom.insertBefore(this.barDom,this.layoutDom.firstChild):this.layoutDom.appendChild(this.barDom),this.hasSound&&!this.soundPlayed&&u.inArray("docVisible",this.options.sounds.conditions)&&u.createAudioElements(this),u.inArray("docVisible",this.options.titleCount.conditions)&&a.docTitle.increment(),this.shown=!0,this.closed=!1,a.hasButtons(this)&&Object.keys(this.options.buttons).forEach(function(t){var n=e.barDom.querySelector("#"+e.options.buttons[t].id);u.addListener(n,"click",function(n){u.stopPropagation(n),e.options.buttons[t].cb(e)})}),this.progressDom=this.barDom.querySelector(".noty_progressbar"),u.inArray("click",this.options.closeWith)&&(u.addClass(this.barDom,"noty_close_with_click"),u.addListener(this.barDom,"click",function(t){u.stopPropagation(t),a.fire(e,"onClick"),e.close()},!1)),u.addListener(this.barDom,"mouseenter",function(){a.fire(e,"onHover")},!1),this.options.timeout&&u.addClass(this.barDom,"noty_has_timeout"),this.options.progressBar&&u.addClass(this.barDom,"noty_has_progressbar"),u.inArray("button",this.options.closeWith)){u.addClass(this.barDom,"noty_close_with_button");var o=document.createElement("div");u.addClass(o,"noty_close_button"),o.innerHTML="Г—",this.barDom.appendChild(o),u.addListener(o,"click",function(t){u.stopPropagation(t),e.close()},!1)}return a.fire(this,"onShow"),null===this.options.animation.open?this.promises.show=new s.default(function(t){t()}):"function"==typeof this.options.animation.open?this.promises.show=new s.default(this.options.animation.open.on(this)):(u.addClass(this.barDom,this.options.animation.open),this.promises.show=new s.default(function(t){u.addListener(e.barDom,u.animationEndEvents,function(){u.removeClass(e.barDom,e.options.animation.open),t()})})),this.promises.show.then(function(){var t=e;setTimeout(function(){a.openFlow(t)},100)}),this}},{key:"stop",value:function(){return a.dequeueClose(this),this}},{key:"resume",value:function(){return a.queueClose(this),this}},{key:"setTimeout",value:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){if(this.stop(),this.options.timeout=t,this.barDom){this.options.timeout?u.addClass(this.barDom,"noty_has_timeout"):u.removeClass(this.barDom,"noty_has_timeout");var e=this;setTimeout(function(){e.resume()},100)}return this})},{key:"setText",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.barDom&&(this.barDom.querySelector(".noty_body").innerHTML=t),e&&(this.options.text=t),this}},{key:"setType",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.barDom&&(u.classList(this.barDom).split(" ").forEach(function(t){"noty_type__"===t.substring(0,11)&&u.removeClass(e.barDom,t)}),u.addClass(this.barDom,"noty_type__"+t));return n&&(this.options.type=t),this}},{key:"setTheme",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.barDom&&(u.classList(this.barDom).split(" ").forEach(function(t){"noty_theme__"===t.substring(0,12)&&u.removeClass(e.barDom,t)}),u.addClass(this.barDom,"noty_theme__"+t));return n&&(this.options.theme=t),this}},{key:"close",value:function(){var t=this;return this.closed?this:this.shown?(a.fire(this,"onClose"),this.closing=!0,null===this.options.animation.close||!1===this.options.animation.close?this.promises.close=new s.default(function(t){t()}):"function"==typeof this.options.animation.close?this.promises.close=new s.default(this.options.animation.close.on(this)):(u.addClass(this.barDom,this.options.animation.close),this.promises.close=new s.default(function(e){u.addListener(t.barDom,u.animationEndEvents,function(){t.options.force?u.remove(t.barDom):a.ghostFix(t),e()})})),this.promises.close.then(function(){a.closeFlow(t),a.handleModalClose(t)}),this.closed=!0,this):(a.removeFromQueue(this),this)}}],[{key:"closeAll",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object.keys(a.Store).forEach(function(e){t?a.Store[e].options.queue===t&&a.Store[e].killable&&a.Store[e].close():a.Store[e].killable&&a.Store[e].close()}),this}},{key:"clearQueue",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"global";return a.Queues.hasOwnProperty(t)&&(a.Queues[t].queue=[]),this}},{key:"overrideDefaults",value:function(t){return a.Defaults=u.deepExtend({},a.Defaults,t),this}},{key:"setMaxVisible",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.DefaultMaxVisible,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"global";return a.Queues.hasOwnProperty(e)||(a.Queues[e]={maxVisible:t,queue:[]}),a.Queues[e].maxVisible=t,this}},{key:"button",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return new c.NotyButton(t,e,n,o)}},{key:"version",value:function(){return"3.2.0-beta"}},{key:"Push",value:function(t){return new l.Push(t)}},{key:"Queues",get:function(){return a.Queues}},{key:"PageHidden",get:function(){return a.PageHidden}}]),t}();e.default=f,"undefined"!=typeof window&&u.visibilityChangeFlow(),t.exports=e.default},function(t,e){var n,o,i=t.exports={};function r(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(t){if(n===setTimeout)return setTimeout(t,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(t){n=r}try{o="function"==typeof clearTimeout?clearTimeout:s}catch(t){o=s}}();var a,c=[],l=!1,d=-1;function f(){l&&a&&(l=!1,a.length?c=a.concat(c):d=-1,c.length&&h())}function h(){if(!l){var t=u(f);l=!0;for(var e=c.length;e;){for(a=c,c=[];++d<e;)a&&a[d].run();d=-1,e=c.length}a=null,l=!1,function(t){if(o===clearTimeout)return clearTimeout(t);if((o===s||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function m(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new p(t,e)),1!==c.length||l||u(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){}])});

function getAjaxContent(e, typeClick, post){
	e = typeof e == "undefined" ? false : e;
	typeClick = typeof typeClick == "undefined" ? "" : typeClick;

	if(typeof e == 'object'){
		var url = e.attr('href');
		var target = e.attr('target');
	}
	else if(typeof e == 'string' && e != ""){
		url = e;
		target = '';
	}
	else{
		console.error('error getAjaxContent');

		if(typeClick != 'history'){
			return false;
		}
	}

	if(target != '_blank' && url != '' && url.indexOf('#') == -1 && url.indexOf(':') == -1){
		if(window.stop !== undefined){
			window.stop();
		} else if (document.execCommand !== undefined){
			document.execCommand("Stop", false);
		}

		$('.modal').modal('hide');
		$('.modalWindow').modal('hide');
		mod = url;
		mod = mod.replace(path, '');
		mod = mod.replace('./?page=', '');
		mod = mod.replace('?page=', '');
		mod = mod.split('&');
		mod = mod[0];
		mod = mod.split('/');
		mod = mod[0];
		mod = mod.split('-');
		mod = mod[0];

		spl = seo > 0 ? "/" : "&";

		if(url == path) page = url + mod;
		else page = url;

		if(false == mod){
			mod = home;
			page = seo > 0 ? url + mod : url + "?page=" + mod;
		}

		NProgress.start();

		var timerId = setInterval(function(){
			clearInterval(timerId);
		}, 200);

		xhrClick = $.ajax({
			url: page + spl + 'ajax',
			method: typeof post == "undefined" ? 'get' : 'post',
			data: typeof post == "undefined" ? '' : post,
			beforeSend: function (jqXHR, settings) {
				var self = this;
				var xhr = settings.xhr;
				settings.xhr = function () {
					var output = xhr();
					output.onreadystatechange = function () {
						if (typeof(self.readyStateChanged) == "function") {
							self.readyStateChanged(this);
						}
					};
					return output;
				};

				$('[data-toggle="tooltip"], .tooltip').tooltip("hide");

				if(typeof xhrClick === "object" && xhrClick !== null){
					xhrClick.abort();
				}
			},
			readyStateChanged: function (xhr) {
				if (xhr.readyState === 1) {
					NProgress.set(0.5);
				}
				else if (xhr.readyState === 2) {
					NProgress.set(0.7);
				}
				else if (xhr.readyState === 3) {
					NProgress.set(0.9);
				}
				else if (xhr.readyState === 4) {
					NProgress.done();
				}
			},
			error:function(jqXHR, textStatus, errorThrown){
				clearInterval(timerId);

				if(typeClick != 'history'){
					if($('#checkScrollTop').is(':checked')){
						$('html,body').animate({scrollTop: $('#top_nav').offset().top}, 90);
					}
				}

				if(jqXHR.responseText != undefined){
					$('#content').html(jqXHR.responseText);
				}
				else if(jqXHR.statusText != 'abort'){
					$('#content').html(jqXHR.responseText);
				}

				new Noty({
					type: 'error',
					layout: 'bottomRight',
					theme: 'sunset',
					text: textStatus + '<br>Status code: ' + jqXHR.status,
					timeout: 10000,
					progressBar: true
				}).show();

				//console.log('url: ' + page + spl + 'ajax');
			},
			complete: function(data){
				
			}
		}).done(function(data) {
			clearInterval(timerId);

			if(typeClick != 'history'){
				if($('#checkScrollTop').is(':checked')){
					$('html,body').animate({scrollTop: $('#top_nav').offset().top}, 90);
				}
			}

			if(data.length > 500){
				var hitle = $(data).find('#hitle').text();
				if(hitle != '') $('title').text(hitle);
			}

			$('.profile ul li a').removeAttr('class');
			$('#mod_class').removeAttr('class');
			$('#mod_class').addClass('right_col mod_' + mod);

			if(animateContent == 'enable') {
				$('#content *').removeAttr('id');
				$('#content').wrapInner('<div id="delete_old_content">');

				var tempRemover = $('#delete_old_content').detach();
				tempRemover.appendTo('#tempRemover');

				$('#content').append(data).css({
					right: '-600px'
				}).animate({
					right: 0
				}, 200);

				setTimeout(function(){
					$('#delete_old_content').remove();
				}, 300);
			} else {
				$('#content').html(data);
			}

			$('[data-toggle="tooltip"]').tooltip({html: true, items: ".tooltip:not(:focus)"});
		});

		if(typeClick != 'history'){
			if(url != window.location){
				window.history.pushState(null, null, url);
			}

			return false;
		}
	}
}

function form_submit_ajax(form_data, link_url){
	link_url = typeof link_url == "undefined" ? "" : link_url;

	setTimeout(function(){
		$('[data-toggle="tooltip"]').tooltip();
	}, 350);

	function disableForm(formID, status){
		$("#" + formID + " :input").prop("disabled", status);
		$("#" + formID + " select").prop("disabled", status);
		$("#" + formID + " textarea").prop("disabled", status);
		$("#button_" + formID).prop("disabled", status);

		return status;
	}

	if(link_url == "link"){
		$("#" + form_data).on('submit', function(e){
			e.preventDefault();
			NProgress.start();

			var sendData = $("#" + form_data).serialize();

			if(seo == 1){
				sendData = sendData.replace('page=', '');
				sendData = sendData.replace('&', '/');
				sendData = sendData.replace('=', '-');
			}
			else sendData = "?" + sendData;

			getAjaxContent(path + sendData, '');

			if(path + sendData != window.location){
				window.history.pushState(null, null, path + sendData);
			}
		});
		
		return true;
	}
	else if(link_url == "send"){
		NProgress.start();

		$.ajax({
			url: form_data,
			async: true,
			method: "get",
			data: "",
			error:function(jqXHR, s, e){
				new Noty({
					type: "error",
					layout: "bottomRight",
					theme: "sunset",
					text: "error",
					timeout: 120000,
					progressBar: true
				}).show();
	
			},
		}).done(function(s){
			try
			{
				var r = JSON.parse(s);
			}
			catch(e)
			{
				console.log(e);

				var r = new Array();

				r['type'] = 'error';
				r['msg'] = e.name + "<br>" + e.message + "<hr>" + s;
			}

			text = (r["error"] != "" ? r["error"] : "") + r["msg"];

			new Noty({
				type: r["type"],
				layout: "bottomRight",
				theme: "sunset",
				text: text,
				timeout: r['type'] == 'error' ? 120000 : 7000,
				progressBar: true
			}).show();

			if(typeof r['debug'] != 'undefined'){
				new Noty({
					type: 'success',
					layout: "bottomRight",
					theme: "sunset",
					text: r['debug'],
					timeout: 60000,
					progressBar: true
				}).show();
			}

			$("#formSender").attr('data-original-title', text)
				.tooltip({
					html: true,
					content: text,
					show: "slideDown"
				})
				.mouseover();

			if(r["type"] == "success" && typeof(r["page_update"]) != "undefined" && r["page_update"] !== null && r["page_update"] != ""){
				getAjaxContent(r["page_update"], '');
			}
		});
	
		return true;
	}

	$("#" + form_data).on('submit', function(e){
		e.preventDefault();
		NProgress.start();

		var sendData = $("#" + form_data).serialize(); sendData += "&test=test";

		console.log(e.currentTarget.action);

		$.ajax({
			url: e.currentTarget.action,
			type: "post",
			data: sendData,
			beforeSend: function (jqXHR, settings) {
				var self = this;
				var xhr = settings.xhr;
				settings.xhr = function () {
					var output = xhr();
					output.onreadystatechange = function () {
						if (typeof(self.readyStateChanged) == "function") {
							self.readyStateChanged(this);
						}
					};
					return output;
				};

				disableForm(form_data, true);
			},
			readyStateChanged: function (xhr) {
				if (xhr.readyState === 1) {
					NProgress.set(0.3);
				}
				else if (xhr.readyState === 2) {
					NProgress.set(0.6);
				}
				else if (xhr.readyState === 3) {
					NProgress.set(0.8);
				}
				else if (xhr.readyState === 4) {
					NProgress.done();
				}
			},
			error:function(jqXHR, textStatus, errorThrown){
				if(jqXHR.responseText != undefined){
					NProgress.done();
				}
				else if(jqXHR.statusText != "abort"){
					$('#content').html(jqXHR.responseText);
				}

				new Noty({
					type: "error",
					layout: "bottomRight",
					theme: "sunset",
					text: "status: " + jqXHR.status + " " + textStatus + " " + errorThrown,
					timeout: 60000,
					progressBar: true
				}).show();

				setTimeout(function(){
					$("#noty_layout__bottomRight a").on("click", function(){
						return getAjaxContent($(this), '');
					});
				}, 1200);

				disableForm(form_data, false);
			},
			success: function(s){
				try
				{
					var r = JSON.parse(s);
				}
				catch(e)
				{
					console.log(e);

					var r = new Array();

					r['type'] = 'error';
					r['msg'] = e.name + "<br>" + e.message + "<hr>" + s;
				}

				text = (r["error"] != "" ? r["error"] + "<br>" : "") + r["msg"];

				new Noty({
					type: r["type"],
					layout: "bottomRight",
					theme: "sunset",
					text: text,
					timeout: r['type'] == 'error' ? 120000 : 7000,
					progressBar: true
				}).show();

				if(typeof r['debug'] != 'undefined'){
					new Noty({
						type: 'success',
						layout: "bottomRight",
						theme: "sunset",
						text: r['debug'],
						timeout: 60000,
						progressBar: true
					}).show();
				}
	
				NProgress.done();

				if(r["type"] == "success" && typeof(r["page_update"]) != "undefined" && r["page_update"] !== null && r["page_update"] != ""){
					getAjaxContent(r["page_update"], '');
				}

				setTimeout(function(){
					$("#noty_layout__bottomRight a").on("click", function(){
						return getAjaxContent($(this), '');
					});

					disableForm(form_data, false);

					if(r["type"] == "success" && typeof(r["modal_delete"]) != "undefined" && r["modal_delete"] !== null && r["modal_delete"] != ""){
						$("#" + r["modal_delete"]).modal("hide");

						setTimeout(function(){
							$("#" + r["modal_delete"]).remove();
						}, 500);
					}
				}, 500);

				if(typeof(r["clean"]) != "undefined" && r["clean"] == "form"){
					document.getElementById(form_data).reset();
				}
			}
		});
	});
};

$(document).ready(function($){
    //ссылки открываю через аякс
    $(document).on("click", "a:not('.out, .backend')", function(){
        return getAjaxContent($(this), '');
    });

    //добавляю ссылки в историю браузера
    $(window).on('popstate', function(){
        getAjaxContent(location.pathname + location.search, 'history');
    });
});
