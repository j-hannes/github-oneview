import * as actionTypes from './actionTypes'

export const requestContents = (user, repo) => ({
  type: actionTypes.REPO_CONTENTS_REQUEST,
  payload: {
    user,
    repo
  }
})

export const receiveContents = (data) => {
  console.log('from receiveContents', data)
  return ({
    type: actionTypes.REPO_CONTENTS_SUCCESS,
    payload: { data }
  })
}
