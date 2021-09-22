import React, { Component } from "react";

export default class UserForm extends Component {
    render() {
        const { userId } = this.props
        return(
            <div>
                { userId ? <p>userForm for userId id { userId} </p>: <p> Create new User </p>}
            </div>
        )
    }
}