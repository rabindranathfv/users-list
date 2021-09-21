import './App.css';
import React, { Component } from 'react';
import UserForm from './components/UserForm';
import ViewList from './components/ViewList';

import axios from 'axios';
class App extends Component {
  state = {
    usersData: [],
    route: 'list'
  }

  constructor() {
    super()
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then( ({data}) => {
        this.setState({ usersData: data }) 
      });
  }
  render() {
    console.log(this.state.usersData)
    const { route, usersData } = this.state
    return (
      <div className="App">
        { route === 'list' && <ViewList users={ usersData }/> }
        { route === 'form' && <UserForm /> }
      </div>
      )
  }
}

export default App;
