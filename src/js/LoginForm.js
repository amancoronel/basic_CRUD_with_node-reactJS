import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import { Redirect } from 'react-router-dom';
import auth from './class/auth';
import Axios from 'axios';

export class LoginForm extends Component {
    constructor(props) {
        super();
        this.state = {
            showError : false
        }
    }

    render() {
        let errorMessage = (this.state.showError) ? <span style={{color : "red"}}> Login failed </span> : ''
        return (
            <div id="login">
                <div className="container">
                    <div className="row justify-content-center align-items-center" id="login-row">
                        <div className="col-md-6" id="login-column">
                            <div className="col-md-12" id="login-box">
                            <Formik
                                initialValues = {{username : '', password : ''}}
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                        Axios.post('/login', values)
                                        .then(response => {
                                            this.setState({showError: false})
                                            auth.login(() => {
                                                this.props.history.push("/main");
                                            })
                                        })
                                        .catch(error => {
                                            this.setState({showError: true})
                                            console.log("*** test")
                                        })
                                        
                                    }, 500)
                                }}
                            >
                                <Form className="form" id="login-form" method="post">
                                    <h3 className="text-center text-info">Login</h3>
                                    {/* {errorMessage} */}
                                    <div className="form-group"><label className="text-info" htmlFor="username">Username:</label><br/><Field className="form-control" id="username" type="text" name="username"/></div>
                                    <div className="form-group"><label className="text-info" htmlFor="password">Password:</label><br/><Field className="form-control" id="password" type="password" name="password"/></div>
                                    <div className="form-group"><input className="btn btn-info btn-md" type="submit" name="submit" value="Login" /></div>
                                </Form>
                            </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                
        )
    }
}

export default LoginForm
