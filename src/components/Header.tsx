import React, {useState, useEffect} from "react";
import { User } from "../models/user";
import {Link, useRouteMatch} from 'react-router-dom';
import axios from "axios";
import {API_ADMIN_LOGOUT} from '../config/config';
import { CSSTransition } from "react-transition-group";



const Header = (props: {user: User | null}) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
 let match = useRouteMatch(); 

 useEffect(() => {
  if(showUserMenu) {
    setShowUserMenu(false);
  }
 }, [])


  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
        Company name
      </a>
        {props.user ? 
      <div className="mr-6 relative">
        <button onClick={() => setShowUserMenu(!showUserMenu)}>
        <span className="text-green-500 text-2xl">
          <i className="fa fa-user-circle">
          </i>
          </span>
        </button>
        {showUserMenu ? 
   <CSSTransition in={showUserMenu} timeout={400} classNames="user-list-transition" unmountOnExit appear>

            <div className="z-10 absolute right-1 bg-yellow-300 rounded">
          <ul className="navbar-nav flex flex-cols">
              <li>
            <Link to={`${match.url}/profile`} className="text-white self-center hover:bg-yellow-500 w-full py-2 px-4">
            <span className="uppercase">{props.user.first_name}</span> profile
            </Link>
              </li>
              <li>
            <Link to="/login" onClick={async () => await axios.post(`${API_ADMIN_LOGOUT}`)} className="nav-item text-nowrap py-2 px-4 self-center hover:bg-yellow-500">
                Sign out
            </Link>            
              </li>
          </ul> 
        </div> 
   </CSSTransition>
            : null }        
      </div>
      : null
    }
    </header>
  );
};

export default Header;
