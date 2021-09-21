import React, { Component } from 'react';
import HeaderView from './HeaderView';
import List from './List';

export default class ViewList extends Component {
    render() {
        return (
            <div>
                <HeaderView />
                <List />
            </div>
        )
    }
}