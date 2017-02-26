import React from 'react'

import { SelectRepo } from 'modules/select-repo'
import { ContentList } from 'modules/content-list'

const style = {
  headline: {
    margin: '10px',
    marginBottom: '4px'
  }
}

class App extends React.PureComponent {
  render () {
    return (
      <div>
        <h3 style={style.headline}>github-oneview</h3>
        <SelectRepo />
        <ContentList />
      </div>
    )
  }
}

export default App
