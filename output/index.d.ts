/// <reference types="react" />
import { options } from 'svga.lite';
export declare enum EVENT_TYPES {
    START = "start",
    PROCESS = "process",
    PAUSE = "pause",
    STOP = "stop",
    END = "end",
    CLEAR = "clear"
}
/** 事件 hooks */
export declare type OnEventHandle = (type: EVENT_TYPES) => any;
/** Svga 播放器 配置 */
export interface SvgaPlayerOption extends options {
}
/** Svga 属性 */
export interface SvgaProps {
    /** 样式名称 */
    className?: string;
    /** svga 地址 */
    src: string;
    /** 事件 hooks */
    on?: OnEventHandle;
    /** 停止 */
    stop?: boolean;
    /** 播放器配置 */
    option?: SvgaPlayerOption;
}
export declare const Svga: (props: SvgaProps) => JSX.Element;
