import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from '../page/index/index';
import Login from '../page/login/login';

const Router = () => {
    return (
        // <BrowserRouter>
              <Switch> 
                <Route component={Login} exact path="/login" />
                <Route component={Index} exact path="/" />
              </Switch> 
        //  </BrowserRouter>
    );
};

export default Router;