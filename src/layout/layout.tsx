import React, {useState, useEffect, Dispatch} from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import axios from 'axios';
import {API_ADMIN} from '../config/config';
import {Redirect} from 'react-router-dom';
import { User } from '../models/user';
import {connect} from 'react-redux';
import { setUser } from '../redux/actions/user';



const Layout = (props: any) => {
    const [redirect, setredirect] = useState(false);
    

    useEffect(() => {
         (
            async () => {
                try {
                    const {data} = await axios.get(`${API_ADMIN}user`)
                    props.setUser(data);
                   /*  localStorage.setItem("auth", JSON.stringify(data)); */
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
                <div className="container-fluid max-w-screen-2xl mx-auto">
                    <div className="row">
                    <Nav />
                    {props.children}
                    </div>             
            </div>
        </div>
    )
}

const mapStateToProps = (state: {user: any}) => ({
        user: state.user.user
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({ 
        setUser: (user: User) => dispatch(setUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
