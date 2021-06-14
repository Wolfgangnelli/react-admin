import React from "react";
import { User } from "../models/user";
import {Link, useRouteMatch} from 'react-router-dom';
import axios from "axios";
import {API_ADMIN_LOGOUT} from '../config/config';


const Header = (props: {user: User | null}) => {
 let match = useRouteMatch(); 


  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
        Company name
      </a>
      <ul className="navbar-nav px-3 flex flex-row">
        {props.user ? (
        <Link to={`${match.url}/profile`} className="text-white self-center">
          <li>
          <a className="nav-link" href="#">
        <span className="text-green-500 text-2xl">
          <i className="fa fa-user-circle">
          </i>
          </span><span className="uppercase">{props.user.first_name}</span>
        </a>
          </li>
        </Link>) : null             
        }
        <Link to="/login" onClick={async () => await axios.post(`${API_ADMIN_LOGOUT}`)} className="nav-item text-nowrap ml-4 self-center">
          <a className="nav-link" href="#">
            Sign out
          </a>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
