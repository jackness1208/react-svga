/*!
 * react-svga cjs 0.1.3
 * (c) 2020 - 2020 jackness
 * Released under the MIT License.
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,t,n=require("react"),r=(e=n)&&"object"==typeof e&&"default"in e?e.default:e,o=require("svga.lite");(t=exports.EVENT_TYPES||(exports.EVENT_TYPES={})).START="start",t.PROCESS="process",t.PAUSE="pause",t.STOP="stop",t.END="end",t.CLEAR="clear";var u=new o.Parser,a=new o.Downloader,c=function(e){var t=e.src,c=e.on,s=e.stop,i=e.option,E=e.className,f=n.useRef(null),l=n.useState(),p=l[0],T=l[1],S=n.useState(),P=S[0],v=S[1],x=n.useCallback((function(e){return t=void 0,n=void 0,o=function(){var t,n;return function(e,t){var n,r,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(u){return function(c){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}}(this,(function(r){switch(r.label){case 0:return[4,a.get(e)];case 1:return t=r.sent(),[4,u.do(t)];case 2:return n=r.sent(),v(n),[2]}}))},new((r=void 0)||(r=Promise))((function(e,u){function a(e){try{s(o.next(e))}catch(e){u(e)}}function c(e){try{s(o.throw(e))}catch(e){u(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,c)}s((o=o.apply(t,n||[])).next())}));
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
var t,n,r,o}),[]);return n.useEffect((function(){if(f.current){var e=new o.Player(f.current);return T(e),function(){e.clear()}}}),[f]),n.useEffect((function(){p&&c&&(p.$on(exports.EVENT_TYPES.CLEAR,(function(){c(exports.EVENT_TYPES.CLEAR)})),p.$on(exports.EVENT_TYPES.END,(function(){c(exports.EVENT_TYPES.END)})),p.$on(exports.EVENT_TYPES.PAUSE,(function(){c(exports.EVENT_TYPES.PAUSE)})),p.$on(exports.EVENT_TYPES.PROCESS,(function(){c(exports.EVENT_TYPES.PROCESS)})),p.$on(exports.EVENT_TYPES.START,(function(){c(exports.EVENT_TYPES.START)})),p.$on(exports.EVENT_TYPES.STOP,(function(){c(exports.EVENT_TYPES.STOP)})))}),[p,c]),n.useEffect((function(){p&&P&&(p.clear(),s||(i&&p.set(i),p.mount(P),p.start()))}),[p,i,P,s]),n.useEffect((function(){x(t)}),[x,t]),r.createElement("canvas",{ref:f,className:E})},s=n.memo(c);exports.Svga=s,exports.SvgaAvt=c;
