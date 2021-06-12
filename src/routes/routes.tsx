import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Users from '../pages/Users';

const Routes = () => {
    return (
    <Switch>
        <Route path="/" exact component={Users} />
      {/*   <Route path="/profile"  /> */}

    </Switch>
    )
}

export default Routes;
