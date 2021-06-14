import React, {SyntheticEvent, useState} from 'react';
import Layout from '../../layout/layout';
import {TextField, Button} from '@material-ui/core';
import axios from 'axios';
import {API_ADMIN} from '../../config/config';
import {Redirect} from 'react-router-dom';


const ProductForm = () => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [redirect, setRedirect] = useState(false);


    const handleForm = async (e: SyntheticEvent) => {
        e.preventDefault();

        try {
            await axios.post(`${API_ADMIN}products`, {
                title,
                description,
                image,
                price
            });

            setRedirect(true);
            
        } catch (error) {
            console.log(error);
        }


    }

    if(redirect) {
        return <Redirect to="/products" />
    }

    return (
        <Layout>
           <form onSubmit={handleForm} className="mt-12">
               <div className="mb-3">
                   <TextField label="Title" variant="outlined" onChange={e => setTitle(e.target.value)} />
               </div>
               <div className="mb-3">
                   <TextField label="Description" variant="outlined" rows={4} multiline onChange={e => setDescription(e.target.value)}  />
               </div>
               <div className="mb-3">
                   <TextField label="Image" variant="outlined" onChange={e => setImage(e.target.value)} />
               </div>
               <div className="mb-3">
                   <TextField label="Price" type="number" variant="outlined" onChange={e => setPrice(e.target.value)} />
               </div>
               <Button type="submit" variant="contained" color="primary">Submit</Button>
           </form>
        </Layout>
    )
}

export default ProductForm;