import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { RedirectToUsers } from '../components/RedirectToUsers';
import Links from '../pages/Links';
import Users from '../pages/Users';

const Routes = () => {
    return (
    <Switch>
      <Route path="/" exact component={RedirectToUsers} />
      <Route path="/users" exact component={Users} />
      <Route path="/users/:id/links" component={Links} /> 
      {/*   <Route path="/profile"  /> */}

    </Switch>
    )
}

export default Routes;
