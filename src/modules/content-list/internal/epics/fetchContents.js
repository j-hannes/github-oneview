import { ajax } from 'rxjs/observable/dom/ajax'
import { receiveContents } from './actions'
import * as selectRepo from 'modules/select-repo'

export const fetchContents = (action$, store) =>
  action$.ofType(selectRepo.actionTypes.SUBMIT_FORM)
    .map(() => selectRepoStore(store))
    .map(prepareData)
    .switchMap(makeRequest)

const selectRepoStore = store => store.getState().get(selectRepo.name)

const prepareData = state => ({
  user: state.user,
  repo: state.repo
})

const makeRequest = ({user, repo}) =>
  ajax
    .getJSON(endpoint(user, repo))
    .map(extractData)
    .map(receiveContents)

export const endpoint = generateUrl('https://api.github.com')

export const localEndPoint = generateUrl('http://localhost:3000')

function generateUrl (host) {
  return (user, repo) => `${host}/repos/${user}/${repo}/contents`
}

const extractData = contentList =>
  contentList.map(contentItem => ({
    name: contentItem.name
  }))
