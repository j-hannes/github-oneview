import { combineReducers } from 'redux-immutable'
import { Record } from 'immutable'

import * as contentList from 'modules/content-list'

const initialState = new Record({
})

const app = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  app,
  [contentList.name]: contentList.reducer
})
