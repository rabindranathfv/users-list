import React, { Component } from 'react';
import HeaderView from './HeaderView';
import List from './List';

export default class ViewList extends Component {
    render() {
        const { users, handleClick, createUser } = this.props;
        return (
            <div>
                <HeaderView createUser={createUser} />
                <List users={users} handleClick={handleClick} />
            </div>
        )
    }
}