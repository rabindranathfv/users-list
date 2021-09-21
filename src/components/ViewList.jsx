import React, { Component } from 'react';
import HeaderView from './HeaderView';
import List from './List';

export default class ViewList extends Component {
    render() {
        const { users } = this.props;
        return (
            <div>
                <HeaderView />
                <List users={users} />
            </div>
        )
    }
}