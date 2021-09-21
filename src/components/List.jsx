import React, { Component } from 'react';

export default class List extends Component {
    render() {
        const { users } = this.props
        return(
            <ul>
                { users.map( u => 
                    <li key={u.id}>
                    { u.name} <button>edit</button>
                    </li>
                    ) 
                }
            </ul>
        )
    }
}