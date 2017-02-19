import { combineReducers } from 'redux'

import * as contentList from 'modules/content-list'

const initialState = {} // TODO use immutable reducer

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
