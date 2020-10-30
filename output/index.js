/*!
 * react-svga cjs 0.1.1
 * (c) 2020 - 2020 jackness
 * Released under the MIT License.
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,t,n=require("react"),r=(e=n)&&"object"==typeof e&&"default"in e?e.default:e,o=require("svga.lite");(t=exports.EVENT_TYPES||(exports.EVENT_TYPES={})).START="start",t.PROCESS="process",t.PAUSE="pause",t.STOP="stop",t.END="end",t.CLEAR="clear",exports.Svga=function(e){var t=e.src,u=e.on,a=e.stop,s=e.option,c=e.className,E=n.useRef(null),i=n.useState(new o.Parser)[0],f=n.useState(),l=f[0],p=f[1],T=n.useState(new o.Downloader)[0],S=n.useState(),P=S[0],x=S[1],b=n.useCallback((function(e){return t=void 0,n=void 0,o=function(){var t,n;return function(e,t){var n,r,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function s(u){return function(s){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}}(this,(function(r){switch(r.label){case 0:return T&&i?[4,T.get(e)]:[3,3];case 1:return t=r.sent(),[4,i.do(t)];case 2:n=r.sent(),x(n),r.label=3;case 3:return[2]}}))},new((r=void 0)||(r=Promise))((function(e,u){function a(e){try{c(o.next(e))}catch(e){u(e)}}function s(e){try{c(o.throw(e))}catch(e){u(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,s)}c((o=o.apply(t,n||[])).next())}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var t,n,r,o}),[T,i]);return n.useEffect((function(){E.current&&p(new o.Player(E.current))}),[E]),n.useEffect((function(){l&&u&&(l.$on(exports.EVENT_TYPES.CLEAR,(function(){u(exports.EVENT_TYPES.CLEAR)})),l.$on(exports.EVENT_TYPES.END,(function(){u(exports.EVENT_TYPES.END)})),l.$on(exports.EVENT_TYPES.PAUSE,(function(){u(exports.EVENT_TYPES.PAUSE)})),l.$on(exports.EVENT_TYPES.PROCESS,(function(){u(exports.EVENT_TYPES.PROCESS)})),l.$on(exports.EVENT_TYPES.START,(function(){u(exports.EVENT_TYPES.START)})),l.$on(exports.EVENT_TYPES.STOP,(function(){u(exports.EVENT_TYPES.STOP)})))}),[l,u]),n.useEffect((function(){l&&P&&(l.clear(),a||(s&&l.set(s),l.mount(P),l.start()))}),[l,s,P,a]),n.useEffect((function(){b(t)}),[b,t]),n.useEffect((function(){}),[l,T,i,t]),r.createElement("canvas",{ref:E,className:c})};
