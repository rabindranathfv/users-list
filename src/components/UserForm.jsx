import React, { Component } from "react";

export default class UserForm extends Component {
    render() {
        const { userId } = this.props
        return(
            <div>
                { <p>userForm with id { userId} </p>}
            </div>
        )
    }
}