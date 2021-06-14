import React from 'react';
import {NavLink} from 'react-router-dom';


const Nav = () => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
              <NavLink to="/users" activeClassName="selected">
            <li className="nav-item">
              <a className="nav-link">
                <span></span>
                Users
              </a>
            </li>
              </NavLink>
          
          </ul>
        </div>
      </nav>
    )
}

export default Nav;
