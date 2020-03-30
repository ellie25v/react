import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

export const useRouter = isAuthentication => {
    if(isAuthentication){
        return (
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Redirect to="/" />
        </Switch>)
    }

    return(
        <Switch>
            <Route path="/login" component={LoginPage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/contact" component={ContactPage}/>
            <Redirect to="/login" />
    </Switch>
    )
}
