import './App.css';
import React, { Component } from 'react';
import UserForm from './components/UserForm';
import ViewList from './components/ViewList';

import axios from 'axios';
class App extends Component {
  state = {
    usersData: [],
    userSelected: undefined,
    route: 'list'
  }

  constructor() {
    super()
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then( ({data}) => {
        this.setState({ usersData: data }) 
      });
  }

  selectedUser = (id) => {
    this.setState({ route: 'form' , userSelected: id })
  }

  createUser = () => {
    this.setState({ route: 'form' })
  }

  AddNewUser = (user) => {
    axios.post('https://jsonplaceholder.typicode.com/users', user)
      .then( ({data}) => {
        const newUsersData = this.state.usersData.concat(data);
        this.setState({ usersData: newUsersData, route: 'list' }) 
      });
  }
  render() {
    console.log(this.state.usersData)
    const { route, usersData, userSelected } = this.state
    return (
      <div className="App">
        { route === 'list' && <ViewList handleClick={this.selectedUser}
                              users={ usersData }
                              createUser={this.createUser}/> }
        { route === 'form' && <UserForm userId={userSelected} AddNewUser={this.AddNewUser}/> }
      </div>
      )
  }
}

export default App;
