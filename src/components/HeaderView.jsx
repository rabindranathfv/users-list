import React, { Component } from 'react';

const style = {
    inline: {
        display: 'inline'
    } 
}
export default class HeaderView extends Component {
    render() {
        const { createUser } = this.props
        return(
            <header>
                <h2 style={style.inline}>Users</h2>

                <button style={style.inline} onClick={createUser}> New User </button>
            </header>
        )
    }
}