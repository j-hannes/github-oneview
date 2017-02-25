import { createSelector } from 'reselect'
import { name } from './constants'

export const getAll = state => state.get(name)

export const getContents = createSelector(
  getAll,
  state => state.contents
)
