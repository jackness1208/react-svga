import React from 'react'
import ReactDOM from 'react-dom'
import { Svga } from '../../../../../../'
import svgaIcon from './images/bubble.svga'

const onHandle = (type) => {
  console.log(`on(${type})`)
}
const App = (
  <Svga src={svgaIcon} option={{loop: true}} on={onHandle} />
)

ReactDOM.render(App, document.querySelector('#app'))