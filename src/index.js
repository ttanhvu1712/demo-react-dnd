import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

const app = (
  <HashRouter>
    <App />
  </HashRouter>
)

ReactDOM.render(app, document.getElementById('root'))
serviceWorker.unregister()
