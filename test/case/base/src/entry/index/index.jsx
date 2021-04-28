import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Svga } from '../../../../../../'
import winIcon from './images/win.svga'
import loseIcon from './images/lose.svga'

const onHandle = (type) => {
  console.log(`on(${type})`)
}

const TestBox = () => {
  const [info, setInfo] = useState({
    icon1: winIcon,
    icon2: loseIcon,
    padding: 0
  })
  useEffect(() => {
    setInterval(() => {
      setInfo((info) => {
        return {
          ...info,
          padding: info.padding + 1
        }
      })
    }, 200)
  }, [])
  return (
    <>
      <Svga className='icon' src={info.icon1} option={{ loop: 1 }} on={onHandle} />
      <Svga className='icon' src={info.icon2} option={{ loop: 1 }} on={onHandle} />
    </>
  )
}

const App = (
  <div>
    <TestBox />
  </div>
)

ReactDOM.render(App, document.querySelector('#app'))
