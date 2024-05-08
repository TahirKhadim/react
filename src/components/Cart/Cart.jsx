import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Product/Product';
import { remove, add, decrement } from '../../store/cartslice'; // Import the updateQuantity action

const Cart = () => {
  const products = useSelector(state => state.cart.carts);
    const dispatch = useDispatch();

    function removeCart(id) {
        dispatch(remove(id));
    }

    const handleIncrement = (product) => {
        dispatch(add(product)); // Dispatch the add action with the product object
    };

    const handleDecrement = (e) => {
        dispatch(decrement(e))
    };

    return (
       
              
           <div className="container">
           <div className="row mt-4">
               <Link to={'/productlist'}>
                    <button className='btn btn-primary'>See More Products</button>
                </Link>
               </div>
            <div className="row">
               
               
                
                {products.map(product => (
                     <div key={product.id} className="col-md-8 col-sm-12 mb-3 mt-3
                     d-flex align-items-center justify-content-between border border-dark rounded p-3">
                    <div  className="mb-3 ">
                        <img
                            src={product.image}
                            style={{ width: '100px', height: '100px' }}
                            className="img-fluid rounded-start"
                            alt={product.title}

                        />
                        </div>
                        <div>
                            <h5 className="card-title">{product.title}</h5>
                            <div className="card-body">
                                <p className="card-text"><b>Price per Item </b>{product.price}</p>
                                <p className="card-text"><b>Total:</b>{product.price * product.quantity}</p>
                                <p ><b>Quantity:</b> {product.quantity}</p>
                            </div>

                            <div className="quantity-control">
                                <button className="btn btn-secondary" onClick={() => handleDecrement(product)}><i className="fas fa-minus"></i></button>
                                <input type="number" value={product.quantity} readOnly className="quantity-input" />
                                <button className="btn btn-secondary" onClick={() => handleIncrement(product)}><i className="fas fa-plus"></i></button>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger" onClick={() => removeCart(product.id)}>Remove</button>
                        </div>
                    </div>

                    
                    
                ))}


                
            </div>
                </div>
           
           

         
       
    );
}

export default Cart;
