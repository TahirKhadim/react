import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';

const Category = ({ setcatname }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products/categories');
                setCategories(response.data);
            } catch (error) {
                setError('Error fetching categories');
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="container">
          
            <div className="category">
                <h2 className="text-center mb-4">Categories</h2>
                {loading && <p>Loading categories...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && (
                    <ul className="list-group">
                        {categories.map((category, index) => (
                            <li
                                key={index}
                                className="list-group-item clickable cursor-pointer"
                                onClick={() => setcatname(category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Category;
