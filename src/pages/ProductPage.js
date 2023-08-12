import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Product Page</h1>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>{product.name}</li>
                ))}
            </ul>
            <Link to="/admin/delete">Go to admin delete</Link>
        </div>
    );
}

export default ProductPage;
