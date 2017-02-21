import { createSelector } from 'reselect'
import { name } from './constants'

export const getAll = state => state.get(name)

export const getUser = createSelector(
  getAll,
  state => state.user
)

export const getRepo = createSelector(
  getAll,
  state => state.repo
)
