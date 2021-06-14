import React, {useState, useEffect} from 'react';
import Layout from '../layout/layout';
import axios from 'axios';
import {API_ADMIN} from '../config/config';
import { User } from '../models/user';



const Users = () => {
    const [users, setUsers] = useState<User[]>([]);

useEffect(() => {
    (
        async () => {
           const {data} = await axios.get(`${API_ADMIN}ambassadors`);
           setUsers(data);
        }
    )();
}, []);

    return ( 
        <Layout>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <h2 className="font-bold text-4xl text-blue-500 py-4">Ambassador users</h2>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        return (
                            <tr key={user.first_name}>
                            <td>{user.id}</td>
                            <td>{user.first_name} {user.last_name}</td>
                            <td>{user.email}</td>
                            <td></td>
                            </tr>
                        )
                    }
                    )}              
                </tbody>
                </table>
            </div>
            </main>
        </Layout>
    )
}

export default Users;
