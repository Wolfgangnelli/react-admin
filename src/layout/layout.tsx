import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import axios from 'axios';
import {API_ADMIN} from '../config/config';
import {Redirect} from 'react-router-dom';
import { User } from '../models/user';


const Layout = (props: any) => {
    const [redirect, setredirect] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
         (
            async () => {
                try {
                    const {data} = await axios.get(`${API_ADMIN}user`)
                    setUser(data);
                } catch (error) {
                    setredirect(true);
                }
            }
         )();
    }, [])


    if(redirect) {
        return <Redirect to="/login" />
    }
 

    return (
    <div>
        <Header user={user} />
            <div className="container-fluid">
                <div className="row">
                <Nav />
                {props.children}
                </div>             
           </div>
    </div>
    )
}

export default Layout;
