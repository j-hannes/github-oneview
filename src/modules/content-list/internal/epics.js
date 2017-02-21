import { ajax } from 'rxjs/observable/dom/ajax'
import * as actionTypes from './actionTypes'
import { receiveContents } from './actions'

export const fetchContents = action$ =>
  action$.ofType(actionTypes.REPO_CONTENTS_REQUEST)
    .map(action => ({
      user: action.payload.user,
      repo: action.payload.repo
    }))
    .switchMap(({user, repo}) =>
      ajax
        .getJSON(`http://localhost:3000/repos/${user}/${repo}/contents`)
        // .getJSON(`https://api.github.com/repos/${user}/${repo}/contents`)
        .map(receiveContents) // .bind(null, user))
    )
