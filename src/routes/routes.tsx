import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { RedirectToUsers } from '../components/RedirectToUsers';
import Users from '../pages/Users';

const Routes = () => {
    return (
    <Switch>
      <Route path="/" exact component={RedirectToUsers} />
      <Route path="/users" component={Users} />
      {/*   <Route path="/profile"  /> */}

    </Switch>
    )
}

export default Routes;
