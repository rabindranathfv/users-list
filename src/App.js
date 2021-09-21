import './App.css';
import React, { Component } from 'react';
import UserForm from './components/UserForm';
import ViewList from './components/ViewList';

class App extends Component {
  state = {
    route: 'list'
  }
  render() {
    const { route } = this.state
    return (
      <div className="App">
        { route === 'list' && <ViewList /> }
        { route === 'form' && <UserForm /> }
      </div>
      )
  }
}

export default App;
