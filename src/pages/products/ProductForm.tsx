import React, {SyntheticEvent, useState, useEffect} from 'react';
import Layout from '../../layout/layout';
import {TextField, Button} from '@material-ui/core';
import axios from 'axios';
import {API_ADMIN} from '../../config/config';
import {Redirect, useParams} from 'react-router-dom';

type idParam = {
    id: string;
};


const ProductForm = () => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [redirect, setRedirect] = useState(false);
    let {id} = useParams<idParam>();

    useEffect(() => {
        if(id) {
            (
                async () => {
                    const {data} = await axios.get(`${API_ADMIN}products/${id}`);
                     setTitle(data.title);
                     setDescription(data.description);
                     setImage(data.image);
                     setPrice(data.price);
                 }
            )();
        }
    }, []) 


    const handleForm = async (e: SyntheticEvent) => {
        e.preventDefault();
        const axiosData = {
            title,
            description,
            image,
            price
        }
        try {
            if(id) {
                await axios.put(`${API_ADMIN}products/${id}`, axiosData)
            } else {
                await axios.post(`${API_ADMIN}products`, axiosData);
            }

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
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mb-10">
                <div className="mt-12">
                <h2 className="text-2xl font-bold text-green-600">Create New Product</h2>
            <form onSubmit={handleForm} className="pt-8">
                <div className="mb-3">
                    <TextField label="Title" variant="outlined" onChange={e => setTitle(e.target.value)} value={title} />
                </div>
                <div className="mb-3">
                    <TextField label="Description" variant="outlined" rows={4} multiline onChange={e => setDescription(e.target.value)} value={description}  />
                </div>
                <div className="mb-3">
                    <TextField label="Image" variant="outlined" onChange={e => setImage(e.target.value)} value={image} />
                </div>
                <div className="mb-3">
                    <TextField label="Price" type="number" variant="outlined" onChange={e => setPrice(e.target.value)} value={price} />
                </div>
                <Button type="submit" variant="contained" color="primary">Submit</Button>
            </form>
                </div>
            </main>
        </Layout>
    )
}

export default ProductForm;