import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { withTargetValue } from 'utils/form'
import { structureProps } from 'utils/redux'

import { getUser, getRepo } from '../selectors'
import {
  updateUser,
  updateRepo,
  submitForm
} from '../actions'

const SelectRepo = ({ store, actions }) =>
  <div>
    <input
      id='user'
      value={store.user}
      onChange={withTargetValue(actions.updateUser)}
    />
    <input
      id='repo'
      value={store.repo}
      onChange={withTargetValue(actions.updateRepo)}
    />
    <button onClick={actions.submitForm}>
      Load
    </button>
  </div>

export default connect(
  createStructuredSelector({
    user: getUser,
    repo: getRepo
  }),
  {
    updateUser,
    updateRepo,
    submitForm
  },
  structureProps
)(SelectRepo)
