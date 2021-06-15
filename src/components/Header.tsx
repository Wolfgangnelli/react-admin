import React, {useState, useEffect} from "react";
import { User } from "../models/user";
import {Link, useRouteMatch} from 'react-router-dom';
import axios from "axios";
import {API_ADMIN} from '../config/config';
import { CSSTransition } from "react-transition-group";



const Header = (props: {user: User | null}) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
 let match = useRouteMatch(); 

 useEffect(() => {
  if(showUserMenu) {
    setShowUserMenu(false);
  }
 }, [])

 const logout = async () => {
  await axios.post(`${API_ADMIN}logout`);
  localStorage.removeItem("auth");
 }


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
            <div className="z-20 absolute right-1 bg-yellow-300 rounded" style={{width: "120px"}}>
              <ul className="flex flex-col text-white">
                  <li  className="text-white hover:bg-yellow-500 hover:text-yellow-600 w-full py-2 px-2 rounded">
                <Link to={`/profile`} className="w-full">
                <span className="uppercase">{props.user.first_name}</span> Profile
                </Link>
                  </li>
                  <li  className="text-white hover:bg-yellow-500 hover:text-yellow-600 w-full py-2 px-2 rounded">
                <Link to="/login" onClick={logout} className="w-full">
                    Logout
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
