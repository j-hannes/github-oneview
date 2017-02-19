import { Record, Map } from 'immutable'

const initialState = new Record({
  name: 'One'
})()

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
