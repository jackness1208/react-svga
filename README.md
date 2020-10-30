# react-svga

基于 `svga.lite` 封装的一个 React 组件

## 安装

```bash
yarn add react-svga

# 或者
npm i react-svga --save
```

## 使用

```typescript
import React from 'react'
import ReactDOM from 'react-dom'
import { Svga } from 'react-svga'
import svgaIcon from './images/bubble.svga'

const onHandle = (type) => {
  console.log(`on(${type})`)
}
const App = <Svga src={svgaIcon} option={{ loop: true }} on={onHandle} />

ReactDOM.render(App, document.querySelector('#app'))
```

## 参数

直接看 types 文件

```typescript
/// <reference types="react" />
import { options } from 'svga.lite'
export declare enum EVENT_TYPES {
  START = 'start',
  PROCESS = 'process',
  PAUSE = 'pause',
  STOP = 'stop',
  END = 'end',
  CLEAR = 'clear'
}
/** 事件 hooks */
export declare type OnEventHandle = (type: EVENT_TYPES) => any
/** Svga 播放器 配置 */
export interface SvgaPlayerOption extends options {}
/** Svga 属性 */
export interface SvgaProps {
  /** 样式名称 */
  className?: string
  /** svga 地址 */
  src: string
  /** 事件 hooks */
  on?: OnEventHandle
  /** 停止 */
  stop?: boolean
  /** 播放器配置 */
  option?: SvgaPlayerOption
}
export declare const Svga: (props: SvgaProps) => JSX.Element
```

其中 `svga.lite` 的 `options` 参数在此

```typescript
interface options {
  loop?: number | Boolean
  fillMode?: FILL_MODE
  playMode?: PLAY_MODE
  startFrame?: number
  endFrame?: number
}
export enum FILL_MODE {
  FORWARDS = 'forwards',
  BACKWARDS = 'backwards'
}

export enum PLAY_MODE {
  FORWARDS = 'forwards',
  FALLBACKS = 'fallbacks'
}
```
