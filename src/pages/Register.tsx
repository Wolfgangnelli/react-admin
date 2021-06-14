import React, {Component, SyntheticEvent} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import {API_ADMIN} from '../config/config';

class Register extends Component {
    firstName = '';
    lastName = '';
    email = '';
    password = '';
    passwordConfirm = '';
    token = document.head.querySelector('meta[name="csrf-token"]');
    state = {
        redirect: false
    }


    submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.post(`${API_ADMIN}register`, {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            password: this.password,
            password_confirmation: this.passwordConfirm
        });

        this.setState({
            redirect: true
        })

    }

    render() {
        if(this.state.redirect) {
            return <Redirect to="/login" />
        }
        return (
            <main className="form-signin">
            <form onSubmit={this.submit}>
              <h1 className="h3 mb-3 fw-normal">Please register</h1>
          
              <div className="form-floating">
                <input type="text" name="first_name" className="form-control" id="first_name" placeholder="First name" 
                onChange={e => this.firstName = e.target.value} />
                <label htmlFor="first_name">First name</label>
              </div>

              <div className="form-floating">
                <input type="text" name="last_name" className="form-control" id="last_name" placeholder="Last name"
                onChange={e => this.lastName = e.target.value} />
                <label htmlFor="last_name">Last name</label>
              </div>

              <div className="form-floating">
                <input type="email" name="email" className="form-control" id="email" placeholder="Email" 
                onChange={e => this.email = e.target.value} />
                <label htmlFor="email">Email address</label>
              </div>

              <div className="form-floating">
                <input type="password" name="password" className="form-control" id="password" placeholder="Password" 
                onChange={e => this.password = e.target.value} />
                <label htmlFor="password">Password</label>
              </div>

              <div className="form-floating">
                <input type="password" name="password_confirm" className="form-control" id="password_confirm" 
                onChange={e => this.passwordConfirm = e.target.value} placeholder="Password confirm" />
                <label htmlFor="password_confirm">Password confirm</label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
             
            </form>
          </main>
        )
    }
}



export default Register;