import React from 'react';
import {NavLink} from 'react-router-dom';


const Nav = () => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-4">
          <ul className="nav flex-column">
            <li className="nav-item py-1">
              <NavLink to="/users" activeClassName="selected">
                Users
              </NavLink>
            </li>
            <li className="nav-item py-1">
              <NavLink to="/products" activeClassName="selected">
                Products
              </NavLink>
            </li>
            <li className="nav-item py-1">
              <NavLink to="/orders" activeClassName="selected">
                Orders
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Nav;
