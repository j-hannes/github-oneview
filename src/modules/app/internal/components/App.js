import React from 'react'

import { SelectRepo } from 'modules/select-repo'
import { ContentList } from 'modules/content-list'

const style = {
  app: {
    padding: '10px'
  },
  headline: {
    margin: 0,
    marginBottom: '12px'
  }
}

class App extends React.PureComponent {
  render () {
    return (
      <div style={style.app}>
        <h3 style={style.headline}>github-oneview</h3>
        <SelectRepo />
        <ContentList />
      </div>
    )
  }
}

export default App
