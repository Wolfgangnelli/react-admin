import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {API_ADMIN} from '../../config/config';
import { Product } from '../../models/product';
import Layout from '../../layout/layout';
import {Table, TableContainer, TableCell, TableHead, TableRow, TableBody, TableFooter, Paper, TablePagination, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
/* import Modal from 'react-modal';
const Zoom = require("react-reveal/Zoom"); */


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    }
});


const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState<number>(0);
    const [perPage, setPerPage] = useState<number>(10);
    const classes = useStyles();

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get(`${API_ADMIN}products`);
                setProducts(data);
            }
        )();
    }, []);

    const deleteProduct = async (id: number) => {
        if(window.confirm("Are you sure?")) {
            await axios.delete(`${API_ADMIN}products/${id}`);

            setProducts(products.filter(product => product.id !== id));
        }
    }

  

    return (
        <Layout>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mb-10">
            <h2 className="font-bold text-4xl text-blue-500 py-4">Products</h2>
       {products ?
       (
           <>
        <TableContainer component={Paper}>
            <Button 
            variant="contained" 
            color="default" 
            className="float-right mx-1 my-1" 
            href="/prod">
                New Product</Button>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.slice(page*perPage, (page+1)*perPage).map(product => {
                        return (
                            <TableRow key={product.id}>
                                <TableCell>{product.id}</TableCell>
                                <TableCell><img src={product.image} width={50} alt={product.title} /></TableCell>
                                <TableCell>{product.title}</TableCell>
                                <TableCell>{product.description}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>
                                    <Button 
                                    variant="contained" 
                                    color="secondary"
                                    onClick={() => deleteProduct(product.id)}>
                                         Delete</Button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
                <TableFooter>
                    <TablePagination 
                    count={products.length} 
                    page={page} onChangePage={(e, newPage) => setPage(newPage)} 
                    rowsPerPage={perPage} 
                    rowsPerPageOptions={[]} />
                </TableFooter>
            </Table>
     </TableContainer>
     </>
        ) :
        (<div>Loading...</div>)
        }
    </main>
     </Layout>
    )
}

export default Products;
