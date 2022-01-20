import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Rating from 'react-rating';
import './review.css'

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://still-thicket-39969.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <div className='container my-5'>
            <div className="section-title text-center">
                <h2 className='mb-5 pb-5'>Our Customers <span className='text-style'>Reviews</span></h2>
            </div>

            {reviews.length === 0 ?
                <div className="text-center">
                    <Spinner size="xl" animation="border" variant="danger" />
                </div>
                : <div className="row">
                    {
                        reviews.map(review =>

                            <div key={review._id} className='col-md-4'>
                                <div className="single-review">
                                    <img src={review?.img} alt="" />
                                    <h5 className='mt-2'>User Name: {review?.name}</h5>
                                    <p>User Email: {review?.email}</p>
                                    <p className='rating'><Rating
                                        style={{ color: "#95cd41" }}
                                        initialRating={review.start}
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"
                                        readonly
                                    /> <strong style={{ color: "#95cd41" }}>({review.start})</strong> </p>
                                    <p>Messege: {review?.desc}</p>
                                </div>
                            </div>

                        )
                    }
                </div>}

        </div >
    );
};

export default Review;