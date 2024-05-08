import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {
    const [apidata, setApidata] = useState([]);

    const getData = () => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setApidata(res.data);
            })
            .catch((error) => {
                console.log("Error fetching data:", error);
            });
    };

    useEffect(() => {
        getData();
    }, []);

 
    async function deleteProduct(id) {
        try {
            await axios.delete(`https://fakestoreapi.com/products/${id}`);
            console.log('Product deleted successfully');
            getData(); // Refresh data after deletion
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    }
    
    function handleedit(id,title,desc,price,image){
        localStorage.setItem('id',id);
        localStorage.setItem('title',title);
        localStorage.setItem('description',desc);
        localStorage.setItem('price',price);
        localStorage.setItem('image',image);

    }
    return (
        <>
            <div className="row">
                <Link to='/create'>
                    <button className='my-2 btn btn-primary'>Create New Data</button>
                </Link>
                <div className="col-lg-12 col-sm-12">
                    <table className='table table-bordered table-striped table-hover table-dark'>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {apidata.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                       {item.id}
                                    </td>
                                    <td>
                                        <img src={item.image} alt="Product" style={{ width: "50px" }} />
                                    </td>
                                    <td>{item.title}</td>
                                    <td>{item.description.slice(1,10)}</td>
                                    <td>{item.price}</td>
                                    <td>{item.category}</td>
                                    <td>
                                    <Link to={"/edit"}>
                                    <button className='btn btn-info' onClick={()=>handleedit(item.id, item.title, item.description, item.price, item.image)}>Edit</button>
                                    </Link>
                                    </td>
                                    <td>
                                    <button className='btn btn-danger' onClick={() => {if(window.confirm('are u sure to delete it ??')){
                                        deleteProduct(item.id)
                                    }}}>Delete</button>
                                    </td>
                                  
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Read;
