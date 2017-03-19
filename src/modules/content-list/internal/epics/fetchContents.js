import { ajax } from 'rxjs/observable/dom/ajax'
import { receiveContents } from '../actions'
import * as selectRepo from 'modules/select-repo'
import { compose, map, pick } from 'ramda'
import { sortFirst } from 'utils/list'

const { SUBMIT_FORM } = selectRepo.actionTypes
const getSelectRepo = store => () => store.getState().get(selectRepo.name)
const isDir = item => item.type === 'dir'
const selectProps = compose(map, pick)

const githubApiCall = ({ user, repo }) =>
  ajax.getJSON(`https://api.github.com/repos/${user}/${repo}/contents`)

export const fetchContents = (action$, store) =>
  action$.ofType(SUBMIT_FORM)
    .map(getSelectRepo(store))
    .flatMap(githubApiCall)
    .map(sortFirst(isDir))
    .map(selectProps(['name', 'sha']))
    .map(receiveContents)
