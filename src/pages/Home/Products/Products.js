import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://still-thicket-39969.herokuapp.com/products')
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
                {
                    products.length === 0 ?
                        <div className="text-center">
                            <Spinner size="xl" animation="border" variant="danger" />
                        </div>
                        : <div className="row">
                            {
                                products.map(product =>
                                    <div key={product._id} className='col-md-4'>
                                        <div className="single-product text-center">
                                            <div className="image">
                                                <img src={product.img} alt="" />
                                            </div>
                                            <h4 className='mt-2'>{product.name}</h4>
                                            <strong><p>{product.price}</p></strong>
                                            <p className='rating'><Rating
                                                style={{ color: "#315160", paddingBottom: "10px", }}
                                                initialRating={product.start}
                                                emptySymbol="far fa-star"
                                                fullSymbol="fas fa-star"
                                                readonly
                                            /> <strong style={{ color: "#315160" }}>({product.start})</strong> </p>
                                            <div className="overlay pb-3">

                                                <Link to={`productsDetail/${product?._id}`}>
                                                    <button className='btn btn-success text-white'>Add To Cart <i class="fas fa-cart-plus"></i></button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                }
            </div>
        </div >
    );
};

export default Products;