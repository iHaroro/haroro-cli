import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'

function App () {
  return (
    <div>
      <p style={{ fontSize: '50px' }}>Hello World!</p>
      <p>HomePage: <a href='https://github.com/iHaroro/haroro-cli' rel='noreferrer' target='_blank'>Haroro-cli</a></p>
      <p>HomePage: <a href='https://github.com/iHaroro/react-entry-template/tree/master' rel='noreferrer' target='_blank'>React多入口项目模板</a>
      </p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
