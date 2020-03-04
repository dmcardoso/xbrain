import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Completion from './pages/Completion';
import Products from './pages/Products';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={Products} exact />
            <Route path="/completion" component={Completion} />
            <Redirect from="*" to="/" />
        </Switch>
    );
}
