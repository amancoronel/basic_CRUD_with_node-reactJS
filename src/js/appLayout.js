import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import Header from './Header';
import auth from './class/auth';

import CrudForm from './crudForm';

export default function appLayout({component : Component, ...rest}) {
    return (
        <Route 
            {...rest} 
            render={
                props => {
                    if(auth.isAuthenticated()) {
                        return <div>  
                            <Header />
                            <CrudForm />
                        </div>
                    } else {
                        return <Redirect to= {
                            {
                                pathname : "/",
                                state : {
                                    from : props.location
                                }
                            }
                        } />
                    }
                }
        }

        />
    )
}
