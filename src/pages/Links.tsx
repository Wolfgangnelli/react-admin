import React, {useState, useEffect} from 'react';
import Layout from '../layout/layout';
import {Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper, TableFooter, TablePagination } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { Link } from '../models/link';
import axios from 'axios';
import {API_ADMIN} from '../config/config';
import {useParams} from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    }
})

type LinksParam = {
    id: string;
};


const Links = () => {
    const [links, setLinks] = useState<Link[]>([]);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);
    const [page, setPage] = useState<number>(0);
    const classes = useStyles();
    let { id } = useParams<LinksParam>();

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get(`${API_ADMIN}users/${id}/links`);
                setLinks(data);
            }
        )();
    }, [])


    return (
        <Layout>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <h2 className="font-bold text-4xl text-blue-500 py-4">Ambassador links</h2>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Code</TableCell>
                    <TableCell>Count</TableCell>
                    <TableCell>Revenue</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {links.slice(page*rowsPerPage, (page+1)*rowsPerPage).map(link => {
                        return (
                            <TableRow key={link.id}>
                            <TableCell>{link.id}</TableCell>
                            <TableCell>{link.code}</TableCell>
                            <TableCell>{link.orders.length}</TableCell>
                            <TableCell>{link.orders.reduce((s, o) => s+o.total, 0)}</TableCell>
                            </TableRow>
                        )}
                    )}              
                </TableBody>
                <TableFooter>
                    <TablePagination count={links.length} 
                    page={page} 
                    onChangePage={(e, newPage) => setPage(newPage)} 
                    rowsPerPage={rowsPerPage} 
                    rowsPerPageOptions={[]} />
                </TableFooter>
                </Table>
            </TableContainer>
            </main>
        </Layout>
    )
}

export default Links;
