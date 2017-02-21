import * as actionTypes from './actionTypes'

export const updateUser = (user) => ({
  type: actionTypes.UPDATE_USER,
  payload: {
    user
  }
})

export const updateRepo = (repo) => ({
  type: actionTypes.UPDATE_REPO,
  payload: {
    repo
  }
})
