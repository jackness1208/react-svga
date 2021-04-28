/*!
 * react-svga cjs 0.1.5
 * (c) 2020 - 2021 jackness
 * Released under the MIT License.
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,t,n=require("react"),r=(e=n)&&"object"==typeof e&&"default"in e?e.default:e,o=require("svga.lite");(t=exports.EVENT_TYPES||(exports.EVENT_TYPES={})).START="start",t.PROCESS="process",t.PAUSE="pause",t.STOP="stop",t.END="end",t.CLEAR="clear";var u=function(e){var t=e.src,u=e.on,c=e.stop,a=e.option,s=e.className,i=n.useRef(null),E=n.useState(),f=E[0],l=E[1],p=n.useState(),T=p[0],S=p[1];return n.useEffect((function(){if(i.current){var e=new o.Player(i.current);return l(e),function(){e.clear()}}}),[i]),n.useEffect((function(){f&&u&&(f.$on(exports.EVENT_TYPES.CLEAR,(function(){u(exports.EVENT_TYPES.CLEAR)})),f.$on(exports.EVENT_TYPES.END,(function(){u(exports.EVENT_TYPES.END)})),f.$on(exports.EVENT_TYPES.PAUSE,(function(){u(exports.EVENT_TYPES.PAUSE)})),f.$on(exports.EVENT_TYPES.PROCESS,(function(){u(exports.EVENT_TYPES.PROCESS)})),f.$on(exports.EVENT_TYPES.START,(function(){u(exports.EVENT_TYPES.START)})),f.$on(exports.EVENT_TYPES.STOP,(function(){u(exports.EVENT_TYPES.STOP)})))}),[f,u]),n.useEffect((function(){f&&T&&(f.clear(),c||(a&&f.set(a),f.mount(T),f.start()))}),[f,a,T,c]),n.useEffect((function(){(function(e){return t=this,n=void 0,u=function(){var t,n;return function(e,t){var n,r,o,u,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return c.label++,{value:u[1],done:!1};case 5:c.label++,r=u[1],u=[0];continue;case 7:u=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){c=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){c.label=u[1];break}if(6===u[0]&&c.label<o[1]){c.label=o[1],o=u;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(u);break}o[2]&&c.ops.pop(),c.trys.pop();continue}u=t.call(e,c)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}(this,(function(r){switch(r.label){case 0:return t=new o.Parser,[4,(new o.Downloader).get(e)];case 1:return n=r.sent(),[4,t.do(n)];case 2:return[2,r.sent()]}}))},new((r=void 0)||(r=Promise))((function(e,o){function c(e){try{s(u.next(e))}catch(e){o(e)}}function a(e){try{s(u.throw(e))}catch(e){o(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(c,a)}s((u=u.apply(t,n||[])).next())}));
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
var t,n,r,u})(t).then((function(e){S(e)}))}),[t]),r.createElement("canvas",{ref:i,className:s})},c=n.memo(u,(function(e,t){return e.src===t.src}));exports.Svga=c,exports.SvgaAvt=u;
