import React, { Component } from 'react'

class ChatInput extends Component {
  render () {
    return (
      <div>
        <input
          placeholder='Escribe un mensaje aquí..'
        />
        <button onClick={() => {}}>Enviar</button>
      </div>
    )
  }
}

export default ChatInput
