import { combineEpics } from 'redux-observable'

import * as contentList from 'modules/content-list'

export default combineEpics(
  contentList.epics.fetchContents,
)
