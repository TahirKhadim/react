import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const ProductList = () => {
    const [productData, setProductData] = useState([]);

    useNavigate();

    useEffect(() => {
      axios.get("https://fakestoreapi.com/products")
        .then((res) => {
          setProductData(res.data);
        })
        .catch((error) => {
          console.error('Error fetching product data:', error);
        });
    }, []);

    function handleview(id,title,desc,image,price){
        localStorage.setItem('id',id);
        localStorage.setItem('title',title);
        localStorage.setItem('description',desc);
        localStorage.setItem('image',image);
        localStorage.setItem('price',price);
        

    }
  return (
 
    <div className="row mt-5">
        
        {productData.map((product) => {
          const { id, title, description, image, price } = product;
          return (
            <div key={id} className="col-md-3 mb-4">
              <div className="card">
              <div className='text-center py-3'>
                        <img src={image} className="card-img-top" alt={title} style={{width:'120px', height:'130px'}} />
                      </div>
                <div className="card-body">
                  <h5 className="card-title">{title.slice(1,20)}</h5>
                  <p className="card-text">{description.slice(1,100)}</p>
                  <p className="card-text">Price: ${price}</p>
                </div>
                <div className="card-footer text-center">
                            <Link to={`/product/${product.id}`}>
                                <button className='btn btn-primary'>View Detail</button>
                            </Link>
                        </div>
              </div>
            </div>
          );
        })}
      </div>
    
  )
}

export default ProductList