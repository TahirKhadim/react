import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ products }) => {
    if (!products || !products.length) {
        // Render loading state or empty state here
        return <p>Loading...</p>; // You can replace this with a loading spinner or another component
    }

    return (
        <div className="row">
            <h2 className='text-center'>Products</h2>
            {products.map(product => (
                <div key={product.id} className="col-md-3 mb-3">
                    <div className="card h-100">
                      <div className='text-center py-3'>
                        <img src={product.image} className="card-img-top" alt={product.title} style={{width:'120px', height:'130px'}} />
                      </div>
                        <div className="card-body h-100">
                            <h5 className="card-title">{product.title.slice(1,30)}</h5>
                            <p className="card-text">{product.description.slice(1,100)}</p>
                            <div className="d-flex justify-content-center align-items-center">
                                <p className="card-text">${product.price}</p>
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <Link to={`/product/${product.id}`}>
                                <button className='btn btn-primary'>View Detail</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Product;
