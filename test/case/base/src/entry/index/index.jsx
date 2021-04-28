import React from 'react'
import ReactDOM from 'react-dom'
import { Svga } from '../../../../../../'
import winIcon from './images/win.svga'
import loseIcon from './images/lose.svga'

const onHandle = (type) => {
  console.log(`on(${type})`)
}
const App = (
  <div>
    <Svga src={winIcon} option={{ loop: true }} on={onHandle} />
    <Svga src={loseIcon} option={{ loop: true }} on={onHandle} />
  </div>
)

ReactDOM.render(App, document.querySelector('#app'))
