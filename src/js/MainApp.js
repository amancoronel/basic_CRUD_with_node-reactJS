import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AppLayout from './appLayout';
import userDetails from './userDetails';
import loginForm from './loginForm';
import Container from 'react-bootstrap/Container';


export class MainApp extends Component {
    render() {
        
        return (
            <Container>
                <h1>Basic CRUD with ReactJs and NodeJs Rest API</h1>
                <Router>
                    <Switch>
                        <Route exact path="/" component={loginForm} />
                        <AppLayout 
                            exact
                            path="/main"
                        />
                        <Route exact path="/user/:id" component={userDetails} />
                        <Route path="*" render={() => "ERROR 404 NOT FOUND"} />
                    </Switch>
                </Router>
            </Container>
        )
    }
}

export default MainApp
