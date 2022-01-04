import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-area'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2>Contact Me!!</h2>
                        <p><strong>Email</strong>: hasanaliringku@gmail.com</p>
                        <p><strong>Location</strong>: Baliadangi, Thakurgaon, Bangladesh</p>
                        <button className='btn btn-success'>Contact Me!</button>
                    </div>
                    <div className="col-md-4">
                        <h2>About Me!!</h2>
                        <p><strong>Email</strong>: hasanaliringku@gmail.com</p>
                        <p><strong>Location</strong>: Baliadangi, Thakurgaon, Bangladesh</p>
                        <button className='btn btn-danger'>About Me!</button>
                    </div>
                    <div className="col-md-4">
                        <h2>Social Icon!!</h2>
                        <p><strong>Email</strong>: hasanaliringku@gmail.com</p>
                        <p><strong>Location</strong>: Baliadangi, Thakurgaon, Bangladesh</p>
                        <button className='btn btn-success'>Contact Me!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;