import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { withTargetValue, preventDefault } from 'utils/form'
import { structureProps } from 'utils/redux'

import { getUser, getRepo } from '../selectors'
import {
  updateUser,
  updateRepo,
  submitForm
} from '../actions'

import './SelectRepo.css'

const SelectRepo = ({ store, actions }) =>
  <form
    className='select-repo-form'
    onSubmit={preventDefault(actions.submitForm)}
  >

    <input
      id='user'
      type='text'
      className='form-control select-repo-input'
      placeholder='Username'
      value={store.user}
      onChange={withTargetValue(actions.updateUser)}
    />

    <input
      id='repo'
      type='text'
      className='form-control select-repo-input'
      placeholder='Repository'
      value={store.repo}
      onChange={withTargetValue(actions.updateRepo)}
    />

    <button
      type='submit'
      className='btn btn-default select-repo-input'
    >
      Load Contents
    </button>

  </form>

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
