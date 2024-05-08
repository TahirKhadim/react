import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://fakestoreapi.com/products', {
            title: title,
            price: price,
            description: description,
            image: 'https://i.pravatar.cc',
        })
            .then(() => {
                navigate("/");
                // You can perform additional actions here if needed
            })
            .catch(error => {
                console.error("Error creating product:", error);
                // You can handle the error and provide feedback to the user
            });
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card border border-5 border-dark shadow rounded">
                        <div className="card-body">
                            <h3 className="card-title mb-4">Create New Product</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" id="title" className="form-control" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea id="description" className="form-control" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} rows="3" required ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <input type="text" id="price" className="form-control" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)} required  />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">Image</label>
                                    <input type="file" id="image" className="form-control" onChange={(e) => setImage(e.target.value)} required />
                                </div>
                                <button type="submit" className="btn btn-success">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;
