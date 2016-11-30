import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { hashHistory } from 'react-router';

import Layout from './layout/layout';
import Review from './review';
import User from './user';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Review}/>
            <Route path="review" component={Review}></Route>
            <Route path="user" component={User}></Route>
        </Route>
    </Router>
);

export default routes;
