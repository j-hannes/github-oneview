import React from 'react'
import { render } from 'react-dom'
import { App } from 'modules/app'

const root = document.createElement('div', 'root')
document.body.appendChild(root)
render(<App />, root)
