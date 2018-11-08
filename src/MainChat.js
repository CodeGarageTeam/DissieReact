import React, { Component } from 'react'
import ChatList from './ChatList'
import ChatInput from './ChatInput'

class MainChat extends Component {
  constructor (props) {
    super (props)
    this.state = {
      messages: [
        {
          name: 'ema',
          message: 'el senpai'
        }
      ]
    }
  }

  render () {
    
    return (
      <section className='main-chat-container'>
        <ChatList messages={this.state.messages}/>
        <ChatInput chatAdded={() => {}}/>
      </section>
    )
  }
}

export default MainChat
