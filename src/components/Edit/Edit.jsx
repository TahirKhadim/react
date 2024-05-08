import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
    const [updateid, setupdateid] = useState('');
    const [updatetitle, setupdatetitle] = useState('');
    const [updatedescription, setupdatedescription] = useState('');
    const [updateprice, setupdateprice] = useState('');
    const [updateimage, setupdateimage] = useState('');

    const navigate = useNavigate();

    function handlesubmit(e) {
        e.preventDefault();
        console.log('Submitting update with ID:', updateid); // Logging the ID before making the request
        axios.put(`https://fakestoreapi.com/products/${updateid}`, {
            title: updatetitle,
            description: updatedescription,
            price: updateprice,
            image: updateimage,
        })
        .then(() => {
            console.log('Product updated successfully');
            navigate('/read');
        })
        .catch(error => {
            console.error("Error updating product:", error);
        });
    }

    useEffect(() => {
        const id = localStorage.getItem('id');
        console.log('Retrieved ID from localStorage:', id); // Logging the retrieved ID
        setupdateid(id);
        setupdatetitle(localStorage.getItem('title'));
        setupdatedescription(localStorage.getItem('description'));
        setupdateprice(localStorage.getItem('price'));
        setupdateimage(localStorage.getItem('image'));
    }, []);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card border border-dark rounded shadow">
                        <div className="card-body">
                            <h3 className="card-title mb-4">Update Product</h3>
                            <form onSubmit={handlesubmit}>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Update Title</label>
                                    <input type="text" id="title" value={updatetitle} className="form-control" onChange={(e) => setupdatetitle(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Enter Description</label>
                                    <textarea id="description" value={updatedescription} onChange={(e) => setupdatedescription(e.target.value)} className="form-control" rows="3"></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label">Enter Price</label>
                                    <input type="text" id="price" value={updateprice} className="form-control" onChange={(e) => setupdateprice(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">Image</label>
                                    <input type="file" id="image" className="form-control" onChange={(e) => setupdateimage(e.target.value)} />
                                </div>
                                <button type="submit" className="btn btn-success">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;
