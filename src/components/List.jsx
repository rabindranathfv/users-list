import React, { Component } from 'react';

export default class List extends Component {

    handleClick = id => e => {
        const { handleClick } = this.props
        handleClick(id);
    }
    
    render() {
        const { users } = this.props
        return(
            <ul>
                { users.map( u => 
                    <li key={u.id}>
                    { u.name} <button onClick={this.handleClick(u.id)}>edit</button>
                    </li>
                    ) 
                }
            </ul>
        )
    }
}