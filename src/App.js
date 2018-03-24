import React, { Component } from 'react'
import Tags from './Tags'
import BubbleTags from './BubbleTags'
import TextTags from './TextTags'

class App extends Component {
  render() {
    return (
      <div id="app" className="bg-grey-lighter px-8 py-16 min-h-screen">
        <div className="max-w-sm w-full mx-auto">
          <Tags>
            <BubbleTags />
            <TextTags />
          </Tags>
        </div>
      </div>
    )
  }
}

export default App
