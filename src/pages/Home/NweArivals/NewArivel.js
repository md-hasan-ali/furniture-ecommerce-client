import React from 'react';
import './newarrivals.css';
import img from '../../../images/sofa4.jpg'
import img1 from '../../../images/sofa8.jpg'
import img2 from '../../../images/sofa6.jpg'
import img3 from '../../../images/sofa7.jpg'
import img4 from '../../../images/sofa11.jpg'



const NewArivel = () => {
    return (
        <div className='newArrivals pt-5' id='newArrivals'>
            <div className="container">
                <div className="section-title text-center pb-5">
                    <h2>New <span className='text-style'>Arrivals</span></h2>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <img src={img} alt="" />
                    </div>
                    <div className="col-md-4">
                        <img src={img1} alt="" />
                    </div>
                    <div className="col-md-4">
                        <img src={img2} alt="" />
                    </div>
                    <div className="col-md-4">
                        <img src={img3} alt="" />
                    </div>
                    <div className="col-md-4">
                        <img src={img4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArivel;