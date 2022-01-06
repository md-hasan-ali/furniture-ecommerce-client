// Import Necessary file 
import React from 'react';
import './Banner.css'

// Banner Functional Component 
const Banner = () => {
    return (
        <div className='banner-area'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="banner-content">
                            <h1>Welcome To <br /><span className='text-style'>Furniture</span> Shopping Moll</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga repudiandae ea repellat, neque quaerat inventore dignissimos assumenda ex distinctio, hic accusantium animi, vitae iste magni!</p>
                            <a href='#newArrivals' className="box-button btn btn-success me-2">New Arrivells</a>
                            <button className="box-button btn btn-danger">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;