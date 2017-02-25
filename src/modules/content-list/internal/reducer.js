import { Record } from 'immutable'
import * as actionTypes from './actionTypes'

const initialState = new Record({
  contents: []
})()

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REPO_CONTENTS_SUCCESS:
      return state.set('contents', action.payload.data)
    default:
      return state
  }
}
