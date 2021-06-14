import React, {useState, useEffect} from 'react';
import Layout from '../layout/layout';
import axios from 'axios';
import {API_ADMIN} from '../config/config';
import { User } from '../models/user';
import {Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    }
})


const Users = () => {
    const [users, setUsers] = useState<User[]>([]);
    const classes = useStyles();

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
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user => {
                        return (
                            <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.first_name} {user.last_name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell></TableCell>
                            </TableRow>
                        )
                    }
                    )}              
                </TableBody>
                </Table>
            </TableContainer>
            </main>
        </Layout>
    )
}

export default Users;
