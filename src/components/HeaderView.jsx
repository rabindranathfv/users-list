import React, { Component } from 'react';

const style = {
    inline: {
        display: 'inline'
    } 
}
export default class HeaderView extends Component {
    render() {
        return(
            <header>
                <h2 style={style.inline}>Users</h2>

                <button style={style.inline}> New User </button>
            </header>
        )
    }
}