import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)

    return (
        <div className='products-area my-5'>
            <div className="container">
                <div className="section-title text-center">
                    <h2 className='pb-5'>Main <span className='text-style'>Products</span></h2>
                </div>
                <div className="row">
                    {
                        products.map(product =>
                            <div key={product._id} className='col-md-4'>
                                <div className="single-product text-center">
                                    <img src={product.img} alt="" />
                                    <h4 className='m-0'>{product.name}</h4>
                                    <strong><p>{product.price}</p></strong>
                                    <p><Rating
                                        style={{ color: "#315160", paddingBottom: "10px", }}
                                        initialRating={product.start}
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"
                                        readonly
                                    /> <strong style={{ color: "#315160" }}>{product.start}</strong> </p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;