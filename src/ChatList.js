import React, { Component } from 'react'
import ChatItem from './ChatItem'

class ChatList extends Component {
  render () {
    return (
      <ul>
        {
          this.props.messages.map((message, i) => 
            <ChatItem
              key={i}
              name={message.name}
              message={message.message}
            />
          )
        }
      </ul>
    )
  }
}

export default ChatList

// map, filter y reduce son funciones que nos sirven para manipular data sin cambiarla

// var numeros = [1, 2, 3]

// var numerosPor2 = numeros.map(item => item * 2)

// console.log(numerosPor2)