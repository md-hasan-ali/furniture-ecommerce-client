import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import Footer from '../Sheard/Footer/Footer';
import Navigarion from '../Sheard/Navigation/Navigarion';
import './PlaceOrder.css'

const PlaceOrderModal = () => {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState();
    const [count, setCount] = useState(1);

    const handleIncrease = () => {
        setCount(count + 1);
    }
    const handleDecress = () => {
        if (count <= 0) {
            return;
        }
        setCount(count - 1);
    }
    useEffect(() => {
        fetch(`http://localhost:4000/products/${id}`)
            .then(res => res.json())
            .then(data => setProductDetail(data[0]));
    }, [id]);
    console.log(productDetail)

    return (
        <>
            <Navigarion></Navigarion>

            <div className="place-order my-5">
                <div className="section-title text-center">
                    <h2 className='mb-5'>Place <span className='text-style'>Order</span></h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img style={{ height: '375px' }} className='w-100' src={productDetail?.img} alt="" />
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
                            <p>Product-Description: {productDetail?.desc}</p>
                            <h3 className='text-style'>Price : <del style={{ color: '#000' }}>$1050.00</del> {productDetail?.price}.00</h3>
                            <div className="quantity mb-3">
                                <h2>{count}</h2>
                                <button className='plus' onClick={handleIncrease}>+</button>
                                <button className='minus' onClick={handleDecress}>-</button>
                            </div>
                            <button className='btn btn-success box-button'>Add To Cart <i class="fas fa-cart-plus"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
};

export default PlaceOrderModal;