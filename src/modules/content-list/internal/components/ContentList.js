import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { getContents } from '../selectors'

const ContentList = props =>
  <div className='list-group'>
    {props.contents.map(item =>
      <button
        key={item.sha}
        style={{ outline: 'none' }}
        className='list-group-item'
      >
        {item.name}
      </button>
    )}
  </div>

export default connect(
  createStructuredSelector({
    contents: getContents
  })
)(ContentList)
