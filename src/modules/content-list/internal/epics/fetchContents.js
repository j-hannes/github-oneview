import { ajax } from 'rxjs/observable/dom/ajax'
import { receiveContents } from '../actions'
import * as selectRepo from 'modules/select-repo'
import { compose, map, pick } from 'ramda'

const serverCall = ({ user, repo }) =>
  ajax.getJSON(`https://api.github.com/repos/${user}/${repo}/contents`)

const selectProps = compose(map, pick)

export const fetchContents = (action$, store) =>
  action$.ofType(selectRepo.actionTypes.SUBMIT_FORM)
    .map(() => store.getState().get(selectRepo.name))
    .flatMap(serverCall)
    .map(selectProps(['name', 'sha']))
    .map(receiveContents)
