import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { App, reducer } from 'modules/app'

const root = document.createElement('div', 'root')
document.body.appendChild(root)
render(
  <Provider store={createStore(reducer)}>
    <App />
  </Provider>,
  root
)

window.log = x => { console.log(x); return x }
