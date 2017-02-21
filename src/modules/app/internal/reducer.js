import { combineReducers } from 'redux-immutable'
import { Record } from 'immutable'

import * as contentList from 'modules/content-list'
import * as selectRepo from 'modules/select-repo'

const initialState = new Record({
})()

const app = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  app,
  [contentList.name]: contentList.reducer,
  [selectRepo.name]: selectRepo.reducer
})
