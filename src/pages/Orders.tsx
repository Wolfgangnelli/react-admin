import React, {useState, useEffect} from 'react';
import Layout from '../layout/layout';
import { Order } from '../models/order';
import axios from 'axios';
import {API_ADMIN} from '../config/config';
import {Accordion, AccordionSummary, AccordionDetails, Table, TableBody, TableHead, TableCell, TableRow} from '@material-ui/core';
import {ExpandMore} from '@material-ui/icons';
import {formatCurrency} from '../Helpers/index';

const Orders = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get(`${API_ADMIN}orders`);
                setOrders(data);
            }
        )();
    }, [])

 
    return (
        <Layout>
         <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mb-10">
             <h2 className="text-2xl font-bold text-green-600 my-2">Orders received for each ambassador</h2>
             <div className="mt-4">
            {orders.map(order => {
                return (
                    <Accordion key={order.id}>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <div className="flex w-full">
                            <p className="font-semibold">{order.name}</p>
                            <p className="pl-8">revenue: <span className="text-green-500 font-semibold">{formatCurrency(+order.total)}</span></p>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                            <TableCell>#</TableCell>
                                            <TableCell>Product Title</TableCell>
                                            <TableCell>Price</TableCell>
                                            <TableCell>Quantity</TableCell>
                                        </TableRow>
                                </TableHead>
                                <TableBody>
                                    {order.order_items.map(item => {
                                        return (
                                    <TableRow key={item.id}>
                                        <TableCell>{item.id}</TableCell>
                                        <TableCell>{item.product_title}</TableCell>
                                        <TableCell>{formatCurrency(+item.price)}</TableCell>
                                        <TableCell>{item.quantity}</TableCell>
                                    </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
            </div>
         </main>
        </Layout>
    )
}

export default Orders;
