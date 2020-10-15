import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BloodDonationMap from './pages/BloodDonationMap';
import CreateBloodDonation from './pages/CreateBloodDonation';
import BloodDonation from './pages/BloodDonation';
import Landing from './pages/Landing';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/app" component={BloodDonationMap}/>

                <Route path="/blood_donation/create" component={CreateBloodDonation}/>
                <Route path="/blood_donation/:id" component={BloodDonation}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;