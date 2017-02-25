import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { getContents } from '../selectors'

const ContentList = props =>
  <ul>
    {props.contents.map(item =>
      <li key={item.sha}>{item.name}</li>
    )}
  </ul>

export default connect(
  createStructuredSelector({
    contents: getContents
  })
)(ContentList)
