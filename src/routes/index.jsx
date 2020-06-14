import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import path from './path';
import Dashboard from '../pages/Dashboard';


const Routes = () => (
    <Router>
        <Switch>
            <Route path={path.root} exact component={Dashboard} />
        </Switch>
    </Router>
)
    
export default Routes;