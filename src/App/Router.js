import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavbarContainer from '../Container/navbarContainer';
// import Home from '../Components/View/Home';
import loginContainer from '../Container/loginContainer';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavbarContainer/>
                <Switch>
                    <Route exact path="/" component={loginContainer} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router
