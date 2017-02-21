import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { getUser, getRepo } from '../selectors'
import { updateUser, updateRepo } from '../actions'

const SelectRepo = props =>
  <div>
    <input
      id='user'
      value={props.user}
      onChange={props.updateUser}
    />
    <input
      id='repo'
      value={props.repo}
      onChange={props.updateRepo}
    />
    <button>Load</button>
  </div>

export default connect(
  createStructuredSelector({
    user: getUser,
    repo: getRepo
  }), (dispatch) => ({
    updateUser (e) { dispatch(updateUser(e.target.value)) },
    updateRepo (e) { dispatch(updateRepo(e.target.value)) }
  })
)(SelectRepo)
