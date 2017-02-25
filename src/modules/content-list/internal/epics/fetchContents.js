import { ajax } from 'rxjs/observable/dom/ajax'
import { receiveContents } from '../actions'
import * as selectRepo from 'modules/select-repo'

const serverCall = ({ user, repo }) =>
  ajax.getJSON(`https://api.github.com/repos/${user}/${repo}/contents`)

export const fetchContents = (action$, store) =>
  action$.ofType(selectRepo.actionTypes.SUBMIT_FORM)
    .map(() => store.getState().get(selectRepo.name))
    .flatMap(serverCall)
    .map(contentList => contentList.map(({ name, sha }) => ({ name, sha })))
    .map(receiveContents)
