import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import useAuth from '../../contexts/AuthProvider/useAuth';
import Footer from '../Sheard/Footer/Footer';
import Navigarion from '../Sheard/Navigation/Navigarion';
import './PlaceOrder.css'

const PlaceOrderModal = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [productDetail, setProductDetail] = useState();
    const [count, setCount] = useState(1);


    const handleIncrease = () => {
        setCount(count + 1);
    }
    const handleDecress = () => {
        if (count <= 1) {
            return;
        }
        setCount(count - 1);
    }
    useEffect(() => {
        fetch(`https://still-thicket-39969.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProductDetail(data[0]));
    }, [id]);

    const handleAddToCart = (productInfo) => {
        productInfo.unique = productInfo._id;
        productInfo.status = "pending"
        productInfo.email = user.email
        productInfo.quantity = { count }
        fetch('https://still-thicket-39969.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Your order Successfully submited..!')
                }
            })
    }


    return (
        <>
            <Navigarion></Navigarion>

            <div className="place-order">
                <div className="section-title text-center">
                    <h2 className='mb-5'>Place <span className='text-style'>Order</span></h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img style={{ height: '445px' }} className='w-100' src={productDetail?.img} alt="" />
                        </div>
                        <div className="col-md-6">
                            <h2>Product-Name: {productDetail?.name}</h2>
                            <p className='rating'><b style={{ fontSize: '20px' }}>Rating: </b><Rating
                                style={{ color: "#315160", paddingBottom: "10px", }}
                                initialRating={productDetail?.start}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                readonly
                            /> <strong style={{ color: "#315160" }}>({productDetail?.start})</strong> </p>
                            <p><strong style={{ fontSize: '20px' }}>Product-Description:</strong> {productDetail?.desc}</p>
                            <h3 className='text-style'>Price : $ {productDetail?.price * count}</h3>
                            <div className="quantity mb-3">
                                <h2>{count}</h2>
                                <button className='plus' onClick={handleIncrease}>+</button>
                                <button className='minus' onClick={handleDecress}>-</button>
                            </div>
                            <button onClick={() => handleAddToCart(productDetail)} className='btn btn-success box-button'>Add To Cart <i class="fas fa-cart-plus"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
};

export default PlaceOrderModal;