import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Layout from '../views/layout/index';
import Login from '../views/login/index';
// import AuthRouter from '@/views/auth/AuthRouter';
const Router = () => {
    return (
        <HashRouter>
            <Switch>
                <Route component={Login} exact path="/login" />
                <Route component={Layout} exact path="/" />
            </Switch>
        </HashRouter>
    );
};

export default Router;