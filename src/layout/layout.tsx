import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import axios from 'axios';
import {API_AUTHENTICATED_USER} from '../config/config';
import {Redirect} from 'react-router-dom';


const Layout = (props: any) => {
    const [redirect, setredirect] = useState(false)

    useEffect(() => {
         (
            async () => {
                try {
                    const {data} = await axios.get(`${API_AUTHENTICATED_USER}`)
                    console.log(data);
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
        <Header />
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
