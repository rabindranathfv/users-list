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

  userUpdateInfo = (id, data) => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, data)
      .then( () => {
          const userUpdated = this.state.usersData.map( u => id === u.id ? data : u)
          this.setState({ route: 'list', usersData: userUpdated })
      })
      .catch( (e) => {
        console.warn('Error server side');
      });
  }

  render() {
    const { route, usersData, userSelected } = this.state;
    const userUpdate = usersData.length>0 && usersData.find( u => u.id === userSelected )
    return (
      <div className="App">
        { route === 'list' && <ViewList handleClick={this.selectedUser}
                              users={ usersData }
                              createUser={this.createUser}/> }
        { route === 'form' && <UserForm userId={userSelected}
                              userUpdate={userUpdate || {} }
                              userUpdateInfo={this.userUpdateInfo}
                              AddNewUser={this.AddNewUser}/> }
      </div>
      )
  }
}

export default App;
