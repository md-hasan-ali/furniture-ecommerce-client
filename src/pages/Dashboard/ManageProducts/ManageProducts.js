import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Rating from 'react-rating';
import './manage-product.css'

const ManageProducts = () => {
    const [manageProducts, setManageProduct] = useState([]);
    const [deleteCount, setDeleteCount] = useState(null);

    useEffect(() => {
        fetch('https://still-thicket-39969.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setManageProduct(data))
    }, [deleteCount]);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are You sure,You want to delete?');
        if (proceed) {
            fetch(`https://still-thicket-39969.herokuapp.com/products/${id}`, {
                method: 'DELETE',
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setDeleteCount(true);
                    }
                    else {
                        setDeleteCount(false);
                    }
                })
        }

    }
    return (
        <div className='mt-5'>
            <div className="container-fluid">
                <div className="section-title text-center">
                    <h2 className='mb-5'>Manage All Products</h2>
                </div>
                {
                    manageProducts.length === 0 ?
                        <div className="text-center">
                            <Spinner size="xl" animation="border" variant="danger" />
                        </div>
                        : <div className="row">
                            {
                                manageProducts.map(product =>
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
                                                <button onClick={() => handleDelete(product._id)} className='btn btn-danger text-white'>Delete <i class="fas fa-trash-alt"></i></button>

                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default ManageProducts;