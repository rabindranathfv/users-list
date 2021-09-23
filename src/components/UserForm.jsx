import React, { Component } from "react";

const validate = (values) => {
    const errors = {}
    if (!values.name ) {
        errors.name = 'this is a mandatory field'
    }
    if (!values.email) {
        errors.email = 'this is a mandatory field'
    }
    if (!values.website) {
        errors.website = 'this is a mandatory field'
    }
    return errors
}

export default class UserForm extends Component {

    state = {
        errors: {}
    }

    handleChange = (e) => {
        const { target } = e
        this.setState({
            [target.name]: target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { errors, ...formInfo } = this.state
        const userInfo = validate(formInfo)
        this.setState({ errors: userInfo})
        if (!Object.keys(userInfo).length) {
            const { AddNewUser } = this.props
            AddNewUser(formInfo)
            e.target.reset()
        }
    }
    
    render() {
        const { userId, userUpdate } = this.props
        const { name, email, website } = userUpdate
        const { errors } = this.state
        return(
            <form onSubmit={this.handleSubmit}>
                { userId ? <p>userForm for userId id { userId} </p>: <p> Create new User </p>}
                <input name="name" defaultValue={name} placeholder="name" onChange={this.handleChange} />
                { errors.name && <p>{errors.name}</p> }
                <input name="email" defaultValue={email} placeholder="email" onChange={this.handleChange} />
                { errors.email && <p>{errors.email}</p> }
                <input name="website" defaultValue={website} placeholder="website" onChange={this.handleChange} />
                { errors.website && <p>{errors.website}</p> }
                <input type="submit" value="send" />
            </form>
        )
    }
}