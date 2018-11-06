import React, { Component } from 'react';
import Header from './Header'
import OnlinePeople from './OnlinePeople'
import MainChat from './MainChat'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header/>
        <div className='main-content'>
          <OnlinePeople />
          <MainChat />
        </div>
      </div>
    )
  }
}

export default App;
