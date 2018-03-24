import React from 'react'

class Tags extends React.Component {
  state = {
    tags: [],
    value: '',
  }

  removeTag = tag => {
    this.setState(state => ({
      tags: state.tags.filter(t => t !== tag),
    }))
  }

  addTag = () => {
    const { tags, value } = this.state

    if (value.trim() === '' || tags.indexOf(value.trim()) !== -1) {
      return
    }

    tags.push(value)
    this.setState({
      tags,
      value: '',
    })
  }

  onKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      this.addTag()
    }
  }

  onChange = e => {
    const { target: { value } } = e

    this.setState({
      value,
    })
  }

  render() {
    const { children } = this.props
    const { tags, value } = this.state

    const bag = {
      tags,
      addTag: this.addTag,
      removeTag: this.removeTag,
      inputEvents: {
        onKeyDown: this.onKeyDown,
        onChange: this.onChange,
      },
      inputAttrs: {
        value,
      },
    }

    return React.Children.map(children, child => {
      return React.cloneElement(child, bag)
    })
  }
}

export default Tags
