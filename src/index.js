import React from 'react'
import { render } from 'react-dom'

class HelloMessage extends React.Component {
  render () {
    return (
      <div>
        Hello
        {' ' + this.props.name}
      </div>
    )
  }
}

const root = document.createElement('div', 'root')
document.body.appendChild(root)
render(<HelloMessage name='App' />, root)
