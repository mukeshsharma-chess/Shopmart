import React, { Component } from 'react'
import './login.css'

class loginForm extends Component {

    state = {
        username: '',
        password: ''
    }

    handleStateChang = (e) =>{
        this.setState({ [e.target.name] : e.target.value })
    }

    render() {

        const { username,password } = this.state

        return (
            <div className="login-wrapper">
                <form className="form-group">
                    <div className="row>">
                        <div className="col-sm-12">
                            <label>User Name</label>
                        </div>
                        <div className="col-sm-12">
                            <input type="text"
                                className="form-control"
                                name="username"
                                value={username}
                                onChange={this.handleStateChang}
                                placeholder="Enter Your user name"
                            />
                        </div>
                    </div>
                    <div className="row>">
                        <div className="col-sm-12">
                            <label>Password</label>
                        </div>
                        <div className="col-sm-12">
                            <input type="text"
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={this.handleStateChang}
                                placeholder="Enter Your Password"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <button className="btn btn-danger btn-block">Cancel</button>
                        </div>
                        <div className="col-sm-6">
                            <button className="btn btn-success btn-block">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default loginForm
