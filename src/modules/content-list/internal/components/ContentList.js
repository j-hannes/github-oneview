import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { getName } from '../selectors'

const ContentList = props =>
  <ul>
    <li>{props.name}</li>
  </ul>

export default connect(
  createStructuredSelector({
    name: getName
  })
)(ContentList)
