import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { add } from '../../store/cartslice';

const Detail = () => {
    const { id } = useParams(); // Get the id parameter from the URL
    const [product, setProduct] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        // Fetch product details based on the id
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    const addtocart = () => {
        dispatch(add(product));
    };

    // Conditional rendering: Render the component content only when product is not null
    if (!product) {
        return <p>Loading...</p>; // Render a loading state while fetching product details
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6">
                  
                        
                            <div className="text-center ">
                                <img src={product.image} className="img-fluid" alt={product.title} style={{width:'200px', height:'240px'}} />
                            </div>
                       
                    
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="product p-4">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <Link to="/" className="d-flex align-items-center">
                                   
                                    <i className="fa fa-long-arrow-left"></i>
                                    <span className="ml-1">Back</span>
                                </Link>
                            </div>
                            <h5 className="text-uppercase">{product.title}</h5>
                            <div className="price d-flex flex-row align-items-center mb-3">
                                <span className="act-price">${product.price}</span>
                            </div>
                            <p className="about">{product.description}</p>
                            {/* Add to cart button or other actions */}
                            <button className="btn btn-primary me-3" onClick={addtocart}>Add to Cart</button>
    <Link to={'/cart'}><button className="btn btn-primary" onClick={addtocart}>View Cart</button></Link>
                            
                        </div>
                        
    

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
