import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import Product from '../Product/Product';
import axios from 'axios';
import Header from '../Header/Header';
import  '../../App.css';

const Home = () => {

   

    const [products, setProducts] = useState([]);
    const [catname, setCatname] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let url = 'https://fakestoreapi.com/products';
                if (catname !== '') {
                    url += `/category/${catname}`;
                }
                const response = await axios.get(url);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [catname]);

    return (
        <>
          
            <div className="container-fluid mt-5">
                <div className="row">
                    
                    {/* Category Section */}
                    <div className="col-md-3 col-sm-12 mb-3 mb-md-0">
                        <Category setcatname={setCatname} />
                    </div>

                    {/* Product Section */}
                    <div className="col-md-9 col-sm-12">
                        <div className="row">
                            <Product products={products} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
