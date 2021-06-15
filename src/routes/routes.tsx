import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { RedirectToUsers } from '../components/RedirectToUsers';
import Links from '../pages/Links';
import Orders from '../pages/Orders';
import ProductForm from '../pages/products/ProductForm';
import Products from '../pages/products/Products';
import Profile from '../pages/Profile';
import Users from '../pages/Users';

const Routes = () => {
    return (
    <Switch>
      <Route path="/" exact component={RedirectToUsers} />
      <Route path="/users" exact component={Users} />
      <Route path="/users/:id/links" component={Links} /> 
      <Route path="/products" exact component={Products} />
      <Route path="/products/create" component={ProductForm} />
      <Route path="/products/:id/edit" component={ProductForm} />
      <Route path="/orders" component={Orders} />
      <Route path="/profile" component={Profile}  /> 

    </Switch>
    )
}

export default Routes;
