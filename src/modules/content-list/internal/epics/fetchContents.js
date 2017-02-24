import { ajax } from 'rxjs/observable/dom/ajax'
import { receiveContents } from './actions'
import * as selectRepo from 'modules/select-repo'

export const fetchContents = (action$, store) =>
  action$.ofType(selectRepo.actionTypes.SUBMIT_FORM)
    .map(() => store.getState().get(selectRepo.name))
    .map(state => ({
      user: state.user,
      repo: state.repo
    }))
    .switchMap(({user, repo}) =>
      ajax
        .getJSON(`https://api.github.com/repos/${user}/${repo}/contents`)
        // .getJSON(`http://localhost:3000/repos/${user}/${repo}/contents`)
        .map(contentList =>
          contentList.map(contentItem => ({
            name: contentItem.name
          })))
        .map(receiveContents)
    )
