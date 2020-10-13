import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BloodDonationMap from './pages/BloodDonationMap';
import Landing from './pages/Landing';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/app" component={BloodDonationMap}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;