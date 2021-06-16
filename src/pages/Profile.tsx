import React, {useState, useEffect, SyntheticEvent, Dispatch} from 'react';
import {Button} from '@material-ui/core';
import Layout from '../layout/layout';
import axios from 'axios';
import {API_ADMIN} from '../config/config';
import { connect } from 'react-redux';
import { User } from '../models/user';
import { setUser } from '../redux/actions/user';


const Profile = (props: {user: User, setUser: any}) => {
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [passsword, setPasssword] = useState("");
    const [password_confirmation, setPassword_confirmation] = useState("");
  

    useEffect(() => {
                setFirst_name(props.user.first_name);
                setLast_name(props.user.last_name);
                setEmail(props.user.email);
    }, [props.user])


    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        if(e.currentTarget.getAttribute('id')) {           
                const {data} = await axios.put(`${API_ADMIN}users/info`, {
                        first_name,
                        last_name,
                        email
                    });       
                    props.setUser(data);
        } else {           
                    await axios.put(`${API_ADMIN}users/password`, {
                        passsword,
                        password_confirmation
                    })          
            }
    }
    
    return (
        <Layout>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mb-10">
            <div className="py-4">
                <h3 className="text-2xl font-bold text-green-600">Account Information</h3>
                <form className="pt-6" onSubmit={handleSubmit} id="account-info">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" value={first_name} id="first_name" name="first_name" onChange={(e) => setFirst_name(e.target.value)} />
                        <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="last_name" name="last_name" value={last_name} onChange={(e) => setLast_name(e.target.value)} />
                        <label htmlFor="last_name">Last Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="email" name="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <Button variant="contained" color="primary" type="submit">Submit</Button>
                </form>
            </div>
            <div className="py-4">
            <h3 className="text-2xl font-bold text-green-600">Change Password</h3>
                <form className="pt-6" onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="password" name="password" onChange={(e) => setPasssword(e.target.value)} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="password_confirmation" name="password_confirmation" onChange={(e) => setPassword_confirmation(e.target.value)} />
                        <label htmlFor="password_confirmation">Password Confirm</label>
                    </div>
                    <Button variant="contained" color="primary" type="submit">Submit</Button>
                </form>
            </div>
            </main>
        </Layout>
    )
}

const mapStateToProps = (state: {user: any}) => {
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
        setUser: (user: User) => dispatch(setUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
