import { Record } from 'immutable'
import * as actionTypes from './actionTypes'

const initialState = new Record({
  user: '',
  repo: ''
})()

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_USER:
      return state.set('user', action.payload.user)

    case actionTypes.UPDATE_REPO:
      return state.set('repo', action.payload.repo)

    default:
      return state
  }
}
