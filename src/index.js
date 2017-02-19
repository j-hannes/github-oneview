import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { App, reducer } from 'modules/app'

const store = createStore(reducer)

const root = document.createElement('div', 'root')
document.body.appendChild(root)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)
