import React, { Component } from 'react'

// cada componente de react tiene un state, y props

class ChatItem extends Component {
  render () {
    return (
      <li>
        <strong>{this.props.name}</strong>
        <p>{this.props.message}</p>
      </li>
    )
  }
}

export default ChatItem
