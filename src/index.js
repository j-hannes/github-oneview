import 'bootstrap/dist/css/bootstrap.css'
import 'rxjs'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { App, configureStore } from 'modules/app'

window.log = x => { console.log(x); return x }

const root = document.createElement('div', 'root')
document.body.appendChild(root)
render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  root
)
