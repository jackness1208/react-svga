/*!
 * react-svga esm 0.1.4
 * (c) 2020 - 2021 jackness
 * Released under the MIT License.
 */
import React, { useRef, useState, useEffect, memo } from 'react';
import { Player, Parser, Downloader } from 'svga.lite';

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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var EVENT_TYPES;
(function (EVENT_TYPES) {
    EVENT_TYPES["START"] = "start";
    EVENT_TYPES["PROCESS"] = "process";
    EVENT_TYPES["PAUSE"] = "pause";
    EVENT_TYPES["STOP"] = "stop";
    EVENT_TYPES["END"] = "end";
    EVENT_TYPES["CLEAR"] = "clear";
})(EVENT_TYPES || (EVENT_TYPES = {}));
function fetchSvga(url) {
    return __awaiter(this, void 0, void 0, function () {
        var parser, downloader, fileData, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    parser = new Parser();
                    downloader = new Downloader();
                    return [4 /*yield*/, downloader.get(url)];
                case 1:
                    fileData = _a.sent();
                    return [4 /*yield*/, parser.do(fileData)];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
var SvgaAvt = function (props) {
    var src = props.src, on = props.on, stop = props.stop, option = props.option, className = props.className;
    var canvasRef = useRef(null);
    var _a = useState(), player = _a[0], setPlayer = _a[1];
    var _b = useState(), svgaData = _b[0], setSvgaData = _b[1];
    /** init Player */
    useEffect(function () {
        if (canvasRef.current) {
            var player_1 = new Player(canvasRef.current);
            setPlayer(player_1);
            return function () {
                player_1.clear();
            };
        }
    }, [canvasRef]);
    /** 事件绑定 */
    useEffect(function () {
        if (player && on) {
            player.$on(EVENT_TYPES.CLEAR, function () {
                on(EVENT_TYPES.CLEAR);
            });
            player.$on(EVENT_TYPES.END, function () {
                on(EVENT_TYPES.END);
            });
            player.$on(EVENT_TYPES.PAUSE, function () {
                on(EVENT_TYPES.PAUSE);
            });
            player.$on(EVENT_TYPES.PROCESS, function () {
                on(EVENT_TYPES.PROCESS);
            });
            player.$on(EVENT_TYPES.START, function () {
                on(EVENT_TYPES.START);
            });
            player.$on(EVENT_TYPES.STOP, function () {
                on(EVENT_TYPES.STOP);
            });
        }
    }, [player, on]);
    /** 参数配置 */
    useEffect(function () {
        if (player && svgaData) {
            player.clear();
            if (!stop) {
                if (option) {
                    player.set(option);
                }
                player.mount(svgaData);
                player.start();
            }
        }
    }, [player, option, svgaData, stop]);
    /** 注入灵魂 */
    useEffect(function () {
        fetchSvga(src).then(function (d) {
            setSvgaData(d);
        });
    }, [src]);
    return React.createElement("canvas", { ref: canvasRef, className: className });
};
var Svga = memo(SvgaAvt);

export { EVENT_TYPES, Svga, SvgaAvt };
