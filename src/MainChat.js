import React, { Component } from 'react'

class MainChat extends Component {
  constructor (props) {
    super (props)
    this.state = {
      count: 0
    }
  }

  updateCounter () {
    this.setState({ count: this.state.count + 1 })
  }

  render () {
    return (
      <section className='main-chat-container'>
        <button onClick={() => this.updateCounter()}>actualizar contador</button>
        Contador: {this.state.count}
      </section>
    )
  }
}

export default MainChat
