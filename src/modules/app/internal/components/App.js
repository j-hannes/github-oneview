import React from 'react'

import { SelectRepo } from 'modules/select-repo'
import { ContentList } from 'modules/content-list'

class App extends React.Component {
  render () {
    return (
      <div>
        <SelectRepo />
        <ContentList />
      </div>
    )
  }
}

export default App
