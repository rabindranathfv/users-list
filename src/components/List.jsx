import React, { Component } from 'react';

export default class List extends Component {
    render() {
        return(
            <ul>
                <li>
                    user 1 <button> edit </button>
                </li>
                <li>
                    user 2 <button> edit </button>
                </li>
            </ul>
        )
    }
}