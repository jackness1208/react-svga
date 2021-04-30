import React, { useRef, useState, useEffect, useCallback, memo, useMemo } from 'react'
import { Downloader, Parser, Player, options, VideoEntity } from 'svga.lite'
import { ErrorBoundary, ErrorBoundaryProps } from './ErrorBoundary'

export enum EVENT_TYPES {
  START = 'start',
  PROCESS = 'process',
  PAUSE = 'pause',
  STOP = 'stop',
  END = 'end',
  CLEAR = 'clear'
}

/** 事件 hooks */
export type OnEventHandle = (type: EVENT_TYPES) => any
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
  /** 错误log */
  onError?: ErrorBoundaryProps['onError']
}

async function fetchSvga(url: string) {
  const parser = new Parser()
  const downloader = new Downloader()
  const fileData = await downloader.get(url)
  const data = await parser.do(fileData)
  return data
}

export const SvgaAvt = memo(
  (props: SvgaProps) => {
    const { src, on, stop, option, className } = props
    const canvasRef = useRef<HTMLCanvasElement>(null)

    const [player, setPlayer] = useState<Player>()
    const [svgaData, setSvgaData] = useState<VideoEntity>()

    /** init Player */
    useEffect(() => {
      if (canvasRef.current) {
        const player = new Player(canvasRef.current)
        setPlayer(player)
        return () => {
          player.clear()
        }
      }
    }, [canvasRef])

    /** 事件绑定 */
    useEffect(() => {
      if (player && on) {
        player.$on(EVENT_TYPES.CLEAR, () => {
          on(EVENT_TYPES.CLEAR)
        })
        player.$on(EVENT_TYPES.END, () => {
          on(EVENT_TYPES.END)
        })
        player.$on(EVENT_TYPES.PAUSE, () => {
          on(EVENT_TYPES.PAUSE)
        })
        player.$on(EVENT_TYPES.PROCESS, () => {
          on(EVENT_TYPES.PROCESS)
        })
        player.$on(EVENT_TYPES.START, () => {
          on(EVENT_TYPES.START)
        })
        player.$on(EVENT_TYPES.STOP, () => {
          on(EVENT_TYPES.STOP)
        })
      }
    }, [player, on])

    /** 参数配置 */
    useEffect(() => {
      if (player && svgaData) {
        player.clear()
        if (!stop) {
          if (option) {
            player.set(option)
          }
          player.mount(svgaData)
          player.start()
        }
      }
    }, [player, option, svgaData, stop])

    /** 注入灵魂 */
    useEffect(() => {
      fetchSvga(src).then((d) => {
        setSvgaData(d)
      })
    }, [src])

    return <canvas ref={canvasRef} className={className} />
  },
  (preProps, nextProps) => {
    return preProps.src === nextProps.src
  }
)

export const Svga = (props: SvgaProps) => {
  return (
    <ErrorBoundary onError={props.onError}>
      <SvgaAvt {...props} />
    </ErrorBoundary>
  )
}
